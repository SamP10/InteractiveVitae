'use client';

interface ScheduleButtonProps {
    calendlyUrl?: string;
}

export default function ScheduleButton({
    calendlyUrl = '#'
}: ScheduleButtonProps) {
    return (
        <a
            href={calendlyUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 bg-moss text-cream font-semibold rounded-xl hover:bg-moss/90 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl animate-cta-pulse">
            <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24">
                <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
            </svg>
            Schedule a Call
        </a>
    );
}
