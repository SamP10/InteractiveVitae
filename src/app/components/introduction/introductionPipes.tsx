'use client';

import { useEffect, useRef } from 'react';
import { IIntroductionConfig } from '../types/components';
import {
    CurvyDownPipe,
    SuperWigglyPipe,
    WigglyStraightPipe,
    CurvyHorizontalPipe,
    Horizontal1,
    Horizontal2
} from '../prefab-pipes';

export default function IntroductionPipes({
    onAddBodies,
    radius,
    width,
    height,
    engine
}: IIntroductionConfig) {
    const addedPipes = useRef(false);

    useEffect(() => {
        if (!addedPipes.current) {
            new CurvyDownPipe(
                Math.random() * width * 0.35 + width * 0.65 - 40,
                -20,
                radius,
                onAddBodies,
                {
                    windowX: width,
                    windowY: height
                }
            );
            new CurvyHorizontalPipe((Math.random() * width) / 2, -20, radius, onAddBodies, {
                windowX: width,
                windowY: height
            });
            new SuperWigglyPipe((Math.random() * width) / 2, -20, radius - 10, onAddBodies, {
                windowX: width,
                windowY: height
            });
            new WigglyStraightPipe(
                Math.random() * width * 0.25 + width * 0.75,
                -10,
                radius + 5,
                onAddBodies,
                {
                    windowX: width,
                    windowY: height
                }
            );
            new Horizontal1(
                -40,
                Math.random() * width * 0.45 + width * 0.35,
                radius - 5,
                onAddBodies,
                {
                    windowX: width,
                    windowY: height
                }
            );
            new Horizontal2(
                width + 20,
                Math.random() * width * 0.45 + width * 0.35,
                radius - 5,
                onAddBodies,
                {
                    windowX: width,
                    windowY: height
                }
            );
            addedPipes.current = true;
        }

        return () => {};
    }, [engine, onAddBodies, radius, width, height]);

    return <div className="relative w-full h-screen"></div>;
}
