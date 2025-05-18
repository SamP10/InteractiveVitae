'use client';

import { IComponentConfig } from '../types/components';
import IntroductionContent from './introductionContent';

export default function Introduction({
    onAddBodies,
    onMovePageState,
    radius,
    width,
    height,
    engine
}: IComponentConfig) {
    return (
        <div className="overflow-y-auto max-h-full">
            <div>
                <IntroductionContent
                    ballConfig={{ onAddBodies, radius, width, height, engine }}
                    onMovePageState={onMovePageState}
                />
            </div>
        </div>
    );
}
