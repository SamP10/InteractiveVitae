import axios from 'axios';
import { SYSTEM_PROMPT } from '../components/legacy/getToKnowMe/constants';

const OLLAMA_API_URL = 'http://localhost:11434/api/chat';

interface OllamaRequest {
    messageHistory: { role: string; content: string }[];
    prompt: string;
}

export async function initialiseOllama() {
    try {
        const response = await axios.post(
            OLLAMA_API_URL,
            {
                model: 'llama3:latest',
                messages: [{ role: 'system', content: SYSTEM_PROMPT }]
            },
            {
                responseType: 'json'
            }
        );
        return response.data;
    } catch (error) {
        throw new Error('Failed to initialize Ollama with system prompt. Error: ' + error);
    }
}

export async function chatWithOllama({ messageHistory, prompt }: OllamaRequest): Promise<string> {
    try {
        const response = await axios.post(
            OLLAMA_API_URL,
            {
                model: 'llama3:latest',
                messages: [...messageHistory, { role: 'user', content: prompt }]
            },
            {
                responseType: 'json'
            }
        );

        return extractMessageContent(response.data);
    } catch (error) {
        throw new Error('Failed to generate text with Ollama. Error: ' + error);
    }
}

function extractMessageContent(jsonString: string): string {
    const lines = jsonString.trim().split('\n');
    let content = '';

    for (const line of lines) {
        try {
            const parsed = JSON.parse(line);
            if (parsed.message && parsed.message.content) {
                content += parsed.message.content;
            }
        } catch (error) {
            console.error('Failed to parse line:', line, error);
        }
    }

    return content;
}
