'use client';

import { IComponentConfig } from '../types/components';

import IntroductionContent from './introductionContent';
import BackgroundPipes from './backgroundPipes';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine,
    scene
}: IComponentConfig) {
    return (
        <div className="overflow-y-auto max-h-full">
            <IntroductionContent
                ballConfig={{
                    onAddBodies,
                    radius,
                    width,
                    height,
                    engine,
                    onSetRadius: () => {},
                    scene
                }}
            />
            <BackgroundPipes
                onAddBodies={onAddBodies}
                scene={scene}
                engine={engine}
                radius={radius}
                width={width}
                height={height}
            />
        </div>
    );
}
