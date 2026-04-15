import React from 'react';
import { render, screen } from '@testing-library/react';
import ChatMessages from '../ChatMessages';
import { Message } from '../types';
import '@testing-library/jest-dom';

jest.mock('next/image', () => {
    return function MockImage({ alt }: { alt: string }) {
        return <img alt={alt} />;
    };
});

// jsdom doesn't implement scrollIntoView
Element.prototype.scrollIntoView = jest.fn();

const messages: Message[] = [
    { id: 'ai-1', role: 'assistant', content: 'Hello! How can I help?', timestamp: new Date() },
    { id: 'user-1', role: 'user', content: 'Tell me about yourself', timestamp: new Date() },
    { id: 'ai-2', role: 'assistant', content: 'I am Virtual Sam!', timestamp: new Date() }
];

describe('ChatMessages', () => {
    const onTypingComplete = jest.fn();

    test('renders all messages in order', () => {
        // Given / When
        render(
            <ChatMessages
                messages={messages}
                isLoading={false}
                latestMessageId={null}
                onTypingComplete={onTypingComplete}
            />
        );

        // Then
        expect(screen.getByText('Hello! How can I help?')).toBeDefined();
        expect(screen.getByText('Tell me about yourself')).toBeDefined();
        expect(screen.getByText('I am Virtual Sam!')).toBeDefined();
    });

    test('renders TypingIndicator when isLoading is true', () => {
        // Given / When
        render(
            <ChatMessages
                messages={messages}
                isLoading={true}
                latestMessageId={null}
                onTypingComplete={onTypingComplete}
            />
        );

        // Then — TypingIndicator renders the thinking avatar
        expect(screen.getByAltText('Virtual Sam thinking')).toBeDefined();
    });

    test('does not render TypingIndicator when isLoading is false', () => {
        // Given / When
        render(
            <ChatMessages
                messages={messages}
                isLoading={false}
                latestMessageId={null}
                onTypingComplete={onTypingComplete}
            />
        );

        // Then
        expect(screen.queryByAltText('Virtual Sam thinking')).toBeNull();
    });
});
