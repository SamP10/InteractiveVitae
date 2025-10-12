import Pill from '../pills/pill';
import ResponseMessageTemplate from './responseMessageTemplate';
import RequestMessageTemplate from './requestMessageTemplate';

import { useState, useRef, ReactNode } from 'react';
import { chatWithOllama } from '../../../utils/ollamaIntegration';
import { SYSTEM_PROMPT } from './constants';
import { IBallConfig } from '../../types/components';

interface PillContainerProps {
    addChatComponent(component: ReactNode): void;
    ballConfig: IBallConfig;
}

export default function OllamaInput({ addChatComponent, ballConfig }: PillContainerProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [prompt, setPrompt] = useState('');
    const [pillKey, setPillKey] = useState(0); // Add a key state for the Pill component
    const messageHistory = useRef<{ role: string; content: string }[]>([
        { role: 'system', content: SYSTEM_PROMPT }
    ]);

    const onClick = async (event: string) => {
        if (loading) return;

        setLoading(true);
        setError('');
        setPrompt('');
        addChatComponent(<RequestMessageTemplate key={`user-request-${event}`} text={event} />);

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
            setPillKey((prevKey) => prevKey + 1);
        }
    };

    return (
        <div>
            {loading && (
                <div
                    className="text-white text-lg font-bold animate-pulse p-5 space-x-4 rounded-lg text-left float-left clear-both"
                    style={{
                        fontFamily: 'Doto',
                        fontSize: 20,
                        color: 'white',
                        backgroundColor: 'rgba(80, 80, 80, 0.7)',
                        fontWeight: 900,
                        display: 'inline-block'
                    }}>
                    Generating...
                </div>
            )}
            <div className="fixed bottom-0 left-0 w-full p-4 shadow-lg">
                <div className="flex items-center gap-4 justify-center">
                    <input
                        type="text"
                        placeholder="What would you like to ask?"
                        className="border rounded p-2 w-200"
                        style={{
                            fontFamily: 'Doto',
                            color: 'black',
                            backgroundColor: 'white',
                            fontSize: 15,
                            fontWeight: 900
                        }}
                        value={prompt}
                        onChange={(e) => setPrompt(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter' && !loading) {
                                onClick(prompt);
                            }
                        }}
                    />
                    <Pill
                        key={pillKey}
                        label="Ask!"
                        onClick={() => onClick(prompt)}
                        disabled={loading}
                        ballConfig={{ ...ballConfig, onBallRemove: () => {} }}
                    />
                </div>
                {error && <p className="text-red-500 mt-4">{error}</p>}
            </div>
        </div>
    );
}
