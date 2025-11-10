'use client';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import { IComponentConfig } from './types/components';

import StartButton from './startButton';
import GetToKnowMe from './getToKnowMe/getToKnowMe';
import Qualifications from './qualifications/qualifications';
import NavigationBar from './navigation/navigationBar';
import Homepage from '../landing/landing';

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
                {/* {location.pathname !== '/' && <NavigationBar />} */}

                <Routes>
                    <Route
                        path="/"
                        element={
                            <StartButton
                                onAddBodies={onAddBodies}
                                onSetRadius={onSetRadius}
                                onMovePageState={() => movePageState('/home')}
                                radius={radius}
                                width={width}
                                height={height}
                                engine={engine}
                                scene={scene}
                            />
                        }
                    />
                    <Route
                        path="/home"
                        element={
                            <div className="flex-1 ml-40">
                                <Homepage />
                            </div>
                        }
                    />
                    <Route
                        path="/get-to-know-me"
                        element={
                            <div className="flex-1 ml-40">
                                <GetToKnowMe
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
