'use client';

import { useState, useRef, useEffect } from 'react';
import { Bodies } from 'matter-js';
import { IStartButtonConfig } from './types/components';
import { Render, World } from 'matter-js';

export default function StartButton({
    onAddBodies,
    onSetRadius,
    onMovePageState,
    width,
    height,
    engine,
    scene
}: IStartButtonConfig) {
    const [buttonClicked, setButtonClicked] = useState(false);
    const [dropBall, setDropBall] = useState(false);
    const [circle, setCircle] = useState<Body|null>(null);
    const buttonRef = useRef<HTMLDivElement|null>(null);

    useEffect(() => {
        const render = Render.create({
            element: scene.current,
            engine: engine,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: 'black'
            }
        });

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, width, height, scene]);

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
                    fillStyle: '#3B82F6'
                }
            });

            setCircle(circle);

            setDropBall(true);

            onAddBodies([circle]);
        }, 300);
    };

    useEffect(() => {
        if (circle) {
            const intervalId = setInterval(() => {
                if (circle.position.y > height) {
                    onMovePageState();
                    World.remove(engine.world, circle);
                    clearInterval(intervalId);
                }
            }, 700);

            return () => clearInterval(intervalId);
        }
    }, [circle, onMovePageState, engine, height]);

    return (
        <div className="flex items-center justify-center w-full h-screen">
            {!dropBall && (
                <button
                    ref={buttonRef}
                    className={`bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transform transition-all duration-300 
                        ${
                            buttonClicked
                                ? 'md:h-10 md:w-10 sm:h-10 sm:w-10'
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
