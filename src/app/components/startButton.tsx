'use client';

import { useState, useRef } from 'react';
import { Bodies } from 'matter-js';
import { IStartButtonConfig } from './types/Components';

export default function StartButton({ onAddBodies, onSetRadius, onMovePageState }: IStartButtonConfig) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [dropBall, setDropBall] = useState(false);
    const buttonRef = useRef(null);

    const handleClick = () => {
        setButtonClicked(true);

        setTimeout(() => {
            const rect = buttonRef.current.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;
            let radius;

            if (window.innerWidth < 768) {
                radius = 15;
            } else {
                radius = rect.width / 2;
            }
            onSetRadius(radius);

            const circle = Bodies.circle(cx, cy, radius, {
                restitution: 0.9,
                friction: 0.005,
                render: {
                    fillStyle: '#fbbf24'
                }
            });

            setDropBall(true);

            onAddBodies([circle]);
        }, 300);

        setTimeout(() => {
            onMovePageState()
        }, 1000);
    };

    return (
        <div className="flex items-center justify-center w-full h-screen">
            {!dropBall && (
                <button
                    ref={buttonRef}
                    className={`bg-yellow-500 hover:bg-yellow-300 text-white font-bold rounded-full transform transition-all duration-300 
                        ${
                            buttonClicked
                                ? 'md:h-20 md:w-20 sm:h-10 sm:w-10'
                                : 'md:h-12 md:w-40 sm:h-100 sm:w-20'
                        }  
                        focus:outline-none z-10`}
                    onClick={handleClick}>
                    
                    {!buttonClicked && (
                        <span
                            className={`transition-opacity duration-300 md:text-base sm:test-sm${
                                buttonClicked ? 'opacity-0' : 'opacity-100'
                            }`}>
                            Get to know me
                        </span>
                    )}
                </button>
            )}
        </div>
    );
}
