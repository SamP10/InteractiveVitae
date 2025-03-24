'use client';

import { useEffect } from 'react';
import { IIntroductionConfig } from '../types/components';
import { Render } from 'matter-js';
import IntroductionPipes from './introductionPipes';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine,
    scene
}: IIntroductionConfig) {
    useEffect(() => {
        const render = Render.create({
            element: scene.current,
            engine: engine.current,
            options: {
                width: width,
                height: height,
                wireframes: false,
                background: 'black',
                showStats:true
            }
        });

        Render.run(render);

        return () => {
            Render.stop(render);
            render.canvas.remove();
        };
    }, [engine, scene, width, height]);

    return (
        <IntroductionPipes
            onAddBodies={onAddBodies}
            radius={radius}
            width={width}
            height={height}
            engine={engine}
        />
    );
}
