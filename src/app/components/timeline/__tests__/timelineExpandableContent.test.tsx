import React from 'react';
import { render, screen } from '@testing-library/react';
import TimelineExpandableContent from '../TimelineExpandableContent';
import { ITimelineEntry } from '@/app/data/experience';
import '@testing-library/jest-dom';

const mockEntry: ITimelineEntry = {
    id: 1,
    category: 'work',
    title: 'Engineer',
    subtitle: 'Acme',
    dateStart: '2022',
    dateEnd: null,
    summary: 'Built things',
    achievements: ['Achievement one', 'Achievement two'],
    technologies: [{ id: 1, name: 'TypeScript', color: '#3178C6' }]
};

describe('TimelineExpandableContent', () => {
    test('renders achievements when expanded', () => {
        // Given / When
        render(<TimelineExpandableContent entry={mockEntry} isExpanded={true} />);

        // Then
        expect(screen.getByText('Achievement one')).toBeDefined();
        expect(screen.getByText('Achievement two')).toBeDefined();
    });

    test('renders technology badges when expanded', () => {
        // Given / When
        render(<TimelineExpandableContent entry={mockEntry} isExpanded={true} />);

        // Then
        expect(screen.getByText('TypeScript')).toBeDefined();
    });

    test('applies expanded class when isExpanded is true', () => {
        // Given / When
        const { container } = render(
            <TimelineExpandableContent entry={mockEntry} isExpanded={true} />
        );
        const wrapper = container.firstChild as HTMLElement;

        // Then
        expect(wrapper.className).toContain('expanded');
    });

    test('does not apply expanded class when isExpanded is false', () => {
        // Given / When
        const { container } = render(
            <TimelineExpandableContent entry={mockEntry} isExpanded={false} />
        );
        const wrapper = container.firstChild as HTMLElement;

        // Then
        expect(wrapper.className).not.toContain('expanded');
    });
});
