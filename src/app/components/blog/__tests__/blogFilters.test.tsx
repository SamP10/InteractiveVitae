import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import BlogFilters from '../BlogFilters';
import '@testing-library/jest-dom';

const mockTags = [
    { id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    { id: 2, name: 'React', slug: 'react', color: '#61DAFB' }
];

describe('BlogFilters', () => {
    const onTagToggle = jest.fn();
    const onSortChange = jest.fn();
    const onClearFilters = jest.fn();

    beforeEach(() => {
        onTagToggle.mockClear();
        onSortChange.mockClear();
        onClearFilters.mockClear();
    });

    test('renders sort options', () => {
        // Given / When
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // Then
        expect(screen.getByText('Newest')).toBeDefined();
        expect(screen.getByText('Oldest')).toBeDefined();
        expect(screen.getByText('Most Popular')).toBeDefined();
    });

    test('renders tag filter buttons', () => {
        // Given / When
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
        expect(screen.getByText('React')).toBeDefined();
    });

    test('calls onTagToggle with tag id when a tag button is clicked', () => {
        // Given
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // When
        fireEvent.click(screen.getByText('TypeScript'));

        // Then
        expect(onTagToggle).toHaveBeenCalledWith(1);
    });

    test('calls onSortChange when Oldest is clicked', () => {
        // Given
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // When
        fireEvent.click(screen.getByText('Oldest'));

        // Then
        expect(onSortChange).toHaveBeenCalledWith('oldest');
    });

    test('shows Clear all filters button when filters are active', () => {
        // Given / When
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[1]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // Then
        expect(screen.getByText('Clear all filters')).toBeDefined();
    });

    test('does not show Clear all filters button when no filters active', () => {
        // Given / When
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // Then
        expect(screen.queryByText('Clear all filters')).toBeNull();
    });

    test('calls onClearFilters when clear button is clicked', () => {
        // Given
        render(
            <BlogFilters
                tags={mockTags}
                selectedTags={[1]}
                onTagToggle={onTagToggle}
                sortBy="newest"
                onSortChange={onSortChange}
                onClearFilters={onClearFilters}
            />
        );

        // When
        fireEvent.click(screen.getByText('Clear all filters'));

        // Then
        expect(onClearFilters).toHaveBeenCalledTimes(1);
    });
});
