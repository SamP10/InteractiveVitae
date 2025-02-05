'use client';

import { Bodies } from 'matter-js';
import { useEffect, useRef } from 'react';
import { fullPipeCurve } from './prefabs/pipes';

export default function Introduction({ onAddBodies, radius, width, height }) {
    const ballAdded = useRef(false);

    useEffect(() => {
        if (!ballAdded.current) {
            addPipes(radius);

            const circle = Bodies.circle(52, -50, radius, {
                restitution: 0,
                friction: 0.02,
                render: {
                    fillStyle: '#fbbf24'
                }
            });

            const floor = Bodies.rectangle(width / 2, height, width, 1, {
                isStatic: true,
                render: { fillStyle: '#fbbf24' }
            });

            onAddBodies([circle, floor]);
            ballAdded.current = true;
        }
    }, []);

    const addPipes = (radius) => {
        const diameter = radius * 2;

        onAddBodies(fullPipeCurve(diameter));
    };

    return <div className="relative w-full h-screen"></div>;
}
