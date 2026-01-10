'use client';

import { useEffect, useState } from 'react';
import { Message } from './types';

interface UserMessageProps {
    message: Message;
    isRead?: boolean;
}

type ReceiptStatus = 'sent' | 'delivered' | 'read';

export default function UserMessage({ message, isRead = false }: UserMessageProps) {
    const [status, setStatus] = useState<ReceiptStatus>('sent');

    useEffect(() => {
        const deliveredTimer = setTimeout(() => {
            setStatus('delivered');
        }, 500);

        return () => {
            clearTimeout(deliveredTimer);
        };
    }, []);

    useEffect(() => {
        if (isRead && status === 'delivered') {
            setStatus('read');
        }
    }, [isRead, status]);

    const getStatusDisplay = () => {
        switch (status) {
            case 'sent':
                return <span className="text-cream/50">Sent</span>;
            case 'delivered':
                return <span className="text-cream/70">✓ Delivered</span>;
            case 'read':
                return <span className="text-cream">✓✓ Read</span>;
        }
    };

    return (
        <div className="flex justify-end mb-4">
            <div className="bg-moss text-cream rounded-2xl rounded-br-sm px-4 py-3 max-w-[70%]">
                <p className="text-sm md:text-base">{message.content}</p>
                <p className="text-xs text-right mt-1">{getStatusDisplay()}</p>
            </div>
        </div>
    );
}
