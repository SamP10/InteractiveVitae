import { useState } from 'react';
import PillContainer from '../pills/pillContainer';
import ResponseMessageTemplate from './responseMessageTemplate';
import { IBallConfig } from '../types/components';

export default function IntroductionContent({
    ballConfig
}: {
    ballConfig: IBallConfig;
}) {
    const [chatComponents, setChatComponents] = useState<React.ReactNode[]>([
        <ResponseMessageTemplate key="intro-message" text={'So you want to get to know me...?'} />
    ]);

    const addChatComponent = (component: React.ReactNode) => {
        setChatComponents((prev) => [...prev, component]);
    };

    return (
        <div className="relative top-100 left-0 w-full h-full flex justify-center items-center mt-20">
            <div className="w-11/12 space-y-4">
                {chatComponents.map((Component, index) => (
                    <div key={index}>{Component}</div>
                ))}
                <PillContainer addChatComponent={addChatComponent} ballConfig={ballConfig} />
            </div>
        </div>
    );
}
