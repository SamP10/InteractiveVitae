import { useEffect, useState, useRef } from 'react';
import {
    Bodies,
    IBodyDefinition,
    Composite,
    Constraint,
    MouseConstraint,
    World
} from 'matter-js';
import { IPillBallConfig } from '../types/components';
import { Render } from 'matter-js';

export default function PillBall({
    pillRef,
    setDropBall,
    ballConfig: { engine,  width, height, onAddBodies, onSetRadius, radius, scene, onBallRemove }
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
                background: 'black'
            }
        });

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, scene, width, height]);

    useEffect(() => {
        if (hasRun.current) return;
        hasRun.current = true;

        setTimeout(() => {
            if (!pillRef) return;

            const rect = pillRef.getBoundingClientRect();
            const cx = rect.left + rect.width / 2;
            const cy = rect.top + rect.height / 2;

            let calculatedRadius = 15;
            if(!radius) {
                if (window.innerWidth < 768) {
                    calculatedRadius = 15;
                } else {
                    calculatedRadius = rect.width / 2;
                }
                onSetRadius(calculatedRadius);
            }


            const circle = Bodies.circle(cx, cy, radius ?? calculatedRadius, {
                restitution: 0.9,
                friction: 0.005,
                render: {
                    fillStyle: '#16A34A'
                }
            });

            onAddBodies([circle]);

            setDropBall(true);

            setBall(circle);
        }, 300);

    }, []);

    useEffect(() => {
        if (!ball || ball.position == undefined) return;

        const intervalId = setInterval(() => {
            if (ball.position!.y > height) {
                World.remove(
                    engine.world,
                    ball as (Composite | Matter.Body | Constraint | MouseConstraint)[]
                );
                clearInterval(intervalId);
                onBallRemove();
            }
        }, 700);

        return () => clearInterval(intervalId);
    }, [ball, engine, height]);

    return <div></div>;
}
