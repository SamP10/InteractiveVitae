'use client';

import { IComponentConfig } from '../types/components';
import IntroductionContent from './introductionContent';

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
            <div>
                <IntroductionContent ballConfig={{ onAddBodies, radius, width, height, engine, onSetRadius: () => {}, scene }} />
            </div>
        </div>
    );
}
