'use client';

import { useEffect, useRef } from 'react';
import { IComponentConfig } from '../types/components';
import {
    CurvyDownPipe,
    SuperWigglyPipe,
    WigglyStraightPipe,
    CurvyHorizontalPipe,
    Horizontal1,
    Horizontal2,
    HorizontalDown1
} from '../prefab-pipes';

export default function IntroductionPipes({
    onAddBodies,
    radius,
    width,
    height
}: IComponentConfig) {
    const addedPipes = useRef(false);
    const pipes = useRef<(CurvyDownPipe | SuperWigglyPipe | WigglyStraightPipe | CurvyHorizontalPipe | Horizontal1 | Horizontal2 | HorizontalDown1)[]>([]);

    useEffect(() => {
        if (!addedPipes.current) {
            pipes.current = [
                new CurvyDownPipe(
                    Math.random() * width * 0.35 + width * 0.65 - 40,
                    -20,
                    radius,
                    onAddBodies,
                    {
                        windowX: width,
                        windowY: height
                    }
                ),

                new CurvyHorizontalPipe((Math.random() * width) / 2, -20, radius, onAddBodies, {
                    windowX: width,
                    windowY: height
                }),

                new SuperWigglyPipe((Math.random() * width) / 2, -20, radius - 10, onAddBodies, {
                    windowX: width,
                    windowY: height
                }),

                new WigglyStraightPipe(
                    Math.random() * width * 0.25 + width * 0.75,
                    -10,
                    radius + 5,
                    onAddBodies,
                    {
                        windowX: width,
                        windowY: height
                    }
                ),

                new Horizontal1(
                    -60,
                    Math.random() * width * 0.45 + width * 0.35,
                    radius + 5,
                    onAddBodies,
                    {
                        windowX: width,
                        windowY: height
                    }
                ),

                new Horizontal2(
                    width + 30,
                    Math.random() * width * 0.45 + width * 0.35,
                    radius - 7,
                    onAddBodies,
                    {
                        windowX: width,
                        windowY: height
                    }
                ),

                new HorizontalDown1(
                    -35,
                    Math.random() * height * 0.2 + height * 0.2,
                    radius - 7,
                    onAddBodies,
                    {
                        windowX: width,
                        windowY: height
                    }
                )
            ];

            addedPipes.current = true;
            console.log('creating pipes');

            return () => {};
        }

        return () => {
            pipes.current.forEach((pipe) => {
                pipe.stopBallCreation();
            });
        };
    }, [addedPipes, height, onAddBodies, radius, width]);

    return <div></div>;
}
