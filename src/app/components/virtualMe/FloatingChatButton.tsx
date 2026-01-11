'use client';

import { useState } from 'react';
import VirtualMeModal from './VirtualMeModal';

export default function FloatingChatButton() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <button
                onClick={() => setIsOpen(true)}
                className="fixed bottom-6 right-6 z-40 bg-moss text-cream p-4 rounded-full shadow-lg hover:bg-pine hover:scale-110 transition-all duration-300 animate-cta-pulse"
                aria-label="Talk to virtual Sam"
                title="Talk to virtual Sam"
            >
                <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                        stroke="#EFE3C2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                    />
                </svg>
            </button>
            <VirtualMeModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
        </>
    );
}
