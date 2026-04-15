import React from 'react';
import { render, screen } from '@testing-library/react';
import AvailabilityBadge from '../workTogether/AvailabilityBadge';
import '@testing-library/jest-dom';

describe('AvailabilityBadge', () => {
    test('renders available status when isAvailable is true', () => {
        // Given / When
        render(<AvailabilityBadge isAvailable={true} />);

        // Then
        expect(screen.getByText('Available for Work')).toBeDefined();
    });

    test('renders unavailable status when isAvailable is false', () => {
        // Given / When
        render(<AvailabilityBadge isAvailable={false} />);

        // Then
        expect(screen.getByText('Currently Unavailable')).toBeDefined();
    });

    test('defaults to available when no prop provided', () => {
        // Given / When
        render(<AvailabilityBadge />);

        // Then
        expect(screen.getByText('Available for Work')).toBeDefined();
    });
});
