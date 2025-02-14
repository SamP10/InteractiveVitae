'use client';

import { Bodies, Events, Body, Composite } from 'matter-js';
import { useEffect, useRef } from 'react';
import { getPipes } from '../prefabs/IntroductionPipe';
import { IIntroductionConfig } from '../types/Components';
import Car from '../matter-composites/car';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
    const intervalId = useRef(null);
    // const ballRef = useRef(null);
    // const floorRef = useRef(null);

    useEffect(() => {
        const floorCollisionFilterGroup = Body.nextGroup(true);
        const ballCollisionFilterGroup = Body.nextGroup(true);

        addPipes(radius);

        const spawnBall = () => {
            const ball = Bodies.circle(radius, -50, radius, {
                restitution: 0,
                friction: 0.02,
                render: {
                    fillStyle: '#fbbf24'
                },
                collisionFilter: {
                    group: ballCollisionFilterGroup,
                    mask: floorCollisionFilterGroup
                }
            });
            onAddBodies([ball]);
        };

        if(!intervalId.current) {
            intervalId.current = true
            setInterval(spawnBall, 1500);
        }

        const floor = Bodies.rectangle(width / 2, height, width, 10, {
            isStatic: true,
            render: { fillStyle: '#fbbf24' },
            collisionFilter: {
                group: floorCollisionFilterGroup,
                mask: ballCollisionFilterGroup
            }
        });

        // const car = Car({
        //     x: width/4,
        //     y: height - 30,
        //     width: radius * 2,
        //     height: radius/4,
        //     wheelSize: radius/4,
        //     wheelBase: radius * 2
        // });

        onAddBodies([floor]);

        return () => {
        };
    }, [engine, onAddBodies, radius, width, height]);

    // const handleCollision = (event) => {
    //     const pairs = event.pairs;
    //     for (let i = 0; i < pairs.length; i++) {
    //         const {bodyA, bodyB} = pairs[i];

    //         if (
    //             (bodyA === ballRef.current && bodyB === floorRef.current) ||
    //             (bodyA === floorRef.current && bodyB === ballRef.current)
    //         ) {
    //             const targetPoint = { x: 300, y: 0 };
    //             const dx = targetPoint.x - ballRef.current.position.x;
    //             const dy = targetPoint.y - ballRef.current.position.y;
    //             const distance = Math.sqrt(dx * dx + dy * dy);

    //             const forceMagnitude = 0.05;
    //             const force = {
    //                 x: (dx / distance) * forceMagnitude,
    //                 y: 0
    //             };

    //             Body.applyForce(ballRef.current, ballRef.current.position, force);
    //         }
    //     }
    // };

    // useEffect(() => {
    //     Events.on(engine.current, 'collisionStart', handleCollision);

    //     return () => {
    //         Events.off(engine.current, 'collisionStart', handleCollision);
    //     };
    // }, [engine]);

    const addPipes = (radius: number) => {
        const diameter = radius * 2;

        onAddBodies(getPipes(diameter));
    };

    return <div className="relative w-full h-screen"></div>;
}
