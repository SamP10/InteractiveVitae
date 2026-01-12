'use client';

import { ITag } from '@/app/data/blog';

export type SortOption = 'newest' | 'oldest' | 'popular';

interface BlogFiltersProps {
    tags: ITag[];
    selectedTags: number[];
    onTagToggle: (tagId: number) => void;
    sortBy: SortOption;
    onSortChange: (sort: SortOption) => void;
    onClearFilters: () => void;
}

const SORT_OPTIONS: { value: SortOption; label: string }[] = [
    { value: 'newest', label: 'Newest' },
    { value: 'oldest', label: 'Oldest' },
    { value: 'popular', label: 'Most Popular' }
];

export default function BlogFilters({
    tags,
    selectedTags,
    onTagToggle,
    sortBy,
    onSortChange,
    onClearFilters
}: BlogFiltersProps) {
    const hasActiveFilters = selectedTags.length > 0 || sortBy !== 'newest';

    return (
        <div className="space-y-4">
            {/* Sort Options */}
            <div className="flex flex-wrap items-center gap-3">
                <span className="text-cream text-sm font-medium">Sort by:</span>
                <div className="flex gap-2">
                    {SORT_OPTIONS.map((option) => (
                        <button
                            key={option.value}
                            onClick={() => onSortChange(option.value)}
                            className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                sortBy === option.value
                                    ? 'bg-moss text-cream'
                                    : 'bg-cream text-darkPine hover:scale-105'
                            }`}
                            aria-pressed={sortBy === option.value}
                        >
                            {option.label}
                        </button>
                    ))}
                </div>
            </div>

            {/* Tag Filters */}
            <div className="flex flex-wrap items-center gap-3">
                <span className="text-cream text-sm font-medium">Filter by tag:</span>
                <div className="flex flex-wrap gap-2">
                    {tags.map((tag) => {
                        const isSelected = selectedTags.includes(tag.id);
                        return (
                            <button
                                key={tag.id}
                                onClick={() => onTagToggle(tag.id)}
                                className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-all duration-200 ${
                                    isSelected
                                        ? 'bg-moss text-cream'
                                        : 'bg-cream text-darkPine hover:scale-105'
                                }`}
                                aria-pressed={isSelected}
                            >
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: tag.color }}
                                    aria-hidden="true"
                                />
                                {tag.name}
                            </button>
                        );
                    })}
                </div>
            </div>

            {/* Clear Filters */}
            {hasActiveFilters && (
                <button
                    onClick={onClearFilters}
                    className="text-cream text-sm underline hover:text-moss transition-colors"
                >
                    Clear all filters
                </button>
            )}
        </div>
    );
}
