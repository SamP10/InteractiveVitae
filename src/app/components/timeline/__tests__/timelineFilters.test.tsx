import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimelineFilters from '../TimelineFilters';
import '@testing-library/jest-dom';

describe('TimelineFilters', () => {
    const onFilterChange = jest.fn();

    beforeEach(() => {
        onFilterChange.mockClear();
    });

    test('renders all filter options', () => {
        // Given / When
        render(
            <TimelineFilters
                activeFilter="all"
                onFilterChange={onFilterChange}
                isInitialLoad={false}
            />
        );

        // Then
        expect(screen.getByText('All')).toBeDefined();
        expect(screen.getByText('Work')).toBeDefined();
        expect(screen.getByText('Projects')).toBeDefined();
        expect(screen.getByText('Education')).toBeDefined();
    });

    test('calls onFilterChange with correct value when Work is clicked', () => {
        // Given
        render(
            <TimelineFilters
                activeFilter="all"
                onFilterChange={onFilterChange}
                isInitialLoad={false}
            />
        );

        // When
        fireEvent.click(screen.getByText('Work'));

        // Then
        expect(onFilterChange).toHaveBeenCalledWith('work');
    });

    test('calls onFilterChange with "all" when All is clicked', () => {
        // Given
        render(
            <TimelineFilters
                activeFilter="work"
                onFilterChange={onFilterChange}
                isInitialLoad={false}
            />
        );

        // When
        fireEvent.click(screen.getByText('All'));

        // Then
        expect(onFilterChange).toHaveBeenCalledWith('all');
    });

    test('applies active style to the selected filter', () => {
        // Given / When
        render(
            <TimelineFilters
                activeFilter="work"
                onFilterChange={onFilterChange}
                isInitialLoad={false}
            />
        );
        const workButton = screen.getByText('Work');

        // Then
        expect(workButton.className).toContain('bg-moss');
    });
});
