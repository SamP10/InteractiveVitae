import { NextRequest, NextResponse } from 'next/server';

const OLLAMA_API_URL = 'http://localhost:11434/api/chat';
const MODEL = 'llama3:latest';

interface ChatMessage {
    role: string;
    content: string;
}

interface ChatRequest {
    messages: ChatMessage[];
}

export async function POST(request: NextRequest) {
    try {
        const body: ChatRequest = await request.json();

        const response = await fetch(OLLAMA_API_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                model: MODEL,
                messages: body.messages,
                stream: false
            })
        });

        if (!response.ok) {
            throw new Error('Ollama request failed');
        }

        const data = await response.json();
        return NextResponse.json({
            content: data.message?.content || ''
        });
    } catch (error) {
        console.error('Chat API error:', error);
        return NextResponse.json(
            { error: 'Failed to get response from AI' },
            { status: 500 }
        );
    }
}
