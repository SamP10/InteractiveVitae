import axios from 'axios';

const OLLAMA_API_URL = 'http://localhost:11434/api/generate'; // Default Ollama API endpoint

interface OllamaRequest {
    prompt: string;
    model?: string; // Specify the model name if needed, default is Llama3
    options?: Record<string, any>; // Additional options for the request
}

export async function generateWithOllama({
    prompt,
    model = 'llama3',
    options = {}
}: OllamaRequest): Promise<string> {
    try {
        const response = await axios.post(OLLAMA_API_URL, {
            model,
            prompt,
            ...options
        });
        let stringResponse = ''
        response.data.split('\n').forEach((line: string) => {
            if (line.trim()) {
                stringResponse += JSON.parse(line).response;
            }
        });

        return stringResponse

    } catch (error) {
        console.error('Error communicating with Ollama:', error);
        throw new Error('Failed to generate text with Ollama.');
    }
}
