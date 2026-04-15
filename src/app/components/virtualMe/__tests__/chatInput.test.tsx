import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import ChatInput from '../ChatInput';
import '@testing-library/jest-dom';

describe('ChatInput', () => {
    const onSendMessage = jest.fn();

    beforeEach(() => {
        onSendMessage.mockClear();
    });

    test('renders the text input', () => {
        // Given / When
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);

        // Then
        expect(screen.getByPlaceholderText('Ask me anything...')).toBeDefined();
    });

    test('renders the Send button', () => {
        // Given / When
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);

        // Then
        expect(screen.getByText('Send')).toBeDefined();
    });

    test('calls onSendMessage with trimmed input when Send button is clicked', () => {
        // Given
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);
        const input = screen.getByPlaceholderText('Ask me anything...');

        // When
        fireEvent.change(input, { target: { value: '  Hello  ' } });
        fireEvent.click(screen.getByText('Send'));

        // Then
        expect(onSendMessage).toHaveBeenCalledWith('Hello');
    });

    test('clears the input after sending', () => {
        // Given
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);
        const input = screen.getByPlaceholderText('Ask me anything...');

        // When
        fireEvent.change(input, { target: { value: 'Test message' } });
        fireEvent.click(screen.getByText('Send'));

        // Then
        expect((input as HTMLInputElement).value).toBe('');
    });

    test('calls onSendMessage when Enter is pressed', () => {
        // Given
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);
        const input = screen.getByPlaceholderText('Ask me anything...');

        // When
        fireEvent.change(input, { target: { value: 'Hello via enter' } });
        fireEvent.keyDown(input, { key: 'Enter', shiftKey: false });

        // Then
        expect(onSendMessage).toHaveBeenCalledWith('Hello via enter');
    });

    test('does not submit when input is empty', () => {
        // Given
        render(<ChatInput onSendMessage={onSendMessage} isLoading={false} />);

        // When
        fireEvent.click(screen.getByText('Send'));

        // Then
        expect(onSendMessage).not.toHaveBeenCalled();
    });

    test('disables input and button when isLoading is true', () => {
        // Given / When
        render(<ChatInput onSendMessage={onSendMessage} isLoading={true} />);
        const input = screen.getByPlaceholderText('Ask me anything...');
        const button = screen.getByText('Send').closest('button');

        // Then
        expect((input as HTMLInputElement).disabled).toBe(true);
        expect(button).toBeDisabled();
    });
});
