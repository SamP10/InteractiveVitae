import { useState } from 'react';
import OllamaInput from '../ollama/OllamaInput';
import ResponseMessageTemplate from './responseMessageTemplate';
import RequestMessageTemplate from './requestMessageTemplate';


export default function IntroductionContent() {
    const [chatComponents, setChatComponents] = useState<typeof ResponseMessageTemplate[]|
    typeof RequestMessageTemplate[]>([
        <ResponseMessageTemplate key="intro-message" text={'So you want to get to know me...?'} />
    ]);

    const addChatComponent = (component: typeof ResponseMessageTemplate|
        typeof RequestMessageTemplate) => {
        setChatComponents((prev) => [...prev, component]);
    };

    return (
        <div className="relative top-100 left-0 w-full h-full flex justify-center items-center mt-20">
            <div className="w-11/12 space-y-4">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                {chatComponents.map((Component, index) => (
                    <div key={index}>
                        {Component}
                    </div>
                ))}
                <OllamaInput addChatComponent={addChatComponent}/>
            </div>
        </div>
    );
}
