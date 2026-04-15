import React from 'react';
import { render, screen } from '@testing-library/react';
import NavigationItem from '../navigationItem/navigationItem';
import '@testing-library/jest-dom';

describe('NavigationItem', () => {
    test('renders the correct label for the given index', () => {
        // Given / When
        render(<NavigationItem index={0} showNav={true} />);

        // Then
        expect(screen.getByText('Item 1')).toBeDefined();
    });

    test('renders label for non-zero index', () => {
        // Given / When
        render(<NavigationItem index={4} showNav={true} />);

        // Then
        expect(screen.getByText('Item 5')).toBeDefined();
    });

    test('applies opacity-100 class when showNav is true', () => {
        // Given / When
        render(<NavigationItem index={0} showNav={true} />);
        const button = screen.getByRole('button');

        // Then
        expect(button.className).toContain('opacity-100');
    });

    test('applies opacity-0 class when showNav is false', () => {
        // Given / When
        render(<NavigationItem index={0} showNav={false} />);
        const button = screen.getByRole('button');

        // Then
        expect(button.className).toContain('opacity-0');
    });
});
