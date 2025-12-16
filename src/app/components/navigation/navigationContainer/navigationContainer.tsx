import { useState } from 'react';
import NavigationItem from '../navigationItem/navigationItem';

export default function NavigationContainer() {
    const squares = Array.from({ length: 6 });
    const [showNav, setShowNav] = useState(false);

    return (
        <div>
            <div
                className={`bg-cream rounded-l-md fixed z-10 top-1/2 right-0 -translate-y-1/2 inline-flex transition-transform duration-700`}>
                <div
                    className={`grid grid-cols-2 gap-1 md:gap-2 items-center justify-center ${
                        showNav
                            ? 'animate-slide-in-right w-40 md:w-56 p-1 '
                            : 'animate-slide-out-to-right w-0'
                    } overflow-hidden transition-all duration-700`}>
                    {squares.map((_, i) => (
                        <NavigationItem key={i} index={i} showNav={showNav} />
                    ))}
                </div>

                <button
                    className={`flex items-center justify-center rounded-l-md m-auto`}
                    onClick={() => setShowNav(!showNav)}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="#3E7B27"
                        className={`w-6 h-6 md:w-8 md:h-8 ${
                            showNav ? 'rotate-180' : ''
                        } transition-transform duration-700`}>
                        <path
                            fillRule="evenodd"
                            d="M8.22 4.22a.75.75 0 011.06 0l7 7a.75.75 0 010 1.06l-7 7a.75.75 0 11-1.06-1.06L14.69 12 8.22 5.53a.75.75 0 010-1.06z"
                            clipRule="evenodd"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
