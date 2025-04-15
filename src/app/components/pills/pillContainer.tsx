import Pill from './pill';
import { useState, useRef } from 'react';
import { chatWithOllama } from '../../utils/ollamaIntegration';
import ResponseMessageTemplate from '../introduction/responseMessageTemplate';
import RequestMessageTemplate from '../introduction/requestMessageTemplate';
import { SYSTEM_PROMPT } from '../introduction/constants';
import { IBallConfig } from '../types/components';

interface PillContainerProps {
    addChatComponent(component: React.ReactNode): void;
    ballConfig: IBallConfig
}

export default function PillContainer({ addChatComponent, ballConfig }: PillContainerProps) {
    const [prompts, setPrompts] = useState([
        'What is this?',
        'Are you a robot?',
        'Who are you?',
        'What do you do for fun?'
    ]);

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
        // setPrompts((prevPrompts) => prevPrompts.filter((prompt) => prompt !== event));

        try {
            const response: string = await chatWithOllama({
                messageHistory: messageHistory.current,
                prompt: event
            });

            messageHistory.current.push({ role: 'user', content: event });
            messageHistory.current.push({ role: 'assistant', content: response });

            addChatComponent(
                <ResponseMessageTemplate key={`ollama-response-${event}`} text={response} />
            );
        } catch (error) {
            setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {loading && (
                <div className="text-white text-lg font-bold animate-pulse p-5 space-x-4 rounded-lg text-left float-left clear-both"
                style={{
                    fontFamily: 'Doto',
                    fontSize: 20,
                    color: 'white',
                    backgroundColor: 'rgba(80, 80, 80, 0.7)',
                    fontWeight: 900,
                    display: 'inline-block'
                }}>Generating...</div>
            )}
            <div
                className="p-5 m-2 rounded-lg  float-right clear-both"
                style={{
                    fontFamily: 'Doto',
                    fontSize: 20,
                    color: 'white',
                    fontWeight: 900,
                    display: 'inline-block',
                    maxWidth: '40%',
                }}>
                {prompts.map((prompt) => (
                    <Pill
                        key={prompt}
                        label={prompt}
                        onClick={() => onClick(prompt)}
                        disabled={loading}
                        ballConfig={ballConfig}
                    />
                ))}
            </div>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
