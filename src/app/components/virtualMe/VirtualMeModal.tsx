'use client';

import { useEffect, useCallback, useRef } from 'react';
import ChatMessages from './ChatMessages';
import ChatInput from './ChatInput';
import { useVirtualMeChat } from './useVirtualMeChat';

interface VirtualMeModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function VirtualMeModal({ isOpen, onClose }: VirtualMeModalProps) {
    const {
        messages,
        isLoading,
        latestMessageId,
        isTyping,
        sendMessage,
        resetChat,
        handleTypingComplete
    } = useVirtualMeChat();

    const modalRef = useRef<HTMLDivElement>(null);
    const previousActiveElement = useRef<HTMLElement | null>(null);

    const handleEscape = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === 'Escape') {
                onClose();
            }
        },
        [onClose]
    );

    const handleBackdropClick = useCallback(
        (e: React.MouseEvent) => {
            if (e.target === e.currentTarget) {
                onClose();
            }
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            previousActiveElement.current = document.activeElement as HTMLElement;
            document.body.style.overflow = 'hidden';
            document.addEventListener('keydown', handleEscape);

            return () => {
                document.body.style.overflow = '';
                document.removeEventListener('keydown', handleEscape);
                previousActiveElement.current?.focus();
            };
        }
    }, [isOpen, handleEscape]);

    useEffect(() => {
        if (!isOpen) {
            resetChat();
        }
    }, [isOpen, resetChat]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-darkPine/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-modal-backdrop"
            onClick={handleBackdropClick}
            role="dialog"
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div
                ref={modalRef}
                className="bg-cream rounded-2xl shadow-2xl w-full max-w-2xl max-h-[80vh] flex flex-col animate-modal-content"
                onClick={(e) => e.stopPropagation()}
            >
                {/* Header */}
                <div className="flex items-center justify-between p-4 border-b border-pine/20">
                    <h2
                        id="modal-title"
                        className="font-limelight text-darkPine text-xl md:text-2xl"
                    >
                        Talk to Virtual Sam
                    </h2>
                    <button
                        onClick={onClose}
                        className="text-darkPine hover:text-moss transition-colors p-2 rounded-lg hover:bg-pine/10"
                        aria-label="Close chat"
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M6 18L18 6M6 6l12 12"
                            />
                        </svg>
                    </button>
                </div>

                {/* Chat Messages */}
                <ChatMessages
                    messages={messages}
                    isLoading={isLoading}
                    latestMessageId={latestMessageId}
                    onTypingComplete={handleTypingComplete}
                />

                {/* Input */}
                <ChatInput
                    onSendMessage={sendMessage}
                    isLoading={isLoading}
                    disabled={isTyping}
                />
            </div>
        </div>
    );
}
