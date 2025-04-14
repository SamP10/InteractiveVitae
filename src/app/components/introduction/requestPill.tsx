import React from 'react';

interface RequestPillProps {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

export default function RequestPill({ label, onClick, disabled }: RequestPillProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 m-1 rounded-full text-white font-bold transition-transform transform hover:scale-105 active:scale-90"
            style={{
                backgroundColor: '#800080',
                fontFamily: 'Doto',
                fontSize: 15,
                fontWeight: 900,
                transition: 'background-color 0.8s ease',
            }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = '#9370DB')}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = '#800080')}
            disabled={disabled}>
            {label}
        </button>
    );
}
