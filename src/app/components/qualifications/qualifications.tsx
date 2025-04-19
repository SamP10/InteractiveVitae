'use client';

import { useEffect } from 'react';
import { Render } from 'matter-js';
import { IComponentConfig } from '../types/components';

export default function Qualifications({
    onAddBodies,
    radius,
    width,
    height,
    engine,
    scene
}: IComponentConfig) {
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
                <h1 className="text-white text-2xl font-bold">Qualifications</h1>
                <p className="text-white mt-4">
                    Here are some of my qualifications and certifications.
                </p>
            </div>
        </div>
    );
}
