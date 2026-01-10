'use client';

import { ITimelineEntry, categoryInfo } from '@/app/data/experience';
import TimelineExpandableContent from './TimelineExpandableContent';

interface ITimelineItemProps {
    entry: ITimelineEntry;
    index: number;
    isExpanded: boolean;
    onToggle: () => void;
    isInitialLoad: boolean;
    animationDelay: number;
}

export default function TimelineItem({
    entry,
    index,
    isExpanded,
    onToggle,
    isInitialLoad,
    animationDelay
}: ITimelineItemProps) {
    const isEven = index % 2 === 0;
    const isOngoing = entry.dateEnd === null;
    const categoryStyle = categoryInfo[entry.category];

    const dateDisplay = entry.dateEnd
        ? `${entry.dateStart} - ${entry.dateEnd}`
        : `${entry.dateStart} - Present`;

    return (
        <div
            className={`relative flex items-start gap-4
                md:flex-row ${isEven ? '' : 'md:flex-row-reverse'}
                ${isInitialLoad ? (isEven ? 'animate-timeline-left' : 'animate-timeline-right') : ''}`}
            style={{ animationDelay: `${animationDelay}s` }}
        >
            {/* Timeline node */}
            <div
                className={`absolute left-4 md:left-1/2 transform -translate-x-1/2
                    w-4 h-4 rounded-full border-2 border-cream bg-pine z-10
                    ${isOngoing ? 'animate-node-pulse' : ''}`}
            />

            {/* Content card */}
            <div
                className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)]
                    bg-cream text-darkPine rounded-lg p-4
                    hover:shadow-lg hover:scale-[1.01] transition-all duration-300
                    ${isEven ? 'md:mr-auto md:mr-8' : 'md:ml-auto md:ml-8'}`}
            >
                {/* Header */}
                <div className="flex items-start justify-between gap-2 flex-wrap">
                    <div className="flex items-center gap-2 flex-wrap">
                        <span
                            className={`text-xs font-medium px-2 py-1 rounded-full ${categoryStyle.bgColor} text-cream`}
                        >
                            {categoryStyle.label}
                        </span>
                        <span className="text-xs text-pine">{dateDisplay}</span>
                    </div>
                    {entry.link && (
                        <a
                            href={entry.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-pine hover:text-moss transition-colors"
                            aria-label={`View ${entry.title} on GitHub`}
                        >
                            <svg
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 24 24"
                                aria-hidden="true"
                            >
                                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                            </svg>
                        </a>
                    )}
                </div>

                {/* Title and summary */}
                <h3 className="text-xl font-bold mt-2">{entry.title}</h3>
                <p className="text-sm text-moss font-medium">{entry.subtitle}</p>
                <p className="text-sm text-pine mt-2">{entry.summary}</p>

                {/* Expand toggle */}
                <button
                    onClick={onToggle}
                    className="flex items-center gap-1 text-sm text-moss hover:text-pine mt-3 transition-colors"
                    aria-expanded={isExpanded}
                >
                    {isExpanded ? 'Show less' : 'Show more'}
                    <svg
                        className={`w-4 h-4 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                        />
                    </svg>
                </button>

                {/* Expandable content */}
                <TimelineExpandableContent entry={entry} isExpanded={isExpanded} />
            </div>
        </div>
    );
}
