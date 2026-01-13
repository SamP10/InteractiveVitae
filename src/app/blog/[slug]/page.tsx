'use client';

import { use } from 'react';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import NavigationBar from '../../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../../components/navigation/navigationContainer/navigationContainer';
import Footer from '../../components/footer/footer';
import TagBadge from '../../components/blog/TagBadge';
import ReactionBar from '../../components/blog/ReactionBar';
import ReadTimeIndicator from '../../components/blog/ReadTimeIndicator';
import { getBlogPostBySlug } from '@/app/data/blog';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getContentTiming } from '@/app/constants/animations';

interface BlogPostPageProps {
    params: Promise<{ slug: string }>;
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
    const { slug } = use(params);
    const post = getBlogPostBySlug(slug);

    const isInitialLoad = useInitialLoad();
    const { baseDelay, animationClass } = getContentTiming(isInitialLoad);

    if (!post) {
        notFound();
    }

    const formattedDate = new Date(post.publishedAt).toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <NavigationContainer />

            <main className="m-4 flex items-center justify-center flex-col gap-8 flex-1">
                <article
                    className={`w-4/5 max-w-3xl ${animationClass}`}
                    style={{ animationDelay: `${baseDelay}s` }}
                >
                    {/* Back link */}
                    <Link
                        href="/blog"
                        className="text-cream hover:text-moss transition-colors mb-6 inline-flex items-center gap-2"
                    >
                        <svg
                            className="w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            aria-hidden="true"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M15 19l-7-7 7-7"
                            />
                        </svg>
                        Back to Blog
                    </Link>

                    {/* Post header */}
                    <header className="mb-8">
                        <h1 className="text-4xl text-cream mb-4 leading-tight">{post.title}</h1>
                        <div className="flex flex-wrap items-center gap-4 text-cream opacity-80 text-sm mb-4">
                            <span>{formattedDate}</span>
                            <span aria-hidden="true">·</span>
                            <ReadTimeIndicator minutes={post.readTimeMinutes} />
                            <span aria-hidden="true">·</span>
                            <span>By {post.author}</span>
                        </div>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <TagBadge key={tag.id} tag={tag} />
                            ))}
                        </div>
                    </header>

                    {/* Post content */}
                    <div className="prose prose-lg max-w-none text-cream leading-relaxed">
                        {post.content.split('\n\n').map((paragraph, index) => {
                            // Handle markdown-style headers
                            if (paragraph.startsWith('## ')) {
                                return (
                                    <h2 key={index} className="text-2xl font-bold mt-8 mb-4">
                                        {paragraph.replace('## ', '')}
                                    </h2>
                                );
                            }
                            if (paragraph.startsWith('### ')) {
                                return (
                                    <h3 key={index} className="text-xl font-bold mt-6 mb-3">
                                        {paragraph.replace('### ', '')}
                                    </h3>
                                );
                            }
                            // Handle lists
                            if (paragraph.includes('\n- ') || paragraph.startsWith('- ')) {
                                const items = paragraph.split('\n').filter((line) => line.trim());
                                return (
                                    <ul key={index} className="list-disc list-inside my-4 space-y-2">
                                        {items.map((item, i) => (
                                            <li key={i}>{item.replace(/^- /, '')}</li>
                                        ))}
                                    </ul>
                                );
                            }
                            // Handle numbered lists
                            if (/^\d+\.\s/.test(paragraph)) {
                                const items = paragraph.split('\n').filter((line) => line.trim());
                                return (
                                    <ol
                                        key={index}
                                        className="list-decimal list-inside my-4 space-y-2"
                                    >
                                        {items.map((item, i) => (
                                            <li key={i}>{item.replace(/^\d+\.\s*/, '')}</li>
                                        ))}
                                    </ol>
                                );
                            }
                            // Regular paragraphs
                            return (
                                <p key={index} className="mb-4">
                                    {paragraph}
                                </p>
                            );
                        })}
                    </div>

                    {/* Reactions */}
                    <div className="mt-12 pt-8 border-t border-cream border-opacity-20">
                        <p className="text-cream mb-4">What did you think of this post?</p>
                        <ReactionBar postId={post.id} />
                    </div>
                </article>
            </main>

            <Footer />
        </div>
    );
}
