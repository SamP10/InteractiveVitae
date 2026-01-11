'use client';

import { useEffect, useRef } from 'react';
import { Message } from './types';
import UserMessage from './UserMessage';
import AiMessage from './AiMessage';
import TypingIndicator from './TypingIndicator';

interface ChatMessagesProps {
    messages: Message[];
    isLoading: boolean;
    latestMessageId: string | null;
    onTypingComplete: () => void;
}

export default function ChatMessages({
    messages,
    isLoading,
    latestMessageId,
    onTypingComplete
}: ChatMessagesProps) {
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [messages, isLoading]);

    return (
        <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((message, index) => {
                if (message.role === 'user') {
                    // Message is read if there's an AI response after it
                    const nextMessage = messages[index + 1];
                    const isRead = nextMessage?.role === 'assistant';
                    return <UserMessage key={message.id} message={message} isRead={isRead} />;
                }
                return (
                    <AiMessage
                        key={message.id}
                        message={message}
                        shouldAnimate={message.id === latestMessageId}
                        onTypingComplete={onTypingComplete}
                    />
                );
            })}
            {isLoading && <TypingIndicator />}
            <div ref={messagesEndRef} />
        </div>
    );
}
