/**
 * @jest-environment node
 */
import { POST as chatHandler } from '../chat/route';
import { NextRequest } from 'next/server';

global.fetch = jest.fn();

function makeRequest(body?: unknown): NextRequest {
    return new NextRequest('http://localhost/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        ...(body !== undefined ? { body: JSON.stringify(body) } : {})
    });
}

describe('POST /api/chat', () => {
    beforeEach(() => {
        (global.fetch as jest.Mock).mockClear();
    });

    test('returns AI response content on successful Ollama call', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ message: { content: 'Hello from Ollama!' } })
        });

        // When
        const response = await chatHandler(
            makeRequest({ messages: [{ role: 'user', content: 'Hi' }] })
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.content).toBe('Hello from Ollama!');
    });

    test('returns 500 when Ollama call fails', async () => {
        // Given
        (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Connection refused'));

        // When
        const response = await chatHandler(
            makeRequest({ messages: [{ role: 'user', content: 'Hi' }] })
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(500);
        expect(body.error).toBeDefined();
    });

    test('returns 500 when Ollama returns a non-ok response', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: false,
            json: async () => ({})
        });

        // When
        const response = await chatHandler(
            makeRequest({ messages: [{ role: 'user', content: 'Hi' }] })
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(500);
    });

    test('returns empty content string when Ollama response has no message', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({})
        });

        // When
        const response = await chatHandler(
            makeRequest({ messages: [] })
        );
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.content).toBe('');
    });
});
