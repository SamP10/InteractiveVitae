import React from 'react';
import { render, screen } from '@testing-library/react';
import FeaturedProjectCard from '../featuredProjects/FeaturedProjectCard';
import { IProject } from '@/app/data/projects';
import '@testing-library/jest-dom';

const mockProject: IProject = {
    id: 1,
    name: 'Test Project',
    description: 'A test project description',
    languages: [
        { id: 1, name: 'TypeScript', color: '#3178C6' }
    ],
    githubUrl: 'https://github.com/test/project',
    dates: { start: '2024', end: null },
    featured: true
};

describe('FeaturedProjectCard', () => {
    test('renders project name', () => {
        // Given / When
        render(<FeaturedProjectCard project={mockProject} animationDelay={0} />);

        // Then
        expect(screen.getAllByText('Test Project').length).toBeGreaterThan(0);
    });

    test('renders project description', () => {
        // Given / When
        render(<FeaturedProjectCard project={mockProject} animationDelay={0} />);

        // Then
        expect(screen.getByText('A test project description')).toBeDefined();
    });

    test('renders language badge', () => {
        // Given / When
        render(<FeaturedProjectCard project={mockProject} animationDelay={0} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('renders View Project link when githubUrl is provided', () => {
        // Given / When
        render(<FeaturedProjectCard project={mockProject} animationDelay={0} />);

        // Then
        const link = screen.getByText('View Project');
        expect(link).toBeDefined();
        expect(link.closest('a')).toHaveAttribute('href', 'https://github.com/test/project');
    });

    test('shows Present when no end date', () => {
        // Given / When
        render(<FeaturedProjectCard project={mockProject} animationDelay={0} />);

        // Then
        expect(screen.getByText(/Present/)).toBeDefined();
    });

    test('does not render View Project link when no githubUrl', () => {
        // Given
        const projectWithoutUrl = { ...mockProject, githubUrl: '' };

        // When
        render(<FeaturedProjectCard project={projectWithoutUrl} animationDelay={0} />);

        // Then
        expect(screen.queryByText('View Project')).toBeNull();
    });
});
