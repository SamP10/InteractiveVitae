import { useState, useEffect, useRef } from 'react';
import { TypeEffect } from '@/app/utils/typeEffectUtils';

export default function ResponseMessageTemplate({ text }: { text: string }) {
    const hasTyped = useRef(false);
    const [typedText, setTypedText] = useState<string[]>([]);

    useEffect(() => {
        if (hasTyped.current) return;
        hasTyped.current = true;

        new TypeEffect(setTypedText).startTyping(text, 50);
    }, []);

    return (
        <div
            className="m-2 p-2 rounded-lg text-left float-left clear-both"
            style={{
                fontFamily: 'Doto',
                fontSize: 20,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block',
                maxWidth: '70%'
            }}>
            <p>
                <strong>Sam: </strong>
                {typedText}
            </p>
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '5px' }}>
                <span style={{ fontSize: '12px', color: 'green' }}>✓✓ Read</span>
            </div>
        </div>
    );
}
