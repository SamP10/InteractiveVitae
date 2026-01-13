import type { ITag } from '@/app/data/blog';

interface TagBadgeProps {
    tag: ITag;
}

export default function TagBadge({ tag }: TagBadgeProps) {
    return (
        <div className="flex items-center gap-2 bg-darkPine text-cream px-3 py-1 rounded-full text-sm font-medium">
            <span
                className="w-2 h-2 rounded-full"
                style={{ backgroundColor: tag.color }}
                aria-hidden="true"
            />
            <span>{tag.name}</span>
        </div>
    );
}
