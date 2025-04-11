import { useState, FormEvent } from 'react';
import { generateWithOllama } from '../../utils/ollamaIntegration';

interface OllamaInputProps {
    setRequest: (input: string) => void;
    setResponse: (response: string) => void;
}

export default function OllamaInput({ setRequest, setResponse }: OllamaInputProps) {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [localInput, setLocalInput] = useState('');

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');
        setRequest(localInput);
        setLocalInput('');

        try {
            const response = await generateWithOllama({ prompt: localInput });
            setResponse(response);
        } catch (error) {
            setError(String(error));
        } finally {
            setLoading(false);
        }
    };

    return (
        <div
            className="p-5 rounded-lg text-left float-right clear-both "
            style={{
                fontFamily: 'Doto',
                fontSize: 25,
                color: 'white',
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontWeight: 900,
                display: 'inline-block'
            }}>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input
                    type="text"
                    value={localInput}
                    onChange={(e) => setLocalInput(e.target.value)}
                    placeholder="What would you like to ask me?"
                    className="p-2 border rounded -right"
                    style={{
                        fontFamily: 'Doto',
                        fontSize: 25,
                        color: 'white',
                        backgroundColor: 'rgba(80, 80, 80, 0.7)',
                        fontWeight: 900,
                        width: `${Math.max(localInput.length, 31)}ch`
                    }}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={loading || !localInput.trim()}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50 w-15 h-8 flex items-center justify-center"
                        style={{
                            fontSize: 17,
                            fontWeight: 900
                        }}>
                        {loading ? 'Generating...' : 'Submit'}
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
        </div>
    );
}
