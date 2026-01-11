'use client';

import Image from 'next/image';
import botThinking from '@/app/assets/images/bot_thinking.png';

export default function TypingIndicator() {
    return (
        <div className="flex justify-start mb-4 gap-3">
            <div className="flex-shrink-0">
                <Image
                    src={botThinking}
                    alt="Virtual Sam thinking"
                    width={40}
                    height={40}
                />
            </div>
            <div className="flex items-center gap-1 px-4 py-3 bg-pine text-cream rounded-2xl rounded-tl-sm">
                <div className="flex gap-1">
                    <span
                        className="w-2 h-2 bg-cream rounded-full animate-typing-dot"
                        style={{ animationDelay: '0s' }}
                    />
                    <span
                        className="w-2 h-2 bg-cream rounded-full animate-typing-dot"
                        style={{ animationDelay: '0.2s' }}
                    />
                    <span
                        className="w-2 h-2 bg-cream rounded-full animate-typing-dot"
                        style={{ animationDelay: '0.4s' }}
                    />
                </div>
            </div>
        </div>
    );
}
