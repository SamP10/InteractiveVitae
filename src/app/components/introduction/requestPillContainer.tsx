import Pill from './requestPill';
import { useState, FormEvent, useRef } from 'react';
import { chatWithOllama } from '../../utils/ollamaIntegration';
import ResponseMessageTemplate from '../introduction/responseMessageTemplate';
import RequestMessageTemplate from '../introduction/requestMessageTemplate';
import { SYSTEM_PROMPT } from '../ollama/constants';

interface RequestPillContainerProps {
    addChatComponent(component: React.ReactNode): void;
}

export default function RequestPillContainer({ addChatComponent }: RequestPillContainerProps) {
    const prompts = ['Who are you?', 'What are your interests?', 'What is this?'];

    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const messageHistory = useRef<{ role: string; content: string }[]>([
        { role: 'system', content: SYSTEM_PROMPT }
    ]);

    interface OnClickEvent {
        (event: string): Promise<void>;
    }

    const onClick: OnClickEvent = async (event) => {
        setLoading(true);
        setError('');
        addChatComponent(<RequestMessageTemplate key="user-request" text={event} />);

        try {
            const response: string = await chatWithOllama({
                messageHistory: messageHistory.current,
                prompt: event
            });

            messageHistory.current.push({ role: 'user', content: event });
            messageHistory.current.push({ role: 'assistant', content: response });

            addChatComponent(<ResponseMessageTemplate key="ollama-response" text={response} />);
        } catch (error) {
            setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="flex space-x-4 justify-center mt-4">
            {prompts.map((prompt) => (
                <Pill key={prompt} label={prompt} onClick={() => onClick(prompt)} />
            ))}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
