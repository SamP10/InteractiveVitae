import React, { useState } from 'react';
import { generateWithOllama } from '../../utils/ollamaIntegration';

export default function OllamaInput() {
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        setError('');
        setResponse('');

        try {
            const response = await generateWithOllama({ prompt: input });
            console.log(response)
            setResponse(response);
        } catch (err) {
            setError('Failed to generate response. Please try again.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit} className="space-y-4">

                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Enter your prompt..."
                    className="w-full p-2 border rounded" style={{ fontFamily: 'Doto', fontSize: 30, color: 'white', backgroundColor: 'rgba(80, 80, 80, 0.7)', fontWeight: 900 }}
                />
                <div className="flex justify-end">
                    <button
                        type="submit"
                        disabled={loading || !input.trim()}
                        className="px-4 py-2 bg-blue-500 text-white rounded disabled:opacity-50"
                    >
                        {loading ? 'Generating...' : 'Submit'}
                    </button>
                </div>
            </form>
            {error && <p className="text-red-500 mt-4">{error}</p>}
            {response && (
                <div 
                className="w-full px-4 py-2 border rounded" style={{ fontFamily: 'Doto', fontSize: 30, color: 'white', backgroundColor: 'rgba(80, 80, 80, 0.7)', fontWeight: 900 }}
                >
                    <p>{response}</p>
                </div>
            )}
        </div>
    );
}
