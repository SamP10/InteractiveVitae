'use client';

import { REACTIONS, ReactionType } from '@/app/data/blog';
import { useReactions } from './hooks/useReactions';

interface ReactionBarProps {
    postId: number;
}

export default function ReactionBar({ postId }: ReactionBarProps) {
    const { counts, userReactions, toggleReaction, isLoaded } = useReactions(postId);

    if (!isLoaded) {
        return <div className="h-12" aria-hidden="true" />;
    }

    return (
        <div className="flex flex-wrap gap-3">
            {Object.entries(REACTIONS).map(([key, reaction]) => {
                const reactionType = key as ReactionType;
                const count = counts[reactionType] || 0;
                const hasReacted = userReactions[reactionType] || false;

                return (
                    <button
                        key={reactionType}
                        onClick={() => toggleReaction(reactionType)}
                        className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all duration-200 ${
                            hasReacted
                                ? 'bg-moss text-cream scale-105'
                                : 'bg-cream text-darkPine hover:bg-cream hover:scale-105'
                        }`}
                        aria-label={`${reaction.label} (${count})`}
                        aria-pressed={hasReacted}
                    >
                        <span className="text-lg">{reaction.emoji}</span>
                        <span className="text-sm font-medium">{count}</span>
                    </button>
                );
            })}
        </div>
    );
}
