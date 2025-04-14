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
    const [prompts, setPrompts] = useState(['Who are you?', 'What are your interests?', 'What is this?']);

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
        addChatComponent(<RequestMessageTemplate key={`user-request-${event}`} text={event} />);
        setPrompts((prevPrompts) => prevPrompts.filter((prompt) => prompt !== event));

        try {
            const response: string = await chatWithOllama({
                messageHistory: messageHistory.current,
                prompt: event
            });

            messageHistory.current.push({ role: 'user', content: event });
            messageHistory.current.push({ role: 'assistant', content: response });

            addChatComponent(<ResponseMessageTemplate key={`ollama-response-${event}`} text={response} />);
        } catch (error) {
            setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
        className="p-5 rounded-lg text-left float-right clear-both"
        style={{
            fontFamily: 'Doto',
            fontSize: 25,
            color: 'white',
            backgroundColor: 'rgba(80, 80, 80, 0.7)',
            fontWeight: 900,
            display: 'inline-block'
        }}>
            <div className="flex space-x-4 justify-center">
                {prompts.map((prompt) => (
                    <Pill
                        key={prompt}
                        label={prompt}
                        onClick={() => onClick(prompt)}
                        disabled={loading} // Disable pills when loading
                    />
                ))}
            </div>
            {loading && (
                <div className="text-white text-lg font-bold animate-pulse">
                    Generating...
                </div>
            )}
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
