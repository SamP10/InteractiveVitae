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

    useEffect(() => {
        const render = Render.create({
            element: scene as HTMLDivElement,
            engine: engine,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: 'black'
            }
        });

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, scene, width, height]);

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
