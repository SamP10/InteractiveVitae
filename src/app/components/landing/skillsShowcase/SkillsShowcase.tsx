'use client';

import { useState } from 'react';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getSkillsTiming } from '@/app/constants/animations';

interface Skill {
    name: string;
    category: 'language' | 'framework' | 'tool';
    proficiency: 'expert' | 'advanced' | 'intermediate';
}

const skills: Skill[] = [
    // Languages
    { name: 'TypeScript', category: 'language', proficiency: 'expert' },
    { name: 'JavaScript', category: 'language', proficiency: 'expert' },
    { name: 'Python', category: 'language', proficiency: 'advanced' },
    { name: 'Swift', category: 'language', proficiency: 'intermediate' },
    { name: 'Apex', category: 'language', proficiency: 'expert' },
    { name: 'SQL', category: 'language', proficiency: 'advanced' },
    // Frameworks
    { name: 'React', category: 'framework', proficiency: 'expert' },
    { name: 'Next.js', category: 'framework', proficiency: 'advanced' },
    { name: 'TensorFlow', category: 'framework', proficiency: 'intermediate' },
    { name: 'Tailwind', category: 'framework', proficiency: 'advanced' },
    { name: 'LWC', category: 'framework', proficiency: 'expert' },
    // Tools
    { name: 'Docker', category: 'tool', proficiency: 'advanced' },
    { name: 'Git', category: 'tool', proficiency: 'expert' },
    { name: 'Salesforce', category: 'tool', proficiency: 'expert' },
    { name: 'REST APIs', category: 'tool', proficiency: 'expert' },
    { name: 'Node.js', category: 'tool', proficiency: 'advanced' }
];

const categoryColors = {
    language: 'bg-amber/80 hover:bg-amber',
    framework: 'bg-teal/80 hover:bg-teal',
    tool: 'bg-slate/80 hover:bg-slate'
};

const proficiencySize = {
    expert: 'px-4 py-2 text-base',
    advanced: 'px-3 py-1.5 text-sm',
    intermediate: 'px-2.5 py-1 text-xs'
};

const categoryLabels = {
    language: 'Languages',
    framework: 'Frameworks',
    tool: 'Tools & Platforms'
};

export default function SkillsShowcase() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, bubbleStagger } = getSkillsTiming(isInitialLoad);
    const [activeCategory, setActiveCategory] = useState<string | null>(null);

    const categories = ['language', 'framework', 'tool'] as const;

    return (
        <section className="py-16 px-4 bg-pine">
            <div className="max-w-6xl mx-auto">
                {/* Section header */}
                <div
                    className="text-center mb-12 opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay}s` }}>
                    <h2 className="text-3xl md:text-4xl font-limelight text-cream mb-4">
                        Technical Toolkit
                    </h2>
                    <div className="w-24 h-1 bg-moss mx-auto rounded-full mb-6" />
                    <p className="text-cream/70 max-w-2xl mx-auto">
                        Technologies I work with to build innovative solutions
                    </p>
                </div>

                {/* Category legend */}
                <div
                    className="flex flex-wrap justify-center gap-4 mb-10 opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay + 0.1}s` }}>
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() =>
                                setActiveCategory(activeCategory === category ? null : category)
                            }
                            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
                                activeCategory === category || activeCategory === null
                                    ? 'opacity-100'
                                    : 'opacity-40'
                            }`}>
                            <span
                                className={`w-3 h-3 rounded-full ${categoryColors[category]}`}
                            />
                            <span className="text-cream text-sm">
                                {categoryLabels[category]}
                            </span>
                        </button>
                    ))}
                </div>

                {/* Skills bubbles */}
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                    {skills.map((skill, index) => {
                        const isVisible =
                            activeCategory === null || activeCategory === skill.category;

                        return (
                            <div
                                key={skill.name}
                                className={`
                                    ${categoryColors[skill.category]}
                                    ${proficiencySize[skill.proficiency]}
                                    text-cream font-medium rounded-full cursor-default
                                    transition-all duration-300 transform
                                    hover:scale-110 hover:shadow-lg
                                    opacity-0 animate-skill-pop
                                    ${!isVisible ? '!opacity-20 scale-90' : ''}
                                `}
                                style={{
                                    animationDelay: `${baseDelay + 0.2 + index * bubbleStagger}s`
                                }}
                                title={`${skill.name} - ${skill.proficiency}`}>
                                {skill.name}
                            </div>
                        );
                    })}
                </div>

                {/* Proficiency legend */}
                <div
                    className="flex justify-center gap-6 mt-10 text-cream/60 text-sm opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay + 1}s` }}>
                    <span className="flex items-center gap-2">
                        <span className="px-4 py-2 text-base bg-cream/20 rounded-full">Large</span>
                        Expert
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="px-3 py-1.5 text-sm bg-cream/20 rounded-full">Medium</span>
                        Advanced
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="px-2.5 py-1 text-xs bg-cream/20 rounded-full">Small</span>
                        Intermediate
                    </span>
                </div>
            </div>
        </section>
    );
}
