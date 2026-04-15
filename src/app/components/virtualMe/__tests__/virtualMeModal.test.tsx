import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import VirtualMeModal from '../VirtualMeModal';
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
    return function MockImage({ alt }: { alt: string }) {
        return <img alt={alt} />;
    };
});

Element.prototype.scrollIntoView = jest.fn();

jest.mock('../useVirtualMeChat', () => ({
    useVirtualMeChat: () => ({
        messages: [
            { id: 'welcome', role: 'assistant', content: 'Hello! Ask me anything.', timestamp: new Date() }
        ],
        isLoading: false,
        latestMessageId: null,
        isTyping: false,
        sendMessage: jest.fn(),
        resetChat: jest.fn(),
        handleTypingComplete: jest.fn()
    })
}));

describe('VirtualMeModal', () => {
    const onClose = jest.fn();

    beforeEach(() => {
        onClose.mockClear();
    });

    test('renders nothing when isOpen is false', () => {
        // Given / When
        render(<VirtualMeModal isOpen={false} onClose={onClose} />);

        // Then
        expect(screen.queryByRole('dialog')).toBeNull();
    });

    test('renders the modal when isOpen is true', () => {
        // Given / When
        render(<VirtualMeModal isOpen={true} onClose={onClose} />);

        // Then
        expect(screen.getByRole('dialog')).toBeDefined();
        expect(screen.getByText('Talk to Virtual Sam')).toBeDefined();
    });

    test('calls onClose when the close button is clicked', () => {
        // Given
        render(<VirtualMeModal isOpen={true} onClose={onClose} />);

        // When
        fireEvent.click(screen.getByLabelText('Close chat'));

        // Then
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('calls onClose when backdrop is clicked', () => {
        // Given
        render(<VirtualMeModal isOpen={true} onClose={onClose} />);
        const backdrop = screen.getByRole('dialog');

        // When
        fireEvent.click(backdrop);

        // Then
        expect(onClose).toHaveBeenCalledTimes(1);
    });

    test('renders welcome message', () => {
        // Given / When
        render(<VirtualMeModal isOpen={true} onClose={onClose} />);

        // Then
        expect(screen.getByText('Hello! Ask me anything.')).toBeDefined();
    });
});
