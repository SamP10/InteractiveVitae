'use client';

import { IStartButtonConfig } from './types/components';
import Pill from './pills/pill';

export default function StartButton({
    onAddBodies,
    onSetRadius,
    onMovePageState,
    width,
    height,
    engine,
    scene
}: IStartButtonConfig) {
    const label = 'Get to know me';

    

    return (
        <div className="flex items-center justify-center w-full h-screen">
                <Pill
                    label={label}
                    onClick={() => {}}
                    ballConfig={{
                        onAddBodies,
                        onBallRemove: onMovePageState,
                        onSetRadius,
                        width,
                        height,
                        engine,
                        scene
                    }}
                />
        </div>
    );
}
