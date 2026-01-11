'use client';

import { useState, useRef, useEffect } from 'react';

interface ChatInputProps {
    onSendMessage: (message: string) => void;
    isLoading: boolean;
    disabled?: boolean;
}

export default function ChatInput({ onSendMessage, isLoading, disabled = false }: ChatInputProps) {
    const [input, setInput] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (!isLoading && !disabled) {
            inputRef.current?.focus();
        }
    }, [isLoading, disabled]);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const trimmedInput = input.trim();
        if (trimmedInput && !isLoading && !disabled) {
            onSendMessage(trimmedInput);
            setInput('');
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            handleSubmit(e);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="border-t border-pine/20 bg-cream p-4">
            <div className="flex gap-3">
                <input
                    ref={inputRef}
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Ask me anything..."
                    disabled={isLoading || disabled}
                    className="flex-1 px-4 py-3 bg-white border border-pine/30 rounded-xl text-darkPine placeholder-darkPine/50 focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss/20 disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                    type="submit"
                    disabled={isLoading || disabled || !input.trim()}
                    className="bg-moss text-cream px-6 py-3 rounded-xl hover:bg-pine transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
                >
                    <span>Send</span>
                    <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                        />
                    </svg>
                </button>
            </div>
        </form>
    );
}
