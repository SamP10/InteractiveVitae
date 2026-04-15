import { renderHook, act } from '@testing-library/react';
import { usePopularityScores } from '../hooks/usePopularityScores';

describe('usePopularityScores', () => {
    beforeEach(() => {
        localStorage.clear();
    });

    test('returns zero scores for posts with no stored reactions', async () => {
        // Given / When
        const { result } = renderHook(() => usePopularityScores([1, 2, 3]));
        await act(async () => {});

        // Then
        expect(result.current[1]).toBe(0);
        expect(result.current[2]).toBe(0);
        expect(result.current[3]).toBe(0);
    });

    test('sums reaction counts for a post with stored data', async () => {
        // Given
        localStorage.setItem(
            'blog-reactions-counts-5',
            JSON.stringify({ thumbsUp: 3, heart: 2, celebrate: 0, insightful: 1, fire: 0 })
        );

        // When
        const { result } = renderHook(() => usePopularityScores([5]));
        await act(async () => {});

        // Then
        expect(result.current[5]).toBe(6);
    });

    test('handles multiple posts with mixed data', async () => {
        // Given
        localStorage.setItem(
            'blog-reactions-counts-10',
            JSON.stringify({ thumbsUp: 5, heart: 0, celebrate: 0, insightful: 0, fire: 0 })
        );

        // When
        const { result } = renderHook(() => usePopularityScores([10, 11]));
        await act(async () => {});

        // Then
        expect(result.current[10]).toBe(5);
        expect(result.current[11]).toBe(0);
    });
});
