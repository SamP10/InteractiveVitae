export interface Message {
    id: string;
    role: 'user' | 'assistant';
    content: string;
    timestamp: Date;
}

export interface OllamaMessage {
    role: 'system' | 'user' | 'assistant';
    content: string;
}
