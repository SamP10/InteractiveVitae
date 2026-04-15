import React from 'react';
import { render, screen } from '@testing-library/react';
import ReadTimeIndicator from '../ReadTimeIndicator';
import '@testing-library/jest-dom';

describe('ReadTimeIndicator', () => {
    test('renders the read time label with correct minutes', () => {
        // Given / When
        render(<ReadTimeIndicator minutes={5} />);

        // Then
        expect(screen.getByText('5 min read')).toBeDefined();
    });

    test('renders singular minute correctly', () => {
        // Given / When
        render(<ReadTimeIndicator minutes={1} />);

        // Then
        expect(screen.getByText('1 min read')).toBeDefined();
    });
});
