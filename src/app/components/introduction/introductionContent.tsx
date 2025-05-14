import { useState } from 'react';
import PillContainer from '../pills/pillContainer';
import ResponseMessageTemplate from './responseMessageTemplate';
import { IBallConfig, OnMovePageState } from '../types/components';
import Pill from '../pills/pill';

export default function IntroductionContent({
    ballConfig,
    onMovePageState
}: {
    ballConfig: IBallConfig;
    onMovePageState: typeof OnMovePageState;
}) {
    const [chatComponents, setChatComponents] = useState<React.ReactNode[]>([
        <ResponseMessageTemplate key="intro-message" text={'So you want to get to know me...?'} />
    ]);

    const addChatComponent = (component: React.ReactNode) => {
        setChatComponents((prev) => [...prev, component]);
    };

    const onClick = () => {
        setTimeout(() => {
            onMovePageState();
        }, 300);
    };

    return (
        <div className="relative top-100 left-0 w-full h-full flex justify-center items-center mt-20">
            <div className="w-11/12 space-y-4">
                {chatComponents.map((Component, index) => (
                    <div key={index}>{Component}</div>
                ))}
                <PillContainer addChatComponent={addChatComponent} ballConfig={ballConfig} />
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex items-center">
                    <Pill
                        label={'Qualifications'}
                        onClick={onClick}
                        ballConfig={ballConfig}
                        svgIcon={
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 15 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6 flex"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 4l8 8-8 8V4z" />
                            </svg>
                        }
                    />
                </div>
            </div>
        </div>
    );
}
