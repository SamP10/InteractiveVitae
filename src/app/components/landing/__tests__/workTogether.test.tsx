import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import WorkTogether from '../workTogether/WorkTogether';
import '@testing-library/jest-dom';

jest.mock('@/app/context/InitialLoadContext', () => ({
    useInitialLoad: () => false
}));

jest.mock('../../virtualMe', () => ({
    VirtualMeModal: ({ isOpen }: { isOpen: boolean }) =>
        isOpen ? <div data-testid="virtual-me-modal" /> : null
}));

describe('WorkTogether', () => {
    test('renders section heading', () => {
        // Given / When
        render(<WorkTogether />);

        // Then
        expect(screen.getByText("Let's Work Together")).toBeDefined();
    });

    test('renders AvailabilityBadge as available', () => {
        // Given / When
        render(<WorkTogether />);

        // Then
        expect(screen.getByText('Available for Work')).toBeDefined();
    });

    test('renders Schedule a Call button', () => {
        // Given / When
        render(<WorkTogether />);

        // Then
        expect(screen.getByText('Schedule a Call')).toBeDefined();
    });

    test('renders "Or talk to virtual me first" button', () => {
        // Given / When
        render(<WorkTogether />);

        // Then
        expect(screen.getByText('Or talk to virtual me first')).toBeDefined();
    });

    test('opens VirtualMeModal when "talk to virtual me" is clicked', () => {
        // Given
        render(<WorkTogether />);
        expect(screen.queryByTestId('virtual-me-modal')).toBeNull();

        // When
        fireEvent.click(screen.getByText('Or talk to virtual me first'));

        // Then
        expect(screen.getByTestId('virtual-me-modal')).toBeDefined();
    });

    test('renders social links', () => {
        // Given / When
        render(<WorkTogether />);

        // Then
        expect(screen.getByTitle('GitHub')).toBeDefined();
        expect(screen.getByTitle('LinkedIn')).toBeDefined();
        expect(screen.getByTitle('Email')).toBeDefined();
    });
});
