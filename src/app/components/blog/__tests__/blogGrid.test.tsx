import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogGrid from '../BlogGrid';
import { IBlogPost } from '@/app/data/blog-types';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('next/link', () => {
    return function MockLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
        return <a href={href} {...props}>{children}</a>;
    };
});

const mockPosts: IBlogPost[] = [
    {
        id: 1,
        slug: 'post-one',
        title: 'First Post',
        excerpt: 'First post excerpt',
        content: 'Content',
        author: 'Sam',
        publishedAt: '2024-01-01',
        tags: [{ id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' }],
        readTimeMinutes: 3
    },
    {
        id: 2,
        slug: 'post-two',
        title: 'Second Post',
        excerpt: 'Second post excerpt',
        content: 'Content',
        author: 'Sam',
        publishedAt: '2024-02-01',
        tags: [],
        readTimeMinutes: 5
    }
];

describe('BlogGrid', () => {
    test('renders a card for each post', () => {
        // Given / When
        render(<BlogGrid posts={mockPosts} />);

        // Then
        expect(screen.getByText('First Post')).toBeDefined();
        expect(screen.getByText('Second Post')).toBeDefined();
    });

    test('renders empty state when no posts provided', () => {
        // Given / When
        render(<BlogGrid posts={[]} />);

        // Then
        expect(screen.getByText('No blog posts yet. Check back soon!')).toBeDefined();
    });
});
