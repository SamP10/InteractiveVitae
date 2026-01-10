'use client';

interface AvailabilityBadgeProps {
    isAvailable?: boolean;
}

export default function AvailabilityBadge({ isAvailable = true }: AvailabilityBadgeProps) {
    return (
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-darkPine/20 rounded-full">
            <span
                className={`w-3 h-3 rounded-full ${
                    isAvailable ? 'bg-moss animate-availability-pulse' : 'bg-amber'
                }`}
            />
            <span className="text-darkPine font-medium text-sm">
                {isAvailable ? 'Available for Work' : 'Currently Unavailable'}
            </span>
        </div>
    );
}
