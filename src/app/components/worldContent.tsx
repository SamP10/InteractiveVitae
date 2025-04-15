'use client';

import { useRef, useEffect, useState } from 'react';
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
import StartButton from './startButton';
import Introduction from './introduction/introduction';

enum PAGE_STATE {
    START = 'START',
    INTRO = 'INTRO',
    QUALIFICATIONS = 'QUALIFICATIONS',
    PROJECTS = 'PROJECTS'
}

export default function WorldContent() {
    const scene = useRef<HTMLDivElement>(null);
    const engine = useRef(Engine.create());
    const bodiesRef = useRef<(Composite | Body)[]>([]);
    const [currentPage, setCurrentPage] = useState(PAGE_STATE.START);
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

    const movePageState = () => {
        setCurrentPage((previousPageState) => {
            const pageStates = Object.values(PAGE_STATE);
            const currentIndex = pageStates.indexOf(previousPageState);

            if (currentIndex < pageStates.length - 1) {
                return pageStates[currentIndex + 1];
            }
            return previousPageState;
        });
    };

    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link
                href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
                rel="stylesheet"
            />
            <div ref={scene} className="absolute" />
            {currentPage === PAGE_STATE.START && (
                <StartButton
                    onAddBodies={addBodies}
                    onSetRadius={setRadius}
                    onMovePageState={movePageState}
                    width={innerWidth}
                    height={innerHeight}
                    engine={engine.current}
                    scene={scene.current}
                />
            )}
            {currentPage === PAGE_STATE.INTRO && (
                <Introduction
                    onAddBodies={addBodies}
                    radius={radius}
                    width={innerWidth}
                    height={innerHeight * 2}
                    engine={engine.current}
                    scene={scene.current}
                />
            )}
            {currentPage === PAGE_STATE.QUALIFICATIONS && <p></p>}
            {currentPage === PAGE_STATE.PROJECTS && <p></p>}
        </div>
    );
}
