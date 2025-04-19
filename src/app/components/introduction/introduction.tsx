'use client';

import { useEffect } from 'react';
import { IIntroductionConfig } from '../types/components';
import { Render } from 'matter-js';
import IntroductionPipes from './introductionPipes';
import IntroductionContent from './introductionContent';

export default function Introduction({
    onAddBodies,
    onMovePageState,
    radius,
    width,
    height,
    engine,
    scene
}: IIntroductionConfig) {
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
        <div className="overflow-y-auto max-h-full">
            <div>
                <IntroductionPipes
                    onAddBodies={onAddBodies}
                    radius={radius}
                    width={width}
                    height={height}
                    engine={engine}
                />
                <IntroductionContent
                    ballConfig={{ onAddBodies, radius, width, height, engine }}
                    onMovePageState={onMovePageState}
                />
            </div>
        </div>
    );
}
