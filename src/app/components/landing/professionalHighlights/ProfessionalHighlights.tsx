'use client';

import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getProfessionalHighlightsTiming } from '@/app/constants/animations';
import { experienceData } from '@/app/data/experience';
import HighlightCard from './HighlightCard';

export default function ProfessionalHighlights() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay } = getProfessionalHighlightsTiming(isInitialLoad);

    // Get featured work and education entries
    const featuredEntries = experienceData.filter(
        (entry) => entry.featured && (entry.category === 'work' || entry.category === 'education')
    );

    // Calculate stats
    const currentYear = new Date().getFullYear();
    const yearsExperience = currentYear - 2022; // Started at Certinia in 2022

    const stats = [
        { value: `${yearsExperience}+`, label: 'Years Experience' },
        { value: '500+', label: 'Stories Delivered' },
        { value: '15+', label: 'Technologies' }
    ];

    return (
        <section className="py-16 px-4 bg-darkPine">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div
                    className="text-center mb-12 opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay}s` }}>
                    <h2 className="text-3xl md:text-4xl font-limelight text-cream mb-4">
                        Professional Journey
                    </h2>
                    <div className="w-24 h-1 bg-moss mx-auto rounded-full" />
                </div>

                {/* Stats bar */}
                <div className="grid grid-cols-3 gap-4 md:gap-8 mb-12">
                    {stats.map((stat, index) => (
                        <div
                            key={stat.label}
                            className="text-center p-4 md:p-6 bg-pine/50 rounded-xl opacity-0 animate-count-up"
                            style={{ animationDelay: `${baseDelay + 0.2 + index * 0.1}s` }}>
                            <div className="text-3xl md:text-4xl font-limelight text-moss mb-2">
                                {stat.value}
                            </div>
                            <div className="text-sm md:text-base text-cream/70">{stat.label}</div>
                        </div>
                    ))}
                </div>

                {/* Featured entries */}
                <div className="space-y-6">
                    {featuredEntries.map((entry, index) => (
                        <HighlightCard
                            key={entry.id}
                            entry={entry}
                            animationDelay={baseDelay + 0.5 + index * 0.15}
                        />
                    ))}
                </div>

                {/* View full timeline link */}
                <div
                    className="text-center mt-10 opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay + 0.9}s` }}>
                    <a
                        href="/experience"
                        className="inline-flex items-center text-cream hover:text-moss font-medium transition-colors">
                        View Full Timeline
                        <svg
                            className="w-5 h-5 ml-2"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M17 8l4 4m0 0l-4 4m4-4H3"
                            />
                        </svg>
                    </a>
                </div>
            </div>
        </section>
    );
}
