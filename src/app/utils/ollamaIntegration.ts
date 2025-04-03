import axios from 'axios';

const OLLAMA_API_URL = 'http://localhost:11434/api/generate';

interface OllamaRequest {
    prompt: string;
    options?: Record<string, any>;
}

export async function generateWithOllama({
    prompt,
    options = {}
}: OllamaRequest): Promise<string> {
    try {
        const response = await axios.post(OLLAMA_API_URL, {
            model: 'llama3',
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
        throw new Error('Failed to generate text with Ollama. Error: ' + error);
    }
}
