'use client';
import { useState } from 'react';

export default function Navigation() {
    const squares = Array.from({ length: 6 });
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div
                className={`bg-cream rounded-r-md float-left fixed z-10 top-1/2 -translate-y-1/2 inline-flex ${
                    showNav ? 'animate-slide-in-left' : 'animate-slide-in-left'
                } transition-transform duration-300`}>
                <div
                    className={`grid grid-cols-2 gap-2 p-2 mr-0 ${
                        showNav ? 'animate-slide-in-left' : 'animate-slide-out-right'
                    } transition-transform duration-300`}>
                    {squares.map((_, i) => (
                        <button
                            key={i}
                            className="aspect-square w-10 bg-darkPine rounded-md flex opacity-70 hover:opacity-100 animate-slide-in-left"></button>
                    ))}
                </div>

                <button
                    className={`ml-2 flex items-center justify-center`}
                    onClick={() => setShowNav(!showNav)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#3E7B27"
                        className={`w-8 h-8 ${
                            showNav ? 'rotate-180' : ''
                        } transition-transform duration-700`}>
                        <path
                            fillRule="evenodd"
                            d="M15.78 19.78a.75.75 0 01-1.06 0l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 111.06 1.06L9.31 12l6.47 6.47a.75.75 0 010 1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
