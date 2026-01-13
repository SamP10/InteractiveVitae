'use client';

import Link from 'next/link';
import TagBadge from './TagBadge';
import ReadTimeIndicator from './ReadTimeIndicator';
import type { IBlogPost } from '@/app/data/blog';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getCardTiming } from '@/app/constants/animations';

interface BlogCardProps {
    post: IBlogPost;
    index: number;
}

export default function BlogCard({ post, index }: BlogCardProps) {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, stagger } = getCardTiming(isInitialLoad);
    const animationDelay = baseDelay + index * stagger;

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    return (
        <Link
            href={`/blog/${post.slug}`}
            className="block bg-cream text-darkPine rounded-lg overflow-hidden
                       hover:shadow-lg hover:scale-[1.02] transition-all duration-300
                       opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}
        >
            {/* Header area with gradient */}
            <div className="relative h-32 bg-gradient-to-br from-pine to-moss flex items-center justify-center">
                <div className="text-cream text-4xl opacity-30 font-bold">
                    {post.title.charAt(0)}
                </div>
            </div>

            {/* Card Content */}
            <div className="p-4">
                <div className="flex items-center gap-3 text-xs text-pine mb-2">
                    <span>{formattedDate}</span>
                    <span aria-hidden="true">·</span>
                    <ReadTimeIndicator minutes={post.readTimeMinutes} />
                </div>

                <h3 className="text-xl font-bold mb-2 line-clamp-2">{post.title}</h3>

                <p className="text-sm text-pine mb-4 line-clamp-2 min-h-[2.5rem]">{post.excerpt}</p>

                <div className="flex flex-wrap gap-2">
                    {post.tags.slice(0, 3).map((tag) => (
                        <TagBadge key={tag.id} tag={tag} />
                    ))}
                    {post.tags.length > 3 && (
                        <span className="text-xs text-pine self-center">
                            +{post.tags.length - 3} more
                        </span>
                    )}
                </div>
            </div>
        </Link>
    );
}
