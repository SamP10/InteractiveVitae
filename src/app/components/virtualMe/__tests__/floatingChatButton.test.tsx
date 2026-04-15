import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import FloatingChatButton from '../FloatingChatButton';
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
    return function MockImage({ alt }: { alt: string }) {
        return <img alt={alt} />;
    };
});

jest.mock('../VirtualMeModal', () => {
    return function MockModal({ isOpen, onClose }: { isOpen: boolean; onClose: () => void }) {
        if (!isOpen) return null;
        return (
            <div data-testid="virtual-me-modal">
                <button onClick={onClose}>Close</button>
            </div>
        );
    };
});

describe('FloatingChatButton', () => {
    test('renders the chat button', () => {
        // Given / When
        render(<FloatingChatButton />);

        // Then
        expect(screen.getByLabelText('Talk to virtual Sam')).toBeDefined();
    });

    test('modal is not visible initially', () => {
        // Given / When
        render(<FloatingChatButton />);

        // Then
        expect(screen.queryByTestId('virtual-me-modal')).toBeNull();
    });

    test('opens modal when the chat button is clicked', () => {
        // Given
        render(<FloatingChatButton />);

        // When
        fireEvent.click(screen.getByLabelText('Talk to virtual Sam'));

        // Then
        expect(screen.getByTestId('virtual-me-modal')).toBeDefined();
    });

    test('closes modal when onClose is triggered', () => {
        // Given
        render(<FloatingChatButton />);
        fireEvent.click(screen.getByLabelText('Talk to virtual Sam'));
        expect(screen.getByTestId('virtual-me-modal')).toBeDefined();

        // When
        fireEvent.click(screen.getByText('Close'));

        // Then
        expect(screen.queryByTestId('virtual-me-modal')).toBeNull();
    });
});
