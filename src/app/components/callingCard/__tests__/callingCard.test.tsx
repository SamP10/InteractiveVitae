import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CallingCard from '../callingCard';

jest.mock('next/image');

describe('CallingCard', () => {
    test('renders name and title', () => {
        // Given
        render(<CallingCard />);

        // When

        // Then
        expect(screen.getByText('SAM')).toBeInTheDocument();
        expect(screen.getByText('PLANT')).toBeInTheDocument();
        expect(screen.getByText('Software Engineer')).toBeInTheDocument();
    });

    test('renders social links with expected hrefs and aria-labels', () => {
        render(<CallingCard />);
        const github = screen.getByLabelText('GitHub');
        const linkedin = screen.getByLabelText('LinkedIn');
        const email = screen.getByLabelText('Email');

        expect(github).toBeInTheDocument();
        expect(github).toHaveAttribute('href', 'https://github.com/SamP10');
        expect(github).toHaveAttribute('target', '_blank');

        expect(linkedin).toBeInTheDocument();
        expect(linkedin).toHaveAttribute('href', 'https://www.linkedin.com/in/sam-plant-642b05195/');

        expect(email).toBeInTheDocument();
        expect(email).toHaveAttribute('href', 'mailto:sam.plant998@gmail.com');
    });

    test('enables pointer events on the social links container after animation end', () => {
        render(<CallingCard />);
        const github = screen.getByLabelText('GitHub');
        const container = github.parentElement as HTMLDivElement | null;
        expect(container).not.toBeNull();

        // Initially pointerEvents is not set inline (class handles it), ensure we can change it
        fireEvent.animationEnd(container!);
        expect(container!.style.pointerEvents).toBe('auto');
    });
});
