interface LanguageBadgeProps {
    language: string;
    color: string;
}

export default function LanguageBadge({ language, color }: LanguageBadgeProps) {
    return (
        <div className="flex items-center gap-2 bg-darkPine text-cream px-3 py-1 rounded-full text-sm font-medium">
            <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: color }}
                aria-hidden="true"
            />
            <span>{language}</span>
        </div>
    );
}
