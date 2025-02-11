'use client';

import { Bodies, Events, Body } from 'matter-js';
import { useEffect, useRef } from 'react';
import { getPipes } from './prefabs/IntroductionPipe';
import { IIntroductionConfig } from './types/Components';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
    const ballRef = useRef(null);
    const floorRef = useRef(null);

    useEffect(() => {
        if (!ballRef.current) {
            addPipes(radius);

            const ball = Bodies.circle(radius, -50, radius, {
                restitution: 0,
                friction: 0.02,
                render: {
                    fillStyle: '#fbbf24'
                }
            });
            ballRef.current = ball;

            const floor = Bodies.rectangle(width / 2, height, width, 1, {
                isStatic: true,
                render: { fillStyle: '#fbbf24' }
            });
            floorRef.current = floor;

            onAddBodies([ball, floor]);
        }

        return () => {};
    }, [engine, onAddBodies, radius, width, height]);

    const handleCollision = (event) => {
        const pairs = event.pairs;
        for (let i = 0; i < pairs.length; i++) {
            const {bodyA, bodyB} = pairs[i];

            if (
                (bodyA === ballRef.current && bodyB === floorRef.current) ||
                (bodyA === floorRef.current && bodyB === ballRef.current)
            ) {
                const targetPoint = { x: 300, y: 0 };
                const dx = targetPoint.x - ballRef.current.position.x;
                const dy = targetPoint.y - ballRef.current.position.y;
                const distance = Math.sqrt(dx * dx + dy * dy);


                const forceMagnitude = 0.05;
                const force = {
                    x: (dx / distance) * forceMagnitude,
                    y: 0
                };

                Body.applyForce(ballRef.current, ballRef.current.position, force);
            }
        }
    };

    useEffect(() => {
        Events.on(engine.current, 'collisionStart', handleCollision);

        return () => {
            Events.off(engine.current, 'collisionStart', handleCollision);
        };
    }, [engine]);

    const addPipes = (radius: number) => {
        const diameter = radius * 2;

        onAddBodies(getPipes(diameter));
    };

    return <div className="relative w-full h-screen"></div>;
}
