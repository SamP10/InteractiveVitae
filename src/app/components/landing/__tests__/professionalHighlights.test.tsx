import React from 'react';
import { render, screen } from '@testing-library/react';
import ProfessionalHighlights from '../professionalHighlights/ProfessionalHighlights';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('@/app/data/experience', () => ({
    experienceData: [
        {
            id: 1,
            category: 'work',
            title: 'Engineer',
            subtitle: 'Acme',
            dateStart: '2022',
            dateEnd: null,
            summary: 'Built things',
            achievements: ['Did X', 'Did Y'],
            technologies: [],
            featured: true
        },
        {
            id: 2,
            category: 'education',
            title: 'MSc AI',
            subtitle: 'University',
            dateStart: '2021',
            dateEnd: '2022',
            summary: 'Studied',
            achievements: ['Graduated'],
            featured: true
        },
        {
            id: 3,
            category: 'project',
            title: 'Side Project',
            subtitle: 'Personal',
            dateStart: '2023',
            dateEnd: null,
            summary: 'Personal project',
            achievements: ['Built it'],
            featured: true
        }
    ]
}));

describe('ProfessionalHighlights', () => {
    test('renders section heading', () => {
        // Given / When
        render(<ProfessionalHighlights />);

        // Then
        expect(screen.getByText('Professional Journey')).toBeDefined();
    });

    test('renders featured work entries', () => {
        // Given / When
        render(<ProfessionalHighlights />);

        // Then
        expect(screen.getByText('Engineer')).toBeDefined();
    });

    test('renders featured education entries', () => {
        // Given / When
        render(<ProfessionalHighlights />);

        // Then
        expect(screen.getByText('MSc AI')).toBeDefined();
    });

    test('does not render featured project entries', () => {
        // Given / When
        render(<ProfessionalHighlights />);

        // Then — projects are excluded from ProfessionalHighlights
        expect(screen.queryByText('Side Project')).toBeNull();
    });

    test('renders stats bar', () => {
        // Given / When
        render(<ProfessionalHighlights />);

        // Then
        expect(screen.getByText('Years Experience')).toBeDefined();
        expect(screen.getByText('Stories Delivered')).toBeDefined();
        expect(screen.getByText('Technologies')).toBeDefined();
    });
});
