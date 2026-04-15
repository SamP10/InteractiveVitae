import React from 'react';
import { render, screen } from '@testing-library/react';
import AiMessage from '../AiMessage';
import { Message } from '../types';
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
    return function MockImage({ alt }: { alt: string }) {
        return <img alt={alt} />;
    };
});

const mockMessage: Message = {
    id: 'ai-1',
    role: 'assistant',
    content: 'I am doing great, thanks!',
    timestamp: new Date()
};

describe('AiMessage', () => {
    test('renders message content immediately when shouldAnimate is false', () => {
        // Given / When
        render(<AiMessage message={mockMessage} shouldAnimate={false} />);

        // Then
        expect(screen.getByText('I am doing great, thanks!')).toBeDefined();
    });

    test('renders the avatar image', () => {
        // Given / When
        render(<AiMessage message={mockMessage} shouldAnimate={false} />);

        // Then
        expect(screen.getByAltText('Virtual Sam')).toBeDefined();
    });

    test('starts with partial/empty content when shouldAnimate is true', () => {
        // Given / When
        render(<AiMessage message={mockMessage} shouldAnimate={true} />);

        // Then — full content should not be rendered immediately (type effect streams it in)
        expect(screen.queryByText('I am doing great, thanks!')).toBeNull();
    });
});
