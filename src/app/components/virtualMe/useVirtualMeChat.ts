'use client';

import { useState, useRef, useCallback } from 'react';
import { Message, OllamaMessage } from './types';
import { SYSTEM_PROMPT, WELCOME_MESSAGE } from './constants';

export function useVirtualMeChat() {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 'welcome',
            role: 'assistant',
            content: WELCOME_MESSAGE,
            timestamp: new Date()
        }
    ]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [latestMessageId, setLatestMessageId] = useState<string | null>(null);
    const [isTyping, setIsTyping] = useState(false);

    const messageHistory = useRef<OllamaMessage[]>([
        { role: 'system', content: SYSTEM_PROMPT }
    ]);

    const handleTypingComplete = useCallback(() => {
        setIsTyping(false);
        setLatestMessageId(null);
    }, []);

    const sendMessage = useCallback(async (content: string) => {
        if (isLoading || isTyping) return;

        const userMessage: Message = {
            id: `user-${Date.now()}`,
            role: 'user',
            content,
            timestamp: new Date()
        };

        setMessages((prev) => [...prev, userMessage]);
        setError(null);
        setIsLoading(true);

        messageHistory.current.push({ role: 'user', content });

        try {
            const response = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ messages: messageHistory.current })
            });

            if (!response.ok) {
                throw new Error('Failed to get response');
            }

            const data = await response.json();
            const aiContent = data.content || "Sorry, I couldn't process that. Try again?";

            messageHistory.current.push({ role: 'assistant', content: aiContent });

            const aiMessageId = `ai-${Date.now()}`;
            const aiMessage: Message = {
                id: aiMessageId,
                role: 'assistant',
                content: aiContent,
                timestamp: new Date()
            };

            setMessages((prev) => [...prev, aiMessage]);
            setLatestMessageId(aiMessageId);
            setIsTyping(true);
        } catch (err) {
            console.error('Chat error:', err);
            setError('Sorry, I could not get a response. Please try again.');

            const errorMessage: Message = {
                id: `error-${Date.now()}`,
                role: 'assistant',
                content: "Sorry, I'm having trouble connecting right now. Please try again later.",
                timestamp: new Date()
            };
            setMessages((prev) => [...prev, errorMessage]);
        } finally {
            setIsLoading(false);
        }
    }, [isLoading, isTyping]);

    const resetChat = useCallback(() => {
        setMessages([
            {
                id: 'welcome',
                role: 'assistant',
                content: WELCOME_MESSAGE,
                timestamp: new Date()
            }
        ]);
        setError(null);
        setLatestMessageId(null);
        setIsTyping(false);
        messageHistory.current = [{ role: 'system', content: SYSTEM_PROMPT }];
    }, []);

    return {
        messages,
        isLoading,
        error,
        latestMessageId,
        isTyping,
        sendMessage,
        resetChat,
        handleTypingComplete
    };
}
