'use client';

import { useEffect, useState, useRef } from 'react';
import Image from 'next/image';
import { Message } from './types';
import { TypeEffect } from './utils/typeEffect';
import botTalking from '@/app/assets/images/bot_talking.png';
import botSmiling from '@/app/assets/images/bot_smiling.png';

interface AiMessageProps {
    message: Message;
    shouldAnimate?: boolean;
    onTypingComplete?: () => void;
}

export default function AiMessage({ message, shouldAnimate = false, onTypingComplete }: AiMessageProps) {
    const [displayedText, setDisplayedText] = useState(shouldAnimate ? '' : message.content);
    const [isTyping, setIsTyping] = useState(shouldAnimate);
    const typeEffectRef = useRef<TypeEffect | null>(null);

    useEffect(() => {
        if (shouldAnimate && !typeEffectRef.current) {
            typeEffectRef.current = new TypeEffect(setDisplayedText, () => {
                setIsTyping(false);
                onTypingComplete?.();
            });
            typeEffectRef.current.startTyping(message.content, 30);
        }
    }, [shouldAnimate, message.content, onTypingComplete]);

    const avatarImage = isTyping ? botTalking : botSmiling;

    return (
        <div className="flex justify-start mb-4 gap-3">
            <div className="flex-shrink-0">
                <Image
                    src={avatarImage}
                    alt="Virtual Sam"
                    width={40}
                    height={40}
                />
            </div>
            <div className="bg-pine text-cream rounded-2xl rounded-tl-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm md:text-base">{displayedText}</p>
            </div>
        </div>
    );
}
