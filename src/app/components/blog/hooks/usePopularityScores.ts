'use client';

import { useState, useEffect } from 'react';
import { REACTIONS } from '@/app/data/blog';

const STORAGE_KEY_PREFIX = 'blog-reactions-';

interface PopularityScores {
    [postId: number]: number;
}

/**
 * Hook to get popularity scores for all posts based on reaction counts in localStorage
 */
export function usePopularityScores(postIds: number[]): PopularityScores {
    const [scores, setScores] = useState<PopularityScores>({});

    useEffect(() => {
        const newScores: PopularityScores = {};

        postIds.forEach((postId) => {
            const storedCounts = localStorage.getItem(`${STORAGE_KEY_PREFIX}counts-${postId}`);
            if (storedCounts) {
                const counts = JSON.parse(storedCounts);
                // Sum all reaction counts for this post
                const totalReactions = Object.keys(REACTIONS).reduce((sum, key) => {
                    return sum + (counts[key] || 0);
                }, 0);
                newScores[postId] = totalReactions;
            } else {
                newScores[postId] = 0;
            }
        });

        setScores(newScores);
    }, [postIds]);

    return scores;
}
