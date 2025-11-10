'use client';
import { useState } from 'react';
import NavigationItem from '../navigationItem/navigationItem';

export default function NavigationContainer() {
    const squares = Array.from({ length: 6 });
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div
                className={`bg-cream rounded-r-md float-left fixed z-10 top-1/2 -translate-y-1/2 inline-flex transition-transform duration-700`}>
                <div
                    className={`grid grid-cols-1 md:grid-cols-2 gap-3 items-center justify-center ${
                        showNav
                            ? 'animate-slide-in-left w-20 md:w-72 p-3'
                            : 'animate-slide-out-right w-0'
                    } overflow-hidden transition-all duration-700`}>
                    {squares.map((_, i) => (
                        <NavigationItem key={i} index={i} showNav={showNav} />
                    ))}
                </div>

                <button
                    className={`flex items-center justify-center rounded-r-md m-auto ${showNav ? 'h-4' : 'h-4'}`}
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
