import React from 'react';

interface PillProps {
    label: string;
    onClick: () => void;
    disabled: boolean;
}

export default function Pill({ label, onClick, disabled }: PillProps) {
    return (
        <button
            onClick={onClick}
            className="px-4 py-2 m-1 rounded-full text-white font-bold transition-transform transform hover:scale-105 active:scale-90"
            style={{
                backgroundColor: '#800080',
                fontFamily: 'Doto',
                fontSize: 15,
                fontWeight: 900,
            }}
            onMouseEnter={(event) => (event.currentTarget.style.backgroundColor = '#9370DB')}
            onMouseLeave={(event) => (event.currentTarget.style.backgroundColor = '#800080')}
            disabled={disabled}>
            {label}
        </button>
    );
}
