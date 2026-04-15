import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import TimelineItem from '../TimelineItem';
import { ITimelineEntry } from '@/app/data/experience';
import '@testing-library/jest-dom';

const mockEntry: ITimelineEntry = {
    id: 1,
    category: 'work',
    title: 'Senior Engineer',
    subtitle: 'Acme Corp',
    dateStart: '2022',
    dateEnd: null,
    summary: 'Led development of key features',
    achievements: ['Delivered feature X', 'Improved test coverage'],
    technologies: [{ id: 1, name: 'TypeScript', color: '#3178C6' }]
};

describe('TimelineItem', () => {
    const onToggle = jest.fn();

    beforeEach(() => {
        onToggle.mockClear();
    });

    test('renders the entry title', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText('Senior Engineer')).toBeDefined();
    });

    test('renders the subtitle', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText('Acme Corp')).toBeDefined();
    });

    test('renders the summary text', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText('Led development of key features')).toBeDefined();
    });

    test('renders date range with Present when no end date', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText(/2022.*Present/)).toBeDefined();
    });

    test('shows "Show more" toggle when collapsed', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText('Show more')).toBeDefined();
    });

    test('shows "Show less" toggle when expanded', () => {
        // Given / When
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={true}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // Then
        expect(screen.getByText('Show less')).toBeDefined();
    });

    test('calls onToggle when the toggle button is clicked', () => {
        // Given
        render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );

        // When
        fireEvent.click(screen.getByText('Show more'));

        // Then
        expect(onToggle).toHaveBeenCalledTimes(1);
    });

    test('expandable content is hidden by default', () => {
        // Given / When
        const { container } = render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={false}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );
        const expandGrid = container.querySelector('.expand-grid');

        // Then
        expect(expandGrid?.className).not.toContain('expanded');
    });

    test('expandable content is visible when expanded', () => {
        // Given / When
        const { container } = render(
            <TimelineItem
                entry={mockEntry}
                index={0}
                isExpanded={true}
                onToggle={onToggle}
                isInitialLoad={false}
                animationDelay={0}
            />
        );
        const expandGrid = container.querySelector('.expand-grid');

        // Then
        expect(expandGrid?.className).toContain('expanded');
    });
});
