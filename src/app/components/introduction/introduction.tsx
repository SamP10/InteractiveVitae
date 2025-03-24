'use client';

import { IIntroductionConfig } from '../types/components';

export default function IntroductionPipes({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
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
