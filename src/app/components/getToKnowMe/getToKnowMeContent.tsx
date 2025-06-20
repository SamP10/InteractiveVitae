import { useState } from 'react';
import ResponseMessageTemplate from './responseMessageTemplate';
import { IBallConfig } from '../types/components';
import OllamaInput from './ollamaInput';

export default function GetToKnowMeContent({ ballConfig }: { ballConfig: IBallConfig }) {
    const [chatComponents, setChatComponents] = useState<React.ReactNode[]>([
        <ResponseMessageTemplate key="intro-message" text={'So you want to get to know me...?'} />
    ]);

    const addChatComponent = (component: React.ReactNode) => {
        setChatComponents((prev) => [...prev, component]);
    };

    return (
        <div className="relative w-full h-full flex flex-col items-center mt-20">
            <div className="w-11/12 space-y-4 mb-20">
                {chatComponents.map((Component, index) => (
                    <div key={index}>{Component}</div>
                ))}
            </div>
            <OllamaInput addChatComponent={addChatComponent} ballConfig={ballConfig} />
        </div>
    );
}
