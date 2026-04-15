import React from 'react';
import { render, screen } from '@testing-library/react';
import SkillsShowcase from '../skillsShowcase/SkillsShowcase';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

// RadarChart renders SVG — mock it to simplify tests
jest.mock('../skillsShowcase/RadarChart', () => {
    return function MockRadarChart({ title }: { title: string }) {
        return <div data-testid={`radar-chart-${title}`}>{title}</div>;
    };
});

describe('SkillsShowcase', () => {
    test('renders section heading', () => {
        // Given / When
        render(<SkillsShowcase />);

        // Then
        expect(screen.getByText('Technical Toolkit')).toBeDefined();
    });

    test('renders a RadarChart for each skill category', () => {
        // Given / When
        render(<SkillsShowcase />);

        // Then
        expect(screen.getByTestId('radar-chart-Languages')).toBeDefined();
        expect(screen.getByTestId('radar-chart-Frameworks')).toBeDefined();
        expect(screen.getByTestId('radar-chart-Tools & Platforms')).toBeDefined();
    });

    test('renders the legend labels', () => {
        // Given / When
        render(<SkillsShowcase />);

        // Then — each label appears at least once (in the legend)
        expect(screen.getAllByText('Languages').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Frameworks').length).toBeGreaterThanOrEqual(1);
        expect(screen.getAllByText('Tools & Platforms').length).toBeGreaterThanOrEqual(1);
    });
});
