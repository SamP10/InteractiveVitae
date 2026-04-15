import React from 'react';
import { render, screen } from '@testing-library/react';
import UserMessage from '../UserMessage';
import { Message } from '../types';
import '@testing-library/jest-dom';

const mockMessage: Message = {
    id: 'user-1',
    role: 'user',
    content: 'Hello, how are you?',
    timestamp: new Date()
};

describe('UserMessage', () => {
    test('renders message content', () => {
        // Given / When
        render(<UserMessage message={mockMessage} />);

        // Then
        expect(screen.getByText('Hello, how are you?')).toBeDefined();
    });

    test('renders "Sent" status initially', () => {
        // Given / When
        render(<UserMessage message={mockMessage} />);

        // Then
        expect(screen.getByText('Sent')).toBeDefined();
    });
});
