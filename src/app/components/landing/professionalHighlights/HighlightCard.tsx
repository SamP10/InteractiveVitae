'use client';

import { TimelineEntry } from '@/app/data/experience';

interface HighlightCardProps {
    entry: TimelineEntry;
    animationDelay: number;
}

export default function HighlightCard({ entry, animationDelay }: HighlightCardProps) {
    return (
        <div
            className="bg-cream/10 backdrop-blur-sm rounded-xl p-6 border border-cream/20 opacity-0 animate-card-fade-in"
            style={{ animationDelay: `${animationDelay}s` }}>
            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                {/* Role and company */}
                <div className="flex-1">
                    <h3 className="text-xl font-bold text-cream mb-1">{entry.title}</h3>
                    <p className="text-moss font-medium mb-2">{entry.subtitle}</p>
                    <p className="text-cream/60 text-sm">
                        {entry.dateStart} - {entry.dateEnd || 'Present'}
                    </p>
                </div>

                {/* Technologies */}
                {entry.technologies && (
                    <div className="flex flex-wrap gap-2">
                        {entry.technologies.slice(0, 4).map((tech) => (
                            <span
                                key={tech}
                                className="px-2 py-1 text-xs bg-moss/30 text-cream rounded-md">
                                {tech}
                            </span>
                        ))}
                    </div>
                )}
            </div>

            {/* Key achievements */}
            <div className="mt-4 space-y-2">
                {entry.achievements.slice(0, 2).map((achievement, index) => (
                    <p key={index} className="text-cream/80 text-sm flex items-start">
                        <span className="text-moss mr-2">-</span>
                        {achievement}
                    </p>
                ))}
            </div>
        </div>
    );
}
