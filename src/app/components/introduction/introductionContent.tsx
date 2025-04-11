import { useState, useEffect, useRef, useCallback } from 'react';
import OllamaInput from '../ollama/OllamaInput';
import ResponseMessageTemplate from './responseMessageTemplate';
import RequestMessageTemplate from './requestMessageTemplate';

export default function IntroductionContent() {
    const [text, setText] = useState<string[]>([]);
    const [input, setInput] = useState('');
    const [response, setResponse] = useState('');
    const hasTyped = useRef(false);
    const indexRef = useRef(0);
    const stringIndex = useRef(0);

    const typeChar = useCallback((char: string) => {
        setText((prev) => {
            const newText = [...prev];

            newText[stringIndex.current] = (newText[stringIndex.current] || '') + char;

            return newText;
        });
    }, []);

    const typeEffect = useCallback((text: string) => {
        if (indexRef.current < text.length) {
            typeChar(text[indexRef.current]);
            indexRef.current++;
            setTimeout(() => typeEffect(text), 50);
        } else {
            indexRef.current = 0;
            stringIndex.current++;
        }
    }, []);

    useEffect(() => {
        if (hasTyped.current) return;
        hasTyped.current = true;

        const actualTitle = 'So you want to get to know me...?';

        typeEffect(actualTitle);
    }, [typeEffect]);

    return (
        <div className="relative top-100 left-0 w-full h-full flex justify-center items-center mt-20">
            <div className="w-11/12 space-y-4">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap"
                    rel="stylesheet"
                />
                <ResponseMessageTemplate text={text} />
                {input && <RequestMessageTemplate text={input} />}
                {response && <ResponseMessageTemplate text={response} />}

                <OllamaInput setInput={setInput} setResponse={setResponse} />
            </div>
        </div>
    );
}
