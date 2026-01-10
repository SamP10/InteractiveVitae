'use client';

import { TimelineCategory } from '@/app/data/experience';
import { getContentTiming } from '@/app/constants/animations';

interface TimelineFiltersProps {
    activeFilter: TimelineCategory | 'all';
    onFilterChange: (filter: TimelineCategory | 'all') => void;
    isInitialLoad: boolean;
}

const filters: Array<{ value: TimelineCategory | 'all'; label: string }> = [
    { value: 'all', label: 'All' },
    { value: 'work', label: 'Work' },
    { value: 'project', label: 'Projects' },
    { value: 'education', label: 'Education' }
];

export default function TimelineFilters({
    activeFilter,
    onFilterChange,
    isInitialLoad
}: TimelineFiltersProps) {
    const { baseDelay, stagger, animationClass } = getContentTiming(isInitialLoad);

    return (
        <div
            className={`flex flex-wrap gap-2 justify-center ${animationClass}`}
            style={{ animationDelay: `${baseDelay + stagger}s` }}
        >
            {filters.map((filter) => (
                <button
                    key={filter.value}
                    onClick={() => onFilterChange(filter.value)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200
                        ${
                            activeFilter === filter.value
                                ? 'bg-moss text-cream'
                                : 'bg-transparent border border-cream text-cream hover:bg-cream hover:text-darkPine'
                        }`}
                >
                    {filter.label}
                </button>
            ))}
        </div>
    );
}
