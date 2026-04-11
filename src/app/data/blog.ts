/**
 * Blog data server-side functions
 * For types and constants, import from '@/app/data/blog-types'
 */

import { promises as fs } from 'fs';
import path from 'path';
import type { IBlogPost, ITag } from './blog-types';

// Re-export types and constants for backward compatibility
export * from './blog-types';

const DATA_FILE = path.join(process.cwd(), 'src/app/data/blog-posts.json');

interface BlogData {
    posts: IBlogPost[];
    nextId: number;
}

/**
 * Read blog posts from JSON file (server-side only)
 */
async function readBlogData(): Promise<BlogData> {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

/**
 * Get all blog posts from JSON (server-side)
 */
export async function getBlogPosts(): Promise<IBlogPost[]> {
    const data = await readBlogData();
    return data.posts;
}

/**
 * Get all blog posts sorted by newest first (server-side)
 */
export async function getSortedBlogPosts(): Promise<IBlogPost[]> {
    const posts = await getBlogPosts();
    return [...posts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a single blog post by its slug (server-side)
 */
export async function getBlogPostBySlug(slug: string): Promise<IBlogPost | undefined> {
    const posts = await getBlogPosts();
    return posts.find((post) => post.slug === slug);
}

/**
 * Get all unique tags from blog posts (server-side)
 */
export async function getAllTags(): Promise<ITag[]> {
    const posts = await getBlogPosts();
    const tagsMap = new Map<number, ITag>();
    posts.forEach((post) => {
        post.tags.forEach((tag) => tagsMap.set(tag.id, tag));
    });
    return Array.from(tagsMap.values());
}
