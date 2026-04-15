import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import NavigationContainer from '../navigationContainer/navigationContainer';
import '@testing-library/jest-dom';

describe('NavigationContainer', () => {
    test('renders 6 navigation items', () => {
        // Given / When
        render(<NavigationContainer />);
        const buttons = screen.getAllByRole('button');

        // Then — 6 nav items plus the toggle button
        const navItemButtons = buttons.filter((btn) => btn.textContent?.startsWith('Item'));
        expect(navItemButtons).toHaveLength(6);
    });

    test('renders a toggle button', () => {
        // Given / When
        render(<NavigationContainer />);

        // Then — the toggle button contains an SVG chevron
        const buttons = screen.getAllByRole('button');
        const toggleButton = buttons.find((btn) => btn.querySelector('svg'));
        expect(toggleButton).toBeDefined();
    });

    test('toggles nav open state when the toggle button is clicked', () => {
        // Given
        render(<NavigationContainer />);
        const buttons = screen.getAllByRole('button');
        const toggleButton = buttons[buttons.length - 1];

        // When — initial state has animate-slide-out-right
        const gridBefore = document.querySelector('.animate-slide-out-right');
        expect(gridBefore).not.toBeNull();

        // When — click to open
        fireEvent.click(toggleButton);

        // Then — grid should now have animate-slide-in-left
        const gridAfter = document.querySelector('.animate-slide-in-left');
        expect(gridAfter).not.toBeNull();
    });
});
