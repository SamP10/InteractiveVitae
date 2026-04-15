import React from 'react';
import { render, screen } from '@testing-library/react';
import HighlightCard from '../professionalHighlights/HighlightCard';
import { ITimelineEntry } from '@/app/data/experience';
import '@testing-library/jest-dom';

const mockEntry: ITimelineEntry = {
    id: 1,
    category: 'work',
    title: 'Senior Engineer',
    subtitle: 'Acme Corp',
    dateStart: '2022',
    dateEnd: null,
    summary: 'Worked on cool things',
    achievements: ['Delivered feature X', 'Improved performance by 30%'],
    technologies: [
        { id: 1, name: 'TypeScript', color: '#3178C6' }
    ]
};

describe('HighlightCard', () => {
    test('renders entry title', () => {
        // Given / When
        render(<HighlightCard entry={mockEntry} animationDelay={0} />);

        // Then
        expect(screen.getByText('Senior Engineer')).toBeDefined();
    });

    test('renders entry subtitle', () => {
        // Given / When
        render(<HighlightCard entry={mockEntry} animationDelay={0} />);

        // Then
        expect(screen.getByText('Acme Corp')).toBeDefined();
    });

    test('renders date range with Present when no end date', () => {
        // Given / When
        render(<HighlightCard entry={mockEntry} animationDelay={0} />);

        // Then
        expect(screen.getByText(/2022 - Present/)).toBeDefined();
    });

    test('renders technology badge', () => {
        // Given / When
        render(<HighlightCard entry={mockEntry} animationDelay={0} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('renders first two achievements', () => {
        // Given / When
        render(<HighlightCard entry={mockEntry} animationDelay={0} />);

        // Then
        expect(screen.getByText('Delivered feature X')).toBeDefined();
        expect(screen.getByText('Improved performance by 30%')).toBeDefined();
    });
});
