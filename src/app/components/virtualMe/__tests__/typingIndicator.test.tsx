import React from 'react';
import { render, screen } from '@testing-library/react';
import TypingIndicator from '../TypingIndicator';
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
    return function MockImage({ alt }: { alt: string }) {
        return <img alt={alt} />;
    };
});

describe('TypingIndicator', () => {
    test('renders the thinking avatar image', () => {
        // Given / When
        render(<TypingIndicator />);

        // Then
        expect(screen.getByAltText('Virtual Sam thinking')).toBeDefined();
    });

    test('renders three animated dots', () => {
        // Given / When
        const { container } = render(<TypingIndicator />);
        const dots = container.querySelectorAll('.animate-typing-dot');

        // Then
        expect(dots).toHaveLength(3);
    });
});
