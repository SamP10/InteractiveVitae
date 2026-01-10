/**
 * Centralized animation timing constants
 * All values are in seconds
 */

export const ANIMATION_TIMING = {
    // Base delays - when animations start
    delays: {
        navigation: 0.8,
        navTextOffset: 0.3, // Additional delay for nav text after underline
        content: {
            initial: 2.5, // Wait for header animations to complete
            subsequent: 0,
        },
        projectCards: {
            initial: 2.7, // Slightly after content starts
            subsequent: 0.1,
        },
        timelineItems: {
            initial: 2.7, // After header animation
            subsequent: 0.1,
        },
    },

    // Stagger intervals - time between sequential items
    stagger: {
        navigation: 0.25,
        content: {
            initial: 0.2,
            subsequent: 0.1,
        },
        cards: {
            initial: 0.1,
            subsequent: 0.05,
        },
        timeline: {
            initial: 0.15, // Stagger between timeline items
            subsequent: 0.05,
        },
    },

    // Durations - how long animations take (matching CSS classes in globals.css)
    durations: {
        slideIn: 0.7,
        slideInLong: 0.8,
        rotateEntrance: 1.5,
        navPopUp: 0.5,
        navUnderline: 1.4,
        cardFadeIn: 0.6,
        contentFadeIn: 0.5,
        contentFadeInFast: 0.3,
    },
} as const;

// Helper to get content timing based on initial load state
export function getContentTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.content.initial
            : ANIMATION_TIMING.delays.content.subsequent,
        stagger: isInitialLoad
            ? ANIMATION_TIMING.stagger.content.initial
            : ANIMATION_TIMING.stagger.content.subsequent,
        animationClass: isInitialLoad ? 'animate-content-fade-in' : 'animate-content-fade-in-fast',
    };
}

// Helper to get card timing based on initial load state
export function getCardTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.projectCards.initial
            : ANIMATION_TIMING.delays.projectCards.subsequent,
        stagger: isInitialLoad
            ? ANIMATION_TIMING.stagger.cards.initial
            : ANIMATION_TIMING.stagger.cards.subsequent,
    };
}

// Helper to get timeline timing based on initial load state
export function getTimelineTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.timelineItems.initial
            : ANIMATION_TIMING.delays.timelineItems.subsequent,
        stagger: isInitialLoad
            ? ANIMATION_TIMING.stagger.timeline.initial
            : ANIMATION_TIMING.stagger.timeline.subsequent,
    };
}
