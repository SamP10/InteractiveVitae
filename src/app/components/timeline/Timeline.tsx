'use client';

import { useState, useMemo } from 'react';
import TimelineItem from './TimelineItem';
import TimelineFilters from './TimelineFilters';
import { experienceData, TimelineCategory } from '@/app/data/experience';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getTimelineTiming } from '@/app/constants/animations';

export default function Timeline() {
    const [activeFilter, setActiveFilter] = useState<TimelineCategory | 'all'>('all');
    const [expandedItems, setExpandedItems] = useState<Set<number>>(new Set());
    const isInitialLoad = useInitialLoad();

    const filteredData = useMemo(() => {
        if (activeFilter === 'all') return experienceData;
        return experienceData.filter((item) => item.category === activeFilter);
    }, [activeFilter]);

    const toggleExpand = (id: number) => {
        setExpandedItems((prev) => {
            const newSet = new Set(prev);
            if (newSet.has(id)) {
                newSet.delete(id);
            } else {
                newSet.add(id);
            }
            return newSet;
        });
    };

    const { baseDelay, stagger } = getTimelineTiming(isInitialLoad);

    return (
        <div className="w-full max-w-4xl mx-auto">
            <TimelineFilters
                activeFilter={activeFilter}
                onFilterChange={setActiveFilter}
                isInitialLoad={isInitialLoad}
            />

            <div className="relative mt-8">
                {/* Central timeline line */}
                <div
                    className={`absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-cream
                        ${isInitialLoad ? 'animate-draw-timeline' : ''}`}
                    style={{ animationDelay: `${baseDelay}s` }}
                />

                {/* Timeline items */}
                <div className="space-y-8 pb-8">
                    {filteredData.map((item, index) => (
                        <TimelineItem
                            key={item.id}
                            entry={item}
                            index={index}
                            isExpanded={expandedItems.has(item.id)}
                            onToggle={() => toggleExpand(item.id)}
                            isInitialLoad={isInitialLoad}
                            animationDelay={baseDelay + index * stagger}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
