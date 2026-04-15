import React from 'react';
import { render, screen } from '@testing-library/react';
import ProjectCard from '../projectCard/projectCard';
import { IProject } from '@/app/data/projects';
import '@testing-library/jest-dom';

jest.mock('next/image');
jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

const mockProject: IProject = {
    id: 1,
    name: 'Test Project',
    description: 'A project description',
    languages: [
        { id: 1, name: 'TypeScript', color: '#3178C6' },
        { id: 2, name: 'React', color: '#61DAFB' }
    ],
    githubUrl: 'https://github.com/test/project',
    dates: { start: '2024', end: null }
};

describe('ProjectCard', () => {
    test('renders project title', () => {
        // Given / When
        render(<ProjectCard project={mockProject} index={0} />);

        // Then
        expect(screen.getByText('Test Project')).toBeDefined();
    });

    test('renders project description', () => {
        // Given / When
        render(<ProjectCard project={mockProject} index={0} />);

        // Then
        expect(screen.getByText('A project description')).toBeDefined();
    });

    test('renders language badges', () => {
        // Given / When
        render(<ProjectCard project={mockProject} index={0} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
        expect(screen.getByText('React')).toBeDefined();
    });

    test('links to the github URL', () => {
        // Given / When
        render(<ProjectCard project={mockProject} index={0} />);
        const link = screen.getByRole('link');

        // Then
        expect(link).toHaveAttribute('href', 'https://github.com/test/project');
    });

    test('shows start date and Present when no end date', () => {
        // Given / When
        render(<ProjectCard project={mockProject} index={0} />);

        // Then
        expect(screen.getByText(/2024.*Present/)).toBeDefined();
    });

    test('shows "No description available" when description is null', () => {
        // Given
        const projectNoDesc = { ...mockProject, description: null };

        // When
        render(<ProjectCard project={projectNoDesc} index={0} />);

        // Then
        expect(screen.getByText('No description available')).toBeDefined();
    });

    test('shows end date when provided', () => {
        // Given
        const projectWithEnd = { ...mockProject, dates: { start: '2022', end: '2024' } };

        // When
        render(<ProjectCard project={projectWithEnd} index={0} />);

        // Then
        expect(screen.getByText(/2022.*2024/)).toBeDefined();
    });
});
