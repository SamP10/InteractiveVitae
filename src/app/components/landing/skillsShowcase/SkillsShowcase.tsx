'use client';

import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getSkillsTiming } from '@/app/constants/animations';
import RadarChart from './RadarChart';
import { SkillData } from './radarChartUtils';

interface SkillCategory {
    name: string;
    color: 'amber' | 'teal' | 'slate';
    skills: SkillData[];
}

const skillCategories: SkillCategory[] = [
    {
        name: 'Languages',
        color: 'amber',
        skills: [
            { name: 'TypeScript', level: 90 },
            { name: 'JavaScript', level: 90 },
            { name: 'Python', level: 70 },
            { name: 'Apex', level: 85 },
            { name: 'SQL', level: 75 },
            { name: 'Swift', level: 50 }
        ]
    },
    {
        name: 'Frameworks',
        color: 'teal',
        skills: [
            { name: 'React', level: 90 },
            { name: 'Next.js', level: 80 },
            { name: 'LWC', level: 85 },
            { name: 'Tailwind', level: 85 },
            { name: 'TensorFlow', level: 55 }
        ]
    },
    {
        name: 'Tools & Platforms',
        color: 'slate',
        skills: [
            { name: 'Salesforce', level: 90 },
            { name: 'Git', level: 85 },
            { name: 'Docker', level: 70 },
            { name: 'REST APIs', level: 90 },
            { name: 'Node.js', level: 75 }
        ]
    }
];

export default function SkillsShowcase() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay } = getSkillsTiming(isInitialLoad);

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

                {/* Radar charts grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 justify-items-center">
                    {skillCategories.map((category, index) => (
                        <RadarChart
                            key={category.name}
                            title={category.name}
                            skills={category.skills}
                            color={category.color}
                            animationDelay={baseDelay + 0.2 + index * 0.2}
                        />
                    ))}
                </div>

                {/* Legend */}
                <div
                    className="flex flex-wrap justify-center gap-6 mt-12 text-cream/60 text-sm opacity-0 animate-text-reveal"
                    style={{ animationDelay: `${baseDelay + 1}s` }}>
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-amber" />
                        Languages
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-teal" />
                        Frameworks
                    </span>
                    <span className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-slate" />
                        Tools & Platforms
                    </span>
                </div>
            </div>
        </section>
    );
}
