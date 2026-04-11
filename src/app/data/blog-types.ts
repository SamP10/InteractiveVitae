/**
 * Blog data types and constants
 * This file is safe to import in both client and server components
 */

export interface ITag {
    id: number;
    name: string;
    slug: string;
    color: string;
}

export interface IBlogPost {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    content: string;
    author: string;
    publishedAt: string;
    updatedAt?: string;
    tags: ITag[];
    readTimeMinutes: number;
    featured?: boolean;
}

export type ReactionType = 'thumbsUp' | 'heart' | 'celebrate' | 'insightful' | 'fire';

export interface IReaction {
    type: ReactionType;
    emoji: string;
    label: string;
}

export const REACTIONS: Record<ReactionType, IReaction> = {
    thumbsUp: { type: 'thumbsUp', emoji: '👍', label: 'Like' },
    heart: { type: 'heart', emoji: '❤️', label: 'Love' },
    celebrate: { type: 'celebrate', emoji: '🎉', label: 'Celebrate' },
    insightful: { type: 'insightful', emoji: '💡', label: 'Insightful' },
    fire: { type: 'fire', emoji: '🔥', label: 'Fire' }
};

export const BLOG_TAGS: Record<string, ITag> = {
    TYPESCRIPT: { id: 1, name: 'TypeScript', slug: 'typescript', color: '#3178C6' },
    REACT: { id: 2, name: 'React', slug: 'react', color: '#61DAFB' },
    NEXTJS: { id: 3, name: 'Next.js', slug: 'nextjs', color: '#000000' },
    AI: { id: 4, name: 'AI', slug: 'ai', color: '#FF6F00' },
    MACHINE_LEARNING: { id: 5, name: 'Machine Learning', slug: 'machine-learning', color: '#9C27B0' },
    CAREER: { id: 6, name: 'Career', slug: 'career', color: '#3E7B27' },
    TUTORIAL: { id: 7, name: 'Tutorial', slug: 'tutorial', color: '#B45309' },
    WEB_DEV: { id: 8, name: 'Web Dev', slug: 'web-dev', color: '#0F766E' }
};
