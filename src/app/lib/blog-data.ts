import { promises as fs } from 'fs';
import path from 'path';
import { IBlogPost } from '@/app/data/blog';

const DATA_FILE = path.join(process.cwd(), 'src/app/data/blog-posts.json');

interface BlogData {
    posts: IBlogPost[];
    nextId: number;
}

export async function readBlogData(): Promise<BlogData> {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
}

export async function writeBlogData(data: BlogData): Promise<void> {
    const tempFile = `${DATA_FILE}.tmp`;
    await fs.writeFile(tempFile, JSON.stringify(data, null, 4));
    await fs.rename(tempFile, DATA_FILE);
}

export async function addBlogPost(post: Omit<IBlogPost, 'id'>): Promise<IBlogPost> {
    const data = await readBlogData();
    const newPost: IBlogPost = { ...post, id: data.nextId };
    data.posts.unshift(newPost); // Add to beginning for newest first
    data.nextId++;
    await writeBlogData(data);
    return newPost;
}

export async function getBlogPosts(): Promise<IBlogPost[]> {
    const data = await readBlogData();
    return data.posts;
}

export async function getBlogPostBySlugAsync(slug: string): Promise<IBlogPost | undefined> {
    const data = await readBlogData();
    return data.posts.find((post) => post.slug === slug);
}
