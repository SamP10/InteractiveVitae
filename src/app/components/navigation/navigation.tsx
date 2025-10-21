'use client';
import { useState } from 'react';

export default function Navigation() {
    const squares = Array.from({ length: 6 });
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div className="bg-cream rounded-r-md float-left fixed z-10 top-1/2 -translate-y-1/2">
                <div className="grid grid-cols-2 gap-2 p-2 mr-0">
                    {squares.map((_, i) => (
                        <button
                            key={i}
                            className="aspect-square w-10 bg-darkPine rounded-md flex opacity-70 hover:opacity-100 animate-slide-in-left"></button>
                    ))}
                </div>

                <button
                    className={`w-10 h-10 rounded-r-md ml-2`}
                    onClick={() => setShowNav(!showNav)}>
                    {showNav ? (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#3E7B27"
                            className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M15.78 19.78a.75.75 0 01-1.06 0l-7-7a.75.75 0 010-1.06l7-7a.75.75 0 111.06 1.06L9.31 12l6.47 6.47a.75.75 0 010 1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    ) : (
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="#3E7B27"
                            className="w-6 h-6">
                            <path
                                fillRule="evenodd"
                                d="M8.22 4.22a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 11-1.06-1.06L14.69 12 8.22 5.53a.75.75 0 010-1.06z"
                                clipRule="evenodd"
                            />
                        </svg>
                    )}
                </button>
            </div>
        </div>
    );
}
