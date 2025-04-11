import { useState, useEffect, useRef } from 'react';
import { TypeEffect } from '@/app/utils/typeEffectUtils';

export default function RequestMessageTemplate({ text }: { text: string }) {
    const hasTyped = useRef(false);
    const [typedText, setTypedText] = useState<string[]>([]);

    useEffect(() => {
        if (hasTyped.current) return;
        hasTyped.current = true;

        new TypeEffect(setTypedText).startTyping(text, 50);
    }, []);

    return (
        <div
            className="p-5 rounded-lg text-right float-right clear-both"
            style={{
                fontFamily: 'Doto',
                fontSize: 25,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block'
            }}>
            <p>
                <strong>You: </strong>
                {typedText}
            </p>
        </div>
    );
}
