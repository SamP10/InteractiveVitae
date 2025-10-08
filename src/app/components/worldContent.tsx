'use client';
import { useRef, useEffect, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import {
    Engine,
    Render,
    World,
    Constraint,
    MouseConstraint,
    IBodyDefinition,
    Composite,
    Body
} from 'matter-js';
import { BALL_LABEL } from './constants';
import { initialiseOllama } from '../utils/ollamaIntegration';
import retroBg from '../assets/images/Background.png';

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

    useEffect(() => {
        if (!scene.current) return;

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: innerWidth,
                height: innerHeight,
                wireframes: false,
                background: `url(${retroBg.src})`
            }
        });

        render.canvas.style.backgroundSize = 'cover';
        render.canvas.style.backgroundPosition = 'center';
        render.canvas.style.backgroundRepeat = 'no-repeat';

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, scene, innerWidth, innerHeight]);

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
        <div className="bg-white text-white h-screen">
            <Router>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Limelight&family=Notable&display=swap" rel="stylesheet"></link>

                <div ref={scene} className="absolute" />
                <WorldRouter
                    scene={scene.current}
                    engine={engine.current}
                    onAddBodies={addBodies}
                    onSetRadius={setRadius}
                    radius={radius}
                    width={innerWidth}
                    height={innerHeight}
                />
            </Router>
        </div>
    );
}
