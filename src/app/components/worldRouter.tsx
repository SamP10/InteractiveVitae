'use client';

import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import StartButton from './startButton';
import Introduction from './introduction/introduction';
import Qualifications from './qualifications/qualifications';
import { Engine, Composite, Body } from 'matter-js';

export default function WorldRouter({
    scene,
    engine,
    addBodies,
    setRadius,
    radius,
    innerWidth,
    innerHeight
}: {
    scene: React.RefObject<HTMLDivElement | null>;
    engine:  React.RefObject<Engine>;
    addBodies: (bodies: Array<Body | Composite>) => void;
    setRadius: React.Dispatch<React.SetStateAction<number>>;
    radius: number;
    innerWidth: number;
    innerHeight: number;
}) {
    const navigate = useNavigate();

    const movePageState = (route: string) => {
        engine.current = Engine.create();
        navigate(route);
    };

    return (
        <Routes>
            <Route
                path="/"
                element={
                    <StartButton
                        onAddBodies={addBodies}
                        onSetRadius={setRadius}
                        onMovePageState={() => movePageState('/intro')}
                        width={innerWidth}
                        height={innerHeight}
                        engine={engine.current}
                        scene={scene.current}
                    />
                }
            />
            <Route
                path="/intro"
                element={
                    <Introduction
                        onAddBodies={addBodies}
                        onMovePageState={() => movePageState('/qualifications')}
                        radius={radius}
                        width={innerWidth}
                        height={innerHeight * 2}
                        engine={engine.current}
                        scene={scene.current}
                    />
                }
            />
            <Route path="/qualifications" element={<Qualifications />} />
            <Route path="/projects" element={<p>Projects Page</p>} />
            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}
