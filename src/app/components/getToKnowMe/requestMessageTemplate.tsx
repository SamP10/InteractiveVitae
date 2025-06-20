import { useState, useEffect, useRef } from 'react';
import { TypeEffect } from '@/app/utils/typeEffectUtils';

export default function RequestMessageTemplate({ text }: { text: string }) {
    const hasTyped = useRef(false);
    const [typedText, setTypedText] = useState<string[]>([]);
    const [isRead, setIsRead] = useState(false);

    useEffect(() => {
        if (hasTyped.current) return;
        hasTyped.current = true;

        new TypeEffect(setTypedText).startTyping(text, 50);
    }, []);

    useEffect(() => {
        const timeout = setTimeout(() => setIsRead(true), 1500);
        return () => clearTimeout(timeout);
    }, []);

    return (
        <div
            className="m-2 p-2 rounded-lg text-right float-right clear-both"
            style={{
                fontFamily: 'Doto',
                fontSize: 20,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block',
                maxWidth: '70%'
            }}>
            <p className="text-left">
                <strong>You: </strong>
                {typedText}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
                <span style={{ fontSize: '12px', color: isRead ? 'green' : 'gray' }}>
                    {isRead ? '✓✓ Read' : '✓ Delivered'}
                </span>
            </div>
        </div>
    );
}
