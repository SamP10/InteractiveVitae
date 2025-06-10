'use client';

export default function NavButton({
    label,
    onClick
}: {
    label: string;
    onClick: () => void;
}) {
    return (
        <button
            className="px-5 py-2 relative overflow-hidden rounded text-sm font-medium transition-all group"
            onClick={onClick}
        >
            <span className="absolute inset-y-0 left-0 w-0 bg-green-600 transition-all duration-300 group-hover:w-full"></span>
            <span className="relative z-10">{label}</span>
        </button>
    );
}
