'use client';

import { useEffect, useRef } from 'react';
import { IIntroductionConfig } from '../types/components';
import {
    CurvyDownPipe,
    SuperWigglyPipe,
    WigglyStraightPipe,
    CurvyHorizontalPipe
} from '../prefab-pipes';

export default function Introduction({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
    const addedPipes = useRef(false);

    useEffect(() => {
        if (!addedPipes.current) {
            new CurvyDownPipe(Math.random() * width, -20, radius, onAddBodies, { windowX: width, windowY: height });
            new CurvyHorizontalPipe(Math.random() * width/2, -20, radius, onAddBodies, {
                windowX: width,
                windowY: height
            });
            new SuperWigglyPipe(Math.random() * width, -20, radius - 10, onAddBodies, {
                windowX: width,
                windowY: height
            });
            new WigglyStraightPipe(Math.random() * width * 0.25 + width * 0.75, -10, radius + 5, onAddBodies, {
                windowX: width,
                windowY: height
            });
            addedPipes.current = true;
        }

        return () => {};
    }, [engine, onAddBodies, radius, width, height]);

    return <div className="relative w-full h-screen"></div>;
}
