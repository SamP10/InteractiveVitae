'use client';

import { useState, useEffect, useCallback } from 'react';
import { ReactionType, REACTIONS } from '@/app/data/blog';

const STORAGE_KEY_PREFIX = 'blog-reactions-';

interface ReactionCounts {
    [key: string]: number;
}

interface UserReactions {
    [key: string]: boolean;
}

export function useReactions(postId: number) {
    const [counts, setCounts] = useState<ReactionCounts>({});
    const [userReactions, setUserReactions] = useState<UserReactions>({});
    const [isLoaded, setIsLoaded] = useState(false);

    // Load from localStorage on mount
    useEffect(() => {
        const storedCounts = localStorage.getItem(`${STORAGE_KEY_PREFIX}counts-${postId}`);
        const storedUserReactions = localStorage.getItem(`${STORAGE_KEY_PREFIX}user-${postId}`);

        if (storedCounts) {
            setCounts(JSON.parse(storedCounts));
        } else {
            // Initialize with zeros
            const initialCounts: ReactionCounts = {};
            Object.keys(REACTIONS).forEach((key) => {
                initialCounts[key] = 0;
            });
            setCounts(initialCounts);
        }

        if (storedUserReactions) {
            setUserReactions(JSON.parse(storedUserReactions));
        }

        setIsLoaded(true);
    }, [postId]);

    // Persist to localStorage when state changes
    useEffect(() => {
        if (isLoaded) {
            localStorage.setItem(`${STORAGE_KEY_PREFIX}counts-${postId}`, JSON.stringify(counts));
            localStorage.setItem(
                `${STORAGE_KEY_PREFIX}user-${postId}`,
                JSON.stringify(userReactions)
            );
        }
    }, [counts, userReactions, postId, isLoaded]);

    const toggleReaction = useCallback(
        (reactionType: ReactionType) => {
            const hasReacted = userReactions[reactionType];

            setUserReactions((prev) => ({
                ...prev,
                [reactionType]: !hasReacted
            }));

            setCounts((prev) => ({
                ...prev,
                [reactionType]: hasReacted
                    ? Math.max(0, (prev[reactionType] || 0) - 1)
                    : (prev[reactionType] || 0) + 1
            }));
        },
        [userReactions]
    );

    return {
        counts,
        userReactions,
        toggleReaction,
        isLoaded
    };
}
