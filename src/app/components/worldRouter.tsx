'use client';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StartButton from './startButton';
import Introduction from './introduction/introduction';
import Qualifications from './qualifications/qualifications';
import BackgroundPipes from './introduction/BackgroundPipes';
import { IComponentConfig } from './types/components';

export default function WorldContentInner({
    scene,
    engine,
    onAddBodies,
    onSetRadius,
    radius,
    width,
    height
}: IComponentConfig) {
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
                            onAddBodies={onAddBodies}
                            onSetRadius={onSetRadius}
                            onMovePageState={() => movePageState('/intro')}
                            radius={radius}
                            width={width}
                            height={height}
                            engine={engine}
                            scene={scene}
                        />
                    }
                />
                <Route
                    path="/intro"
                    element={
                        <Introduction
                            onAddBodies={onAddBodies}
                            radius={radius}
                            width={width}
                            height={height * 2}
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
                    onAddBodies={onAddBodies}
                    scene={scene}
                    engine={engine}
                    radius={radius}
                    width={width}
                    height={height}
                />
            )}
        </>
    );
}
