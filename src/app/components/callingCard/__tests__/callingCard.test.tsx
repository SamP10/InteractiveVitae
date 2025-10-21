import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import CallingCard from '../callingCard';
import '@testing-library/jest-dom';

jest.mock('next/image');

describe('CallingCard', () => {
    beforeEach(() => {
        render(<CallingCard />);
    });

    test('renders name and title', () => {
        // Given / When / Then
        expect(screen.getByText('SAM')).toBeDefined();
        expect(screen.getByText('PLANT')).toBeDefined();
        expect(screen.getByText('Software Engineer')).toBeDefined();
    });

    test('renders social links with expected hrefs and aria-labels', () => {
        // Given / When
        const github = screen.getByLabelText('GitHub');
        const linkedin = screen.getByLabelText('LinkedIn');
        const email = screen.getByLabelText('Email');

        // Then
        expect(github).toBeDefined();
        expect(github).toHaveAttribute('href', 'https://github.com/SamP10');

        expect(linkedin).toBeDefined();
        expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/sam-plant-642b05195/');

        expect(email).toBeDefined();
        expect(email).toHaveAttribute('href', 'mailto:sam.plant998@gmail.com');
    });

    test('enables pointer events on the social links container after animation end', () => {
        // Given / When
        const github = screen.getByLabelText('GitHub');
        const container = github.parentElement as HTMLDivElement | null;
        expect(container).not.toBeNull();

        // Then
        fireEvent.animationEnd(container!);
        expect(container!.style.pointerEvents).toBe('auto');
    });
});
