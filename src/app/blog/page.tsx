'use client';

import { useState, useMemo, useCallback } from 'react';
import NavigationBar from '../components/navigation/navigationBar/navigationBar';
import NavigationContainer from '../components/navigation/navigationContainer/navigationContainer';
import Footer from '../components/footer/footer';
import BlogGrid from '../components/blog/BlogGrid';
import BlogFilters, { SortOption } from '../components/blog/BlogFilters';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getContentTiming } from '@/app/constants/animations';
import { blogPosts, getAllTags } from '@/app/data/blog';
import { usePopularityScores } from '../components/blog/hooks/usePopularityScores';

export default function BlogPage() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, animationClass } = getContentTiming(isInitialLoad);

    // Filter state
    const [selectedTags, setSelectedTags] = useState<number[]>([]);
    const [sortBy, setSortBy] = useState<SortOption>('newest');

    // Get all available tags
    const allTags = useMemo(() => getAllTags(), []);

    // Get all post IDs for popularity scoring
    const postIds = useMemo(() => blogPosts.map((p) => p.id), []);
    const popularityScores = usePopularityScores(postIds);

    // Filter and sort posts
    const filteredPosts = useMemo(() => {
        let result = [...blogPosts];

        // Filter by selected tags (posts must have ALL selected tags)
        if (selectedTags.length > 0) {
            result = result.filter((post) =>
                selectedTags.every((tagId) => post.tags.some((tag) => tag.id === tagId))
            );
        }

        // Sort
        switch (sortBy) {
            case 'newest':
                result.sort(
                    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
                );
                break;
            case 'oldest':
                result.sort(
                    (a, b) => new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime()
                );
                break;
            case 'popular':
                result.sort(
                    (a, b) => (popularityScores[b.id] || 0) - (popularityScores[a.id] || 0)
                );
                break;
        }

        return result;
    }, [selectedTags, sortBy, popularityScores]);

    // Handlers
    const handleTagToggle = useCallback((tagId: number) => {
        setSelectedTags((prev) =>
            prev.includes(tagId) ? prev.filter((id) => id !== tagId) : [...prev, tagId]
        );
    }, []);

    const handleSortChange = useCallback((sort: SortOption) => {
        setSortBy(sort);
    }, []);

    const handleClearFilters = useCallback(() => {
        setSelectedTags([]);
        setSortBy('newest');
    }, []);

    return (
        <div className="min-h-screen flex flex-col">
            <NavigationBar />
            <NavigationContainer />

            <main className="m-4 flex items-center justify-center flex-col gap-8 flex-1">
                <header
                    className={`w-4/5 text-center ${animationClass}`}
                    style={{ animationDelay: `${baseDelay}s` }}
                >
                    <h1 className="text-4xl text-cream mb-4">Blog</h1>
                    <p className="text-lg text-cream opacity-80">
                        Thoughts, tutorials, and insights from my journey in software development
                    </p>
                </header>

                <section className="w-4/5 space-y-6">
                    <BlogFilters
                        tags={allTags}
                        selectedTags={selectedTags}
                        onTagToggle={handleTagToggle}
                        sortBy={sortBy}
                        onSortChange={handleSortChange}
                        onClearFilters={handleClearFilters}
                    />

                    <BlogGrid posts={filteredPosts} />

                    {filteredPosts.length === 0 && selectedTags.length > 0 && (
                        <p className="text-cream text-center py-8">
                            No posts match the selected filters.{' '}
                            <button
                                onClick={handleClearFilters}
                                className="underline hover:text-moss transition-colors"
                            >
                                Clear filters
                            </button>
                        </p>
                    )}
                </section>
            </main>

            <Footer />
        </div>
    );
}
