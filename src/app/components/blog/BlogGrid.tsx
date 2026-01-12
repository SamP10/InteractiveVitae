'use client';

import BlogCard from './BlogCard';
import type { IBlogPost } from '@/app/data/blog';

interface BlogGridProps {
    posts: IBlogPost[];
}

export default function BlogGrid({ posts }: BlogGridProps) {
    if (posts.length === 0) {
        return (
            <div className="text-center text-cream py-12">
                <p className="text-lg">No blog posts yet. Check back soon!</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
            ))}
        </div>
    );
}
