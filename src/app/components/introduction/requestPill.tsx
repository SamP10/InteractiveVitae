import React from 'react';

interface RequestPillProps {
    label: string;
    onClick: () => void;
}

export default function RequestPill({ label, onClick }: RequestPillProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 rounded-full text-white font-bold transition-transform transform hover:scale-105 active:scale-95"
            style={{
                backgroundColor: 'rgba(80, 80, 80, 0.7)',
                fontFamily: 'Doto',
                fontSize: 18,
                boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
            }}
        >
            {label}
        </button>
    );
};