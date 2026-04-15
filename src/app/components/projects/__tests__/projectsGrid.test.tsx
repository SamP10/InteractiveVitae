import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectsGrid from '../projectsGrid/projectsGrid';
import '@testing-library/jest-dom';

jest.mock('next/image');
jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('@/app/data/projects', () => ({
    projects: [
        {
            id: 1,
            name: 'Alpha',
            description: 'First project',
            languages: [],
            githubUrl: 'https://github.com/test/alpha',
            dates: { start: '2024', end: null }
        },
        {
            id: 2,
            name: 'Beta',
            description: 'Second project',
            languages: [],
            githubUrl: 'https://github.com/test/beta',
            dates: { start: '2023', end: '2024' }
        }
    ]
}));

describe('ProjectsGrid', () => {
    test('renders a card for each project', () => {
        // Given / When
        render(<ProjectsGrid />);

        // Then
        expect(screen.getByText('Alpha')).toBeDefined();
        expect(screen.getByText('Beta')).toBeDefined();
    });

    test('renders the correct number of project links', () => {
        // Given / When
        render(<ProjectsGrid />);
        const links = screen.getAllByRole('link');

        // Then
        expect(links).toHaveLength(2);
    });
});
