'use client';

import { useEffect, useRef } from 'react';
import CurveyHorizontalPipe from '../prefab-pipes/curvyHorizontalPipe';
import { IIntroductionConfig } from '../types/Components';
import CurvyDownPipe from '../prefab-pipes/curvyDownPipe';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
    const addedPipes = useRef(false);

    useEffect(() => {
        if(!addedPipes.current) {
            new CurvyDownPipe(100, -20, radius, onAddBodies);
            new CurveyHorizontalPipe(300, -20, radius, onAddBodies);
            addedPipes.current = true;
        }

            // const floor = Bodies.rectangle(width / 2, height, width, 10, {
            //     isStatic: true,
            //     render: { fillStyle: '#EAB308' },
            //     collisionFilter: {
            //         group: floorCollisionFilterGroup,
            //         mask: ballCollisionFilterGroup
            //     }
            // });

            // const car = Car({
            //     x: width / 4,
            //     y: height - 30,
            //     width: radius * 2,
            //     height: radius / 4,
            //     wheelSize: radius / 4,
            //     wheelBase: radius * 2
            // });

            // onAddBodies([floor]);

        return () => {};
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

    // const addPipes = (radius: number) => {
    //     const diameter = radius * 2;

    //     onAddBodies([getPipes(diameter)]);
    // };

    return <div className="relative w-full h-screen"></div>;
}
