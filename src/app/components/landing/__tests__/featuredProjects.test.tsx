import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjects from '../featuredProjects/FeaturedProjects';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('@/app/data/projects', () => ({
    projects: [
        {
            id: 1,
            name: 'Alpha Project',
            description: 'Description of Alpha',
            languages: [{ id: 1, name: 'TypeScript', color: '#3178C6' }],
            githubUrl: 'https://github.com/test/alpha',
            dates: { start: '2024', end: null },
            featured: true
        },
        {
            id: 2,
            name: 'Beta Project',
            description: 'Description of Beta',
            languages: [],
            githubUrl: 'https://github.com/test/beta',
            dates: { start: '2023', end: '2024' },
            featured: false
        }
    ]
}));

describe('FeaturedProjects', () => {
    test('renders section heading', () => {
        // Given / When
        render(<FeaturedProjects />);

        // Then
        expect(screen.getByText('Featured Projects')).toBeDefined();
    });

    test('renders only featured projects', () => {
        // Given / When
        render(<FeaturedProjects />);

        // Then
        expect(screen.queryAllByText('Alpha Project').length).toBeGreaterThan(0);
        expect(screen.queryByText('Beta Project')).toBeNull();
    });

    test('renders See All Projects link', () => {
        // Given / When
        render(<FeaturedProjects />);

        // Then
        expect(screen.getByText('See All Projects')).toBeDefined();
    });
});
