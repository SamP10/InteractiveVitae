import React from 'react';
import { render, screen } from '@testing-library/react';
import LanguageBadge from '../languageBadge/languageBadge';
import '@testing-library/jest-dom';

describe('LanguageBadge', () => {
    test('renders the language name', () => {
        // Given / When
        render(<LanguageBadge language="TypeScript" color="#3178C6" />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('applies the correct colour to the colour dot', () => {
        // Given / When
        render(<LanguageBadge language="Python" color="#3776AB" />);
        const dot = document.querySelector('[aria-hidden="true"]') as HTMLElement;

        // Then
        expect(dot.style.backgroundColor).toBe('rgb(55, 118, 171)');
    });
});
