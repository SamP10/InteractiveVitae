'use client';

import { useNavigate, useLocation } from 'react-router-dom';
import { IComponentConfig } from './types/components';
import Pill from './pills/pill';

export default function NavigationBar({
    scene,
    engine,
    onAddBodies,
    onSetRadius,
    width,
    height
}: IComponentConfig) {
    const navigate = useNavigate();
    const location = useLocation();

    // Do not render the navigation bar on the start page
    if (location.pathname === '/') {
        return null;
    }

    return (
        <div className="fixed top-0 left-0 w-full bg-purple-800 bg-opacity-90 text-white flex justify-center p-4 z-50">
            <Pill
            label={'Home'}
            onClick={() => {}}
            ballConfig={{
                onAddBodies,
                onBallRemove: () => navigate('/'),
                onSetRadius,
                width,
                height,
                engine,
                scene
            }}
            />
            <Pill
            label={'Introduction'}
            onClick={() => {}}
            ballConfig={{
                onAddBodies,
                onBallRemove: () => navigate('/intro'),
                onSetRadius,
                width,
                height,
                engine,
                scene
            }}
            />
           <Pill
            label={'Qualifications'}
            onClick={() => {}}
            ballConfig={{
                onAddBodies,
                onBallRemove: () => navigate('/qualifications'),
                onSetRadius,
                width,
                height,
                engine,
                scene
            }}
            />
           <Pill
            label={'Projects'}
            onClick={() => {}}
            ballConfig={{
                onAddBodies,
                onBallRemove: () => navigate('/projects'),
                onSetRadius,
                width,
                height,
                engine,
                scene
            }}
            />
        </div>
    );
}
