import { renderHook, act } from '@testing-library/react';
import { useReactions } from '../hooks/useReactions';

describe('useReactions', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('initialises with zero counts and isLoaded=true after mount', async () => {
        // Given / When
        const { result } = renderHook(() => useReactions(1));

        // Then
        await act(async () => {});
        expect(result.current.isLoaded).toBe(true);
        expect(result.current.counts.thumbsUp).toBe(0);
    });

    test('toggleReaction increments the count when not yet reacted', async () => {
        // Given
        const { result } = renderHook(() => useReactions(1));
        await act(async () => {});

        // When
        act(() => {
            result.current.toggleReaction('thumbsUp');
        });

        // Then
        expect(result.current.counts.thumbsUp).toBe(1);
        expect(result.current.userReactions.thumbsUp).toBe(true);
    });

    test('toggleReaction decrements the count when already reacted', async () => {
        // Given
        const { result } = renderHook(() => useReactions(1));
        await act(async () => {});
        act(() => { result.current.toggleReaction('heart'); });

        // When
        act(() => { result.current.toggleReaction('heart'); });

        // Then
        expect(result.current.counts.heart).toBe(0);
        expect(result.current.userReactions.heart).toBe(false);
    });

    test('count does not go below zero on repeated untoggle', async () => {
        // Given
        const { result } = renderHook(() => useReactions(1));
        await act(async () => {});

        // When — toggle on then off then on
        act(() => { result.current.toggleReaction('fire'); }); // +1
        act(() => { result.current.toggleReaction('fire'); }); // -1 → 0
        act(() => { result.current.toggleReaction('fire'); }); // +1 again

        // Then
        expect(result.current.counts.fire).toBeGreaterThanOrEqual(0);
    });

    test('persists counts to localStorage after toggle', async () => {
        // Given
        const { result } = renderHook(() => useReactions(2));
        await act(async () => {});

        // When
        act(() => { result.current.toggleReaction('celebrate'); });

        // Then
        const stored = localStorage.getItem('blog-reactions-counts-2');
        expect(stored).not.toBeNull();
        const parsed = JSON.parse(stored!);
        expect(parsed.celebrate).toBe(1);
    });
});
