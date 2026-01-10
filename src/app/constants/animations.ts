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
        // Landing page sections
        hero: {
            initial: 2.3, // After nav completes
            subsequent: 0,
        },
        featuredProjects: {
            initial: 2.8,
            subsequent: 0.1,
        },
        professionalHighlights: {
            initial: 3.0,
            subsequent: 0.15,
        },
        skills: {
            initial: 3.2,
            subsequent: 0,
        },
        workTogether: {
            initial: 3.4,
            subsequent: 0,
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
        // Landing page sections
        hero: {
            text: 0.15, // Between headline words
            cta: 0.1, // Between CTA buttons
        },
        featuredProjects: {
            cards: 0.15,
        },
        skills: {
            bubbles: 0.05,
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

// Helper to get hero section timing
export function getHeroTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.hero.initial
            : ANIMATION_TIMING.delays.hero.subsequent,
        textStagger: ANIMATION_TIMING.stagger.hero.text,
        ctaStagger: ANIMATION_TIMING.stagger.hero.cta,
    };
}

// Helper to get featured projects timing
export function getFeaturedProjectsTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.featuredProjects.initial
            : ANIMATION_TIMING.delays.featuredProjects.subsequent,
        cardStagger: ANIMATION_TIMING.stagger.featuredProjects.cards,
    };
}

// Helper to get professional highlights timing
export function getProfessionalHighlightsTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.professionalHighlights.initial
            : ANIMATION_TIMING.delays.professionalHighlights.subsequent,
    };
}

// Helper to get skills showcase timing
export function getSkillsTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.skills.initial
            : ANIMATION_TIMING.delays.skills.subsequent,
        bubbleStagger: ANIMATION_TIMING.stagger.skills.bubbles,
    };
}

// Helper to get work together CTA timing
export function getWorkTogetherTiming(isInitialLoad: boolean) {
    return {
        baseDelay: isInitialLoad
            ? ANIMATION_TIMING.delays.workTogether.initial
            : ANIMATION_TIMING.delays.workTogether.subsequent,
    };
}
