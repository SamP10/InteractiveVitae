import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Timeline from '../Timeline';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('@/app/data/experience', () => ({
    experienceData: [
        {
            id: 1,
            category: 'work',
            title: 'Work Entry',
            subtitle: 'Acme',
            dateStart: '2022',
            dateEnd: null,
            summary: 'Worked here',
            achievements: ['Did X']
        },
        {
            id: 2,
            category: 'education',
            title: 'Edu Entry',
            subtitle: 'Uni',
            dateStart: '2020',
            dateEnd: '2022',
            summary: 'Studied here',
            achievements: ['Graduated']
        }
    ],
    categoryInfo: {
        work: { label: 'Work', color: 'text-amber', bgColor: 'bg-amber' },
        project: { label: 'Project', color: 'text-slate', bgColor: 'bg-slate' },
        education: { label: 'Education', color: 'text-teal', bgColor: 'bg-teal' }
    }
}));

describe('Timeline', () => {
    test('renders all entries by default', () => {
        // Given / When
        render(<Timeline />);

        // Then
        expect(screen.getByText('Work Entry')).toBeDefined();
        expect(screen.getByText('Edu Entry')).toBeDefined();
    });

    test('filters to only work entries when Work filter is selected', () => {
        // Given
        render(<Timeline />);

        // When — click the Work filter button specifically
        fireEvent.click(screen.getByRole('button', { name: 'Work' }));

        // Then
        expect(screen.getByText('Work Entry')).toBeDefined();
        expect(screen.queryByText('Edu Entry')).toBeNull();
    });

    test('filters to only education entries when Education filter is selected', () => {
        // Given
        render(<Timeline />);

        // When
        fireEvent.click(screen.getByRole('button', { name: 'Education' }));

        // Then
        expect(screen.getByText('Edu Entry')).toBeDefined();
        expect(screen.queryByText('Work Entry')).toBeNull();
    });

    test('shows all entries again when All filter is selected after filtering', () => {
        // Given
        render(<Timeline />);
        fireEvent.click(screen.getByRole('button', { name: 'Work' }));

        // When
        fireEvent.click(screen.getByRole('button', { name: 'All' }));

        // Then
        expect(screen.getByText('Work Entry')).toBeDefined();
        expect(screen.getByText('Edu Entry')).toBeDefined();
    });

    test('expands a timeline item when Show more is clicked', () => {
        // Given
        render(<Timeline />);
        const toggleButtons = screen.getAllByText('Show more');

        // When
        fireEvent.click(toggleButtons[0]);

        // Then
        expect(screen.getByText('Show less')).toBeDefined();
    });
});
