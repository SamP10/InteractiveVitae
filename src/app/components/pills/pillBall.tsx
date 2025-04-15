import { useEffect, useState, useRef } from 'react';
import {
    Render,
    Bodies,
    IBodyDefinition,
    Composite,
    Constraint,
    MouseConstraint,
    World
} from 'matter-js';
import { IPillBallConfig } from '../types/components';

export default function PillBall({
    pillRef,
    setDropBall,
    ballConfig: { scene, engine, width, height, onAddBodies, onSetRadius, onBallRemove }
}: IPillBallConfig) {
    const [ball, setBall] = useState<IBodyDefinition | null>(null);
    const hasRun = useRef(false);

    useEffect(() => {
        const render = Render.create({
            element: scene as HTMLDivElement,
            engine: engine,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: 'black',
                showStats: true
            }
        });

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, width, height, scene]);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        setTimeout(() => {
            if (!pillRef) return;

            const rect = pillRef.getBoundingClientRect();
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
                    fillStyle: '#4285F4'
                }
            });

            onAddBodies([circle]);

            setDropBall(true);

            setBall(circle);
        }, 300);

    }, [ball, pillRef, onSetRadius, onAddBodies, setDropBall]);

    useEffect(() => {
        if (!ball || ball.position == undefined) return;

        const intervalId = setInterval(() => {
            if (ball.position!.y > height) {
                onBallRemove();
                World.remove(
                    engine.world,
                    ball as (Composite | Matter.Body | Constraint | MouseConstraint)[]
                );
                clearInterval(intervalId);
            }
        }, 700);

        return () => clearInterval(intervalId);
    }, [ball, engine, height]);

    return <div></div>;
}
