'use client';

import type { TimelineEntry } from '@/app/data/experience';

interface TimelineExpandableContentProps {
    entry: TimelineEntry;
    isExpanded: boolean;
}

export default function TimelineExpandableContent({
    entry,
    isExpanded
}: TimelineExpandableContentProps) {
    if (!isExpanded) return null;

    return (
        <div className="animate-expand mt-4 border-t border-pine/20 pt-4">
            <ul className="space-y-2">
                {entry.achievements.map((achievement, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm">
                        <span className="text-moss mt-1 flex-shrink-0">&#8226;</span>
                        <span>{achievement}</span>
                    </li>
                ))}
            </ul>

            {entry.technologies && entry.technologies.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                    {entry.technologies.map((tech) => (
                        <span
                            key={tech}
                            className="text-xs px-2 py-1 bg-pine text-cream rounded-md"
                        >
                            {tech}
                        </span>
                    ))}
                </div>
            )}
        </div>
    );
}
