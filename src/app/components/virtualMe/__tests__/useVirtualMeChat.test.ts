import { renderHook, act, waitFor } from '@testing-library/react';
import { useVirtualMeChat } from '../useVirtualMeChat';

global.fetch = jest.fn();

describe('useVirtualMeChat', () => {
    beforeEach(() => {
        (global.fetch as jest.Mock).mockClear();
    });

    test('initialises with a welcome message', () => {
        // Given / When
        const { result } = renderHook(() => useVirtualMeChat());

        // Then
        expect(result.current.messages).toHaveLength(1);
        expect(result.current.messages[0].role).toBe('assistant');
    });

    test('starts with isLoading=false', () => {
        // Given / When
        const { result } = renderHook(() => useVirtualMeChat());

        // Then
        expect(result.current.isLoading).toBe(false);
    });

    test('adds user message when sendMessage is called', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ content: 'AI reply' })
        });
        const { result } = renderHook(() => useVirtualMeChat());

        // When
        await act(async () => {
            await result.current.sendMessage('Hello');
        });

        // Then — messages: welcome + user + ai
        expect(result.current.messages).toHaveLength(3);
        expect(result.current.messages[1].role).toBe('user');
        expect(result.current.messages[1].content).toBe('Hello');
    });

    test('adds AI message after successful API call', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ content: 'AI says hi' })
        });
        const { result } = renderHook(() => useVirtualMeChat());

        // When
        await act(async () => {
            await result.current.sendMessage('Hi');
        });

        // Then
        const aiMessage = result.current.messages[2];
        expect(aiMessage.role).toBe('assistant');
        expect(aiMessage.content).toBe('AI says hi');
    });

    test('adds error message when API call fails', async () => {
        // Given
        (global.fetch as jest.Mock).mockRejectedValueOnce(new Error('Network error'));
        const { result } = renderHook(() => useVirtualMeChat());

        // When
        await act(async () => {
            await result.current.sendMessage('Hi');
        });

        // Then
        const lastMessage = result.current.messages[result.current.messages.length - 1];
        expect(lastMessage.role).toBe('assistant');
        expect(lastMessage.content).toContain('trouble connecting');
    });

    test('resetChat restores to initial welcome message', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ content: 'reply' })
        });
        const { result } = renderHook(() => useVirtualMeChat());
        await act(async () => { await result.current.sendMessage('test'); });
        expect(result.current.messages.length).toBeGreaterThan(1);

        // When
        act(() => { result.current.resetChat(); });

        // Then
        expect(result.current.messages).toHaveLength(1);
        expect(result.current.messages[0].role).toBe('assistant');
    });

    test('calls fetch with correct endpoint and body', async () => {
        // Given
        (global.fetch as jest.Mock).mockResolvedValueOnce({
            ok: true,
            json: async () => ({ content: 'ok' })
        });
        const { result } = renderHook(() => useVirtualMeChat());

        // When
        await act(async () => { await result.current.sendMessage('question'); });

        // Then
        expect(global.fetch).toHaveBeenCalledWith('/api/chat', expect.objectContaining({
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        }));
    });
});
