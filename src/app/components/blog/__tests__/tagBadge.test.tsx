import React from 'react';
import { render, screen } from '@testing-library/react';
import TagBadge from '../TagBadge';
import '@testing-library/jest-dom';

describe('TagBadge', () => {
    test('renders the tag name', () => {
        // Given / When
        render(<TagBadge tag={{ id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' }} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('applies the correct colour to the colour dot', () => {
        // Given / When
        render(<TagBadge tag={{ id: 2, name: 'React', slug: 'react', color: '#61DAFB' }} />);
        const dot = document.querySelector('[aria-hidden="true"]') as HTMLElement;

        // Then
        expect(dot.style.backgroundColor).toBe('rgb(97, 218, 251)');
    });
});
