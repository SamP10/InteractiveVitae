'use client';

import { useRef, useEffect, useState } from 'react';
import { Engine, Render, World, Bodies } from 'matter-js';
import { BALL_LABEL } from './constants';
import StartButton from './startButton';
import Introduction from './introduction/introductionPipes';

enum PAGE_STATE {
    START = 'START',
    INTRO = 'INTRO',
    QUALIFICATIONS = 'QUALIFICATIONS',
    PROJECTS = 'PROJECTS'
}

export default function WorldContent() {
    const scene = useRef(null);
    const engine = useRef(Engine.create());
    const bodiesRef = useRef([]);
    const [currentPage, setCurrentPage] = useState(PAGE_STATE.START);
    const [radius, setRadius] = useState(0);

    const [{ innerHeight, innerWidth }, setInnerWidthHeight] = useState({
        innerWidth: 0,
        innerHeight: 0
    });

    useEffect(() => {
        setInnerWidthHeight({ innerWidth: window.innerWidth, innerHeight: window.innerHeight });
    }, []);

    useEffect(() => {
        if (!innerWidth || !innerHeight) return;

        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: innerWidth,
                height: innerHeight,
                wireframes: false,
                background: 'transparent'
            }
        });

        Render.run(render);

        const runner = () => {
            Engine.update(engine.current, 16);
            cleanupOutOfBoundBalls();
            requestAnimationFrame(runner);
        };

        runner();

        return () => {
            Render.stop(render);
            World.clear(engine.current.world, false);
            Engine.clear(engine.current);
            render.canvas.remove();
        };
    }, [innerHeight, innerWidth]);

    const addBodies = (bodies: Bodies[]) => {
        bodiesRef.current.push(...bodies);
        World.add(engine.current.world, bodies);
    };

    const cleanupOutOfBoundBalls = () => {
        bodiesRef.current = bodiesRef.current.filter((body) => {
            if (
                body.label === BALL_LABEL &&
                body.position.y > innerHeight + 50 &&
                body.position.x > innerWidth + 50
            ) {
                World.remove(engine.current.world, body);
                return false;
            }
            return true;
        });
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
        <div style={{ backgroundColor: 'black', width: '100%', height: '100vh' }}>
            <div ref={scene} className="absolute inset-0 z-0" />
            {currentPage === PAGE_STATE.START && (
                <StartButton
                    onAddBodies={addBodies}
                    onSetRadius={setRadius}
                    onMovePageState={movePageState}
                />
            )}
            {currentPage === PAGE_STATE.INTRO && (
                <Introduction
                    onAddBodies={addBodies}
                    radius={radius}
                    width={innerWidth}
                    height={innerHeight}
                    engine={engine}
                />
            )}
            {currentPage === PAGE_STATE.QUALIFICATIONS && <p></p>}
            {currentPage === PAGE_STATE.PROJECTS && <p></p>}
        </div>
    );
}
