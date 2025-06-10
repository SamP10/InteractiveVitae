'use client';

import { IComponentConfig } from './types/components';
import { useEffect } from 'react';
import {
    Render
} from 'matter-js';

import Pill from './pills/pill';

export default function StartButton({
    onAddBodies,
    onSetRadius,
    onMovePageState,
    width,
    height,
    engine,
    scene
}: IComponentConfig) {
    const label = 'Get to know me';

    return (
        <div className="flex items-center justify-center w-full h-screen">
                <Pill
                    label={label}
                    onClick={() => {}}
                    ballConfig={{
                        onAddBodies,
                        onBallRemove: onMovePageState,
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
