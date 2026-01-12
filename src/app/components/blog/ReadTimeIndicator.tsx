interface ReadTimeIndicatorProps {
    minutes: number;
}

export default function ReadTimeIndicator({ minutes }: ReadTimeIndicatorProps) {
    return (
        <span className="flex items-center gap-1 text-sm">
            <svg
                className="w-4 h-4"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                aria-hidden="true"
            >
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
            </svg>
            <span>{minutes} min read</span>
        </span>
    );
}
