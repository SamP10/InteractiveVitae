import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationBar from '../navigationBar/navigationBar';
import '@testing-library/jest-dom';

jest.mock('next/image');
jest.mock('next/link', () => {
    return function MockLink({ href, children, ...props }: { href: string; children: React.ReactNode; [key: string]: unknown }) {
        return <a href={href} {...props}>{children}</a>;
    };
});
jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));
jest.mock('../../callingCard/callingCard', () => {
    return function MockCallingCard() {
        return <div data-testid="calling-card" />;
    };
});

describe('NavigationBar', () => {
    beforeEach(() => {
        render(<NavigationBar />);
    });

    test('renders the CallingCard component', () => {
        // Given / When / Then
        expect(screen.getByTestId('calling-card')).toBeDefined();
    });

    test('renders HOME nav link', () => {
        // Given / When
        const link = screen.getByText('HOME');

        // Then
        expect(link).toBeDefined();
        expect(link).toHaveAttribute('href', '/');
    });

    test('renders PROJECTS nav link', () => {
        // Given / When
        const link = screen.getByText('PROJECTS');

        // Then
        expect(link).toBeDefined();
        expect(link).toHaveAttribute('href', '/projects');
    });

    test('renders EXPERIENCE nav link', () => {
        // Given / When
        const link = screen.getByText('EXPERIENCE');

        // Then
        expect(link).toBeDefined();
        expect(link).toHaveAttribute('href', '/experience');
    });

    test('renders BLOG nav link', () => {
        // Given / When
        const link = screen.getByText('BLOG');

        // Then
        expect(link).toBeDefined();
        expect(link).toHaveAttribute('href', '/blog');
    });

    test('does not apply animation classes when not initial load', () => {
        // Given / When
        const link = screen.getByText('HOME');

        // Then
        expect(link.className).not.toContain('animate-nav-pop-up');
    });
});
