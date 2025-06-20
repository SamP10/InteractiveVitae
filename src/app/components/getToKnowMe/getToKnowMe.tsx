import { IComponentConfig } from '../types/components';

import GetToKnowMeContent from './getToKnowMeContent';
import BackgroundPipes from './backgroundPipes';

export default function GetToKnowMe({
    onAddBodies,
    radius,
    width,
    height,
    engine,
    scene
}: IComponentConfig) {
    return (
        <div className="overflow-y-auto max-h-full">
            <GetToKnowMeContent
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
