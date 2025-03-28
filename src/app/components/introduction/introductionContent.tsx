import { useState, useEffect, useRef, useCallback } from 'react';

export default function IntroductionContent() {
    const [title, setTitle] = useState("");
    const hasTyped = useRef(false);
    const indexRef = useRef(0);

    const typeEffect = useCallback((text: string) => {
        if (indexRef.current < text.length -1) {
            setTitle((prev) => prev += text[indexRef.current]);
            indexRef.current++;
            setTimeout(() => typeEffect(text), 50);
        } else {
            indexRef.current = 0;
        }
    }, []);

    useEffect(() => {
        if (hasTyped.current) return;
        hasTyped.current = true;

        const actualTitle = "Soo you want to get to know me...?";


        typeEffect(actualTitle);
    }, [typeEffect]);

    return (
        <div className="relative top-100 left-0 w-full h-full flex justify-center items-center mt-20">
            <div className="space-y-4">
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" />
                <link href="https://fonts.googleapis.com/css2?family=Doto:wght@100..900&display=swap" rel="stylesheet" />

                <div className="p-5 rounded-lg max-w-6xl text-left" style={{ fontFamily: 'Doto', fontSize: 30, color: 'white', backgroundColor: 'rgba(80, 80, 80, 0.7)', fontWeight: 900 }}>
                    <p>
                        <i>{title}</i>
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
                <div className="p-5 rounded-lg max-w-6xl text-center" style={{ backgroundColor: 'rgba(80, 80, 80, 0.7)', color: 'white' }}>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    </p>
                </div>
            </div>
        </div>
    );
}