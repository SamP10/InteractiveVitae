'use client';

import { useState } from 'react';
import { BLOG_TAGS, ITag } from '@/app/data/blog-types';

interface FormData {
    title: string;
    slug: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    tags: ITag[];
    readTimeMinutes: number;
    featured: boolean;
}

const initialFormData: FormData = {
    title: '',
    slug: '',
    excerpt: '',
    content: '',
    author: 'Sam Plant',
    publishedAt: new Date().toISOString().split('T')[0],
    tags: [],
    readTimeMinutes: 5,
    featured: false
};

export default function BlogPostForm() {
    const [formData, setFormData] = useState<FormData>(initialFormData);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(
        null
    );

    const handleTagToggle = (tag: ITag) => {
        setFormData((prev) => ({
            ...prev,
            tags: prev.tags.some((t) => t.id === tag.id)
                ? prev.tags.filter((t) => t.id !== tag.id)
                : [...prev.tags, tag]
        }));
    };

    const generateSlug = (title: string) => {
        return title
            .toLowerCase()
            .replace(/[^a-z0-9]+/g, '-')
            .replace(/^-|-$/g, '');
    };

    const handleTitleChange = (title: string) => {
        setFormData((prev) => ({
            ...prev,
            title,
            slug: generateSlug(title)
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setMessage(null);

        try {
            const res = await fetch('/api/blog', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setMessage({ type: 'success', text: 'Blog post created successfully!' });
                setFormData(initialFormData);
            } else {
                const data = await res.json();
                setMessage({ type: 'error', text: data.error || 'Failed to create post' });
            }
        } catch {
            setMessage({ type: 'error', text: 'Network error. Please try again.' });
        }

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-cream rounded-lg p-6 space-y-6">
            <h2 className="text-xl text-darkPine font-bold">Create New Blog Post</h2>

            {message && (
                <div
                    className={`p-4 rounded ${
                        message.type === 'success'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-red-100 text-red-700'
                    }`}
                >
                    {message.text}
                </div>
            )}

            {/* Title */}
            <div>
                <label htmlFor="title" className="block text-darkPine font-medium mb-2">
                    Title
                </label>
                <input
                    id="title"
                    type="text"
                    value={formData.title}
                    onChange={(e) => handleTitleChange(e.target.value)}
                    className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                    required
                />
            </div>

            {/* Slug */}
            <div>
                <label htmlFor="slug" className="block text-darkPine font-medium mb-2">
                    Slug
                </label>
                <input
                    id="slug"
                    type="text"
                    value={formData.slug}
                    onChange={(e) => setFormData((prev) => ({ ...prev, slug: e.target.value }))}
                    className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine bg-gray-50 focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                    required
                />
                <p className="text-sm text-pine mt-1">Auto-generated from title. Edit if needed.</p>
            </div>

            {/* Excerpt */}
            <div>
                <label htmlFor="excerpt" className="block text-darkPine font-medium mb-2">
                    Excerpt
                </label>
                <textarea
                    id="excerpt"
                    value={formData.excerpt}
                    onChange={(e) => setFormData((prev) => ({ ...prev, excerpt: e.target.value }))}
                    className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                    rows={2}
                    required
                />
                <p className="text-sm text-pine mt-1">
                    Brief description shown in blog list cards.
                </p>
            </div>

            {/* Content */}
            <div>
                <label htmlFor="content" className="block text-darkPine font-medium mb-2">
                    Content
                </label>
                <textarea
                    id="content"
                    value={formData.content}
                    onChange={(e) => setFormData((prev) => ({ ...prev, content: e.target.value }))}
                    className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine font-mono text-sm focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                    rows={15}
                    required
                />
                <p className="text-sm text-pine mt-1">
                    Supports ## headers, ### subheaders, - bullet lists, and numbered lists.
                </p>
            </div>

            {/* Author and Date Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="author" className="block text-darkPine font-medium mb-2">
                        Author
                    </label>
                    <input
                        id="author"
                        type="text"
                        value={formData.author}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, author: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                        required
                    />
                </div>
                <div>
                    <label htmlFor="publishedAt" className="block text-darkPine font-medium mb-2">
                        Publish Date
                    </label>
                    <input
                        id="publishedAt"
                        type="date"
                        value={formData.publishedAt}
                        onChange={(e) =>
                            setFormData((prev) => ({ ...prev, publishedAt: e.target.value }))
                        }
                        className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                        required
                    />
                </div>
            </div>

            {/* Read Time and Featured Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label htmlFor="readTime" className="block text-darkPine font-medium mb-2">
                        Read Time (minutes)
                    </label>
                    <input
                        id="readTime"
                        type="number"
                        value={formData.readTimeMinutes}
                        onChange={(e) =>
                            setFormData((prev) => ({
                                ...prev,
                                readTimeMinutes: parseInt(e.target.value) || 5
                            }))
                        }
                        className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                        min={1}
                        required
                    />
                </div>
                <div className="flex items-center pt-8">
                    <label className="flex items-center gap-2 text-darkPine cursor-pointer">
                        <input
                            type="checkbox"
                            checked={formData.featured}
                            onChange={(e) =>
                                setFormData((prev) => ({ ...prev, featured: e.target.checked }))
                            }
                            className="w-5 h-5 rounded border-pine text-moss focus:ring-moss"
                        />
                        Featured Post
                    </label>
                </div>
            </div>

            {/* Tags */}
            <div>
                <label className="block text-darkPine font-medium mb-2">Tags</label>
                <div className="flex flex-wrap gap-2">
                    {Object.values(BLOG_TAGS).map((tag) => {
                        const isSelected = formData.tags.some((t) => t.id === tag.id);
                        return (
                            <button
                                key={tag.id}
                                type="button"
                                onClick={() => handleTagToggle(tag)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm transition-colors ${
                                    isSelected
                                        ? 'bg-moss text-cream'
                                        : 'bg-pine text-cream hover:bg-moss'
                                }`}
                            >
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: tag.color }}
                                />
                                {tag.name}
                            </button>
                        );
                    })}
                </div>
                {formData.tags.length === 0 && (
                    <p className="text-sm text-red-600 mt-2">Select at least one tag</p>
                )}
            </div>

            {/* Submit Button */}
            <button
                type="submit"
                disabled={isSubmitting || formData.tags.length === 0}
                className="w-full bg-moss text-cream py-3 rounded-lg hover:bg-pine transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? 'Creating...' : 'Create Blog Post'}
            </button>
        </form>
    );
}
