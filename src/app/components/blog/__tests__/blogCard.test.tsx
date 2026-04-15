import React from 'react';
import { render, screen } from '@testing-library/react';
import BlogCard from '../BlogCard';
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

const mockPost: IBlogPost = {
    id: 1,
    slug: 'test-post',
    title: 'Test Blog Post',
    excerpt: 'An interesting excerpt',
    content: 'Full content here',
    author: 'Sam',
    publishedAt: '2024-01-15',
    tags: [
        { id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
        { id: 2, name: 'React', slug: 'react', color: '#61DAFB' }
    ],
    readTimeMinutes: 4
};

describe('BlogCard', () => {
    test('renders post title', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);

        // Then
        expect(screen.getByText('Test Blog Post')).toBeDefined();
    });

    test('renders post excerpt', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);

        // Then
        expect(screen.getByText('An interesting excerpt')).toBeDefined();
    });

    test('renders formatted date', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);

        // Then
        expect(screen.getByText('Jan 15, 2024')).toBeDefined();
    });

    test('renders read time', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);

        // Then
        expect(screen.getByText('4 min read')).toBeDefined();
    });

    test('renders tag badges', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
        expect(screen.getByText('React')).toBeDefined();
    });

    test('links to the blog post slug', () => {
        // Given / When
        render(<BlogCard post={mockPost} index={0} />);
        const link = screen.getByRole('link');

        // Then
        expect(link).toHaveAttribute('href', '/blog/test-post');
    });
});
