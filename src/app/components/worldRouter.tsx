'use client';

import { Routes, Route, Navigate, useNavigate, useLocation } from 'react-router-dom';
import StartButton from './startButton';
import GetToKnowMe from './getToKnowMe/getToKnowMe';
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
                                <div className="bg-gray-100 p-8 rounded-lg shadow-md">
                                    <h1 className="text-4xl font-bold text-blue-600 mb-4">
                                        Welcome to My Professional Portfolio
                                    </h1>
                                    <p className="text-lg text-gray-700 mb-6">
                                        Explore my qualifications, projects, and get to know me better.
                                    </p>
                                    <div className="flex space-x-4">
                                        <button
                                            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
                                            onClick={() => navigate('/get-to-know-me')}
                                        >
                                            Get to Know Me
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
                                            onClick={() => navigate('/qualifications')}
                                        >
                                            Qualifications
                                        </button>
                                        <button
                                            className="px-4 py-2 bg-purple-600 text-white rounded hover:bg-purple-700"
                                            onClick={() => navigate('/projects')}
                                        >
                                            Projects
                                        </button>
                                    </div>
                                </div>
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
