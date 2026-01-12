/**
 * Blog data types and content
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

export const blogPosts: IBlogPost[] = [
    {
        id: 1,
        slug: 'building-interactive-portfolio-nextjs',
        title: 'Building an Interactive Portfolio with Next.js 15',
        excerpt:
            'A deep dive into how I built this portfolio website using Next.js 15, React 19, and custom animations to create an engaging user experience.',
        content: `When I set out to build my portfolio, I wanted something that would stand out from the typical static resume sites. I wanted animations that felt natural, a design that reflected my personality, and code that I could be proud of.

## Why Next.js 15?

Next.js 15 brought some exciting features that made it the perfect choice for this project. The App Router provides a more intuitive way to structure pages, and React 19's improvements to server components meant I could optimize performance without sacrificing interactivity.

## The Animation System

One of the aspects I'm most proud of is the animation system. Rather than using a heavy animation library, I built a custom system using CSS keyframes and a centralized timing configuration. This approach gives me fine-grained control over when each element appears and how they relate to each other.

The key insight was creating an InitialLoadContext that tracks whether the user is visiting for the first time or navigating between pages. First-time visitors get the full choreographed animation sequence, while returning visitors see a faster, more subtle transition.

## Lessons Learned

Building this portfolio taught me several valuable lessons:

1. **Start with the design system** - Having consistent colors, typography, and spacing from the beginning saved countless hours of refactoring later.

2. **Animations should enhance, not distract** - Every animation serves a purpose, whether it's guiding attention or providing feedback.

3. **Accessibility matters** - The entire animation system respects the user's motion preferences via the prefers-reduced-motion media query.

## What's Next?

I'm continuing to iterate on this portfolio, adding new features like this blog section and improving performance. The codebase is open source, so feel free to explore and learn from it.`,
        author: 'Sam Plant',
        publishedAt: '2025-01-10',
        tags: [BLOG_TAGS.NEXTJS, BLOG_TAGS.REACT, BLOG_TAGS.TYPESCRIPT, BLOG_TAGS.WEB_DEV],
        readTimeMinutes: 5,
        featured: true
    },
    {
        id: 2,
        slug: 'ai-powered-intrusion-detection-msc-journey',
        title: 'AI-Powered Intrusion Detection: My MSc Journey',
        excerpt:
            'Exploring how I built a machine learning system for detecting network intrusions as part of my MSc in Computer Science at the University of Birmingham.',
        content: `My MSc thesis at the University of Birmingham focused on one of cybersecurity's most pressing challenges: detecting network intrusions using artificial intelligence. This post shares the journey, challenges, and insights from that project.

## The Problem

Traditional intrusion detection systems rely on signature-based detection, which means they can only catch known threats. As attackers become more sophisticated, we need systems that can identify novel attack patterns. This is where machine learning shines.

## The Approach

I explored several machine learning approaches, ultimately focusing on a hybrid model that combined:

- **Random Forest classifiers** for handling the high-dimensional feature space of network traffic
- **Deep learning models** for capturing complex temporal patterns
- **Ensemble methods** to improve overall accuracy and reduce false positives

The dataset I used was the NSL-KDD dataset, a refined version of the original KDD Cup 99 dataset that addresses many of its statistical issues.

## Key Challenges

Working on this project presented several interesting challenges:

### Class Imbalance
Network traffic is overwhelmingly normal, with attacks being rare events. I experimented with SMOTE (Synthetic Minority Over-sampling Technique) and cost-sensitive learning to address this imbalance.

### Feature Engineering
Raw network packets contain thousands of potential features. Determining which features actually matter for detection required extensive analysis and domain knowledge.

### Real-time Performance
A detection system that takes minutes to classify traffic isn't practical. Optimizing the model for inference speed while maintaining accuracy required careful architecture decisions.

## Results

The final system achieved a detection rate of over 95% with a false positive rate under 2%. More importantly, it demonstrated strong performance against previously unseen attack types, validating the machine learning approach.

## Looking Forward

This project sparked my interest in the intersection of AI and security. As AI systems become more prevalent, understanding both their potential and their vulnerabilities becomes increasingly important.`,
        author: 'Sam Plant',
        publishedAt: '2025-01-05',
        tags: [BLOG_TAGS.AI, BLOG_TAGS.MACHINE_LEARNING, BLOG_TAGS.CAREER],
        readTimeMinutes: 6,
        featured: true
    }
];

/**
 * Get all blog posts sorted by newest first
 */
export function getSortedBlogPosts(): IBlogPost[] {
    return [...blogPosts].sort(
        (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

/**
 * Get a single blog post by its slug
 */
export function getBlogPostBySlug(slug: string): IBlogPost | undefined {
    return blogPosts.find((post) => post.slug === slug);
}

/**
 * Get all unique tags from blog posts
 */
export function getAllTags(): ITag[] {
    const tagsMap = new Map<number, ITag>();
    blogPosts.forEach((post) => {
        post.tags.forEach((tag) => tagsMap.set(tag.id, tag));
    });
    return Array.from(tagsMap.values());
}
