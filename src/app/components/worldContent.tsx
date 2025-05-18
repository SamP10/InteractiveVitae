'use client';

import { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Engine,
    World,
    Constraint,
    MouseConstraint,
    IBodyDefinition,
    Composite,
    Body
} from 'matter-js';
import { BALL_LABEL } from './constants';
import { initialiseOllama } from '../utils/ollamaIntegration';
import WorldRouter from './worldRouter';

export default function WorldContent() {
    const scene = useRef<HTMLDivElement>(null);
    const engine = useRef(Engine.create());
    const bodiesRef = useRef<(Composite | Body)[]>([]);
    const [radius, setRadius] = useState(0);

    const [{ innerHeight, innerWidth }, setInnerWidthHeight] = useState({
        innerWidth: 0,
        innerHeight: 0
    });

    const isOutOfBound = (body: IBodyDefinition) => {
        return (
            body.position &&
            (body.position.y > innerHeight * 2 + 50 ||
                body.position.x > innerWidth + 50 ||
                body.position.x < -innerWidth - 50)
        );
    };

    const cleanupOutOfBoundBalls = () => {
        bodiesRef.current = bodiesRef.current.filter((body) => {
            if (body.label === BALL_LABEL && isOutOfBound(body as IBodyDefinition)) {
                World.remove(engine.current.world, body);
                return false;
            }
            return true;
        });
    };

    useEffect(() => {
        setInnerWidthHeight({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }, []);

    useEffect(() => {
        if (!innerWidth || !innerHeight) return;

        const runner = () => {
            Engine.update(engine.current, 16);
            cleanupOutOfBoundBalls();
            requestAnimationFrame(runner);
        };

        runner();

        initialiseOllama();

        return () => {
            World.clear(engine.current.world, false);
            Engine.clear(engine.current);
        };
    }, [innerHeight, innerWidth]);

    const addBodies = (bodies: Array<Body | Composite>) => {
        bodiesRef.current.push(...bodies);
        World.add(
            engine.current.world,
            bodies as (Composite | Matter.Body | Constraint | MouseConstraint)[]
        );
    };

    return (
        <Router>
            <div>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <div ref={scene} className="absolute" />
                <WorldRouter
                    scene={scene.current}
                    engine={engine.current}
                    addBodies={addBodies}
                    setRadius={setRadius}
                    radius={radius}
                    innerWidth={innerWidth}
                    innerHeight={innerHeight}
                />
            </div>
        </Router>
    );
}
