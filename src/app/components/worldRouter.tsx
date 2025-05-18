'use client';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StartButton from './startButton';
import Introduction from './introduction/introduction';
import Qualifications from './qualifications/qualifications';
import BackgroundPipes from './introduction/BackgroundPipes';
import { AddBodiesFunction } from './types/components';
import { Engine } from 'matter-js';

export default function WorldContentInner({
    scene,
    engine,
    addBodies,
    setRadius,
    radius,
    innerWidth,
    innerHeight
}: {
    scene: React.RefObject<HTMLDivElement | null>;
    engine: React.RefObject<Engine>;
    addBodies:  typeof AddBodiesFunction;
    setRadius: React.Dispatch<React.SetStateAction<number>>;
    radius: number;
    innerWidth: number;
    innerHeight: number;
}) {
    const navigate = useNavigate();
    const location = useLocation();

    const movePageState = (route: string) => {
        navigate(route);
    };

    return (
        <>
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
                            engine={engine}
                            scene={scene}
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
                            engine={engine}
                            scene={scene}
                        />
                    }
                />
                <Route path="/qualifications" element={<Qualifications />} />
                <Route path="/projects" element={<p>Projects Page</p>} />
                <Route path="*" element={<Navigate to="/" />} />
            </Routes>
            {location.pathname !== '/' && (
                <BackgroundPipes
                    onAddBodies={addBodies}
                    scene={scene}
                    engine={engine}
                    radius={radius}
                    width={innerWidth}
                    height={innerHeight}
                />
            )}
        </>
    );
}
