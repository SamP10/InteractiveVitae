'use client';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StartButton from './startButton';
import Introduction from './introduction/introduction';
import Qualifications from './qualifications/qualifications';
import { IComponentConfig } from './types/components';
import NavigationBar from './navigation/navigationBar';

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
            <div className="flex">
                {location.pathname !== '/' && <NavigationBar />}

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
                                <div className="flex-1 ml-40">
                                    <Introduction
                                        onAddBodies={onAddBodies}
                                        radius={radius}
                                        width={width}
                                        height={height}
                                        engine={engine}
                                        scene={scene}
                                    />
                                </div>
                            }
                        />
                        <Route
                            path="/qualifications"
                            element={
                                <div className="flex-1 ml-40">
                                    <Qualifications />
                                </div>
                            }
                        />
                        <Route
                            path="/projects"
                            element={
                                <div className="flex-1 ml-40">
                                    <p>Projects Page</p>
                                </div>
                            }
                        />
                        <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    );
}
