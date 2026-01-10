'use client';

import Image from 'next/image';
import Logo from '../../assets/images/Logo.png';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getContentTiming } from '@/app/constants/animations';

export default function Landing() {
    const isInitialLoad = useInitialLoad();

    const { baseDelay, stagger, animationClass } = getContentTiming(isInitialLoad);

    return (
        <div className="m-4 flex items-center justify-center flex-col gap-12 flex-1">
            <main
                className={`flex justify-center bg-cream text-darkPine w-4/5 rounded-lg p-8 ${animationClass}`}
                style={{ animationDelay: `${baseDelay}s` }}>
                <Image
                    src={Logo}
                    alt="Hero Image"
                    width={100}
                    height={100}
                    className="flex display inline"
                />
                <h2 className="text-3xl font-bold">
                    &quot;Helping Software Companies to innovate during times of constant
                    change.&quot;
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;-{' '}
                    <i>Myself</i>
                </h2>
                <p>
                    Passionate developer, creative problem solver, and lifelong learner. I
                    specialize in building innovative solutions that bridge the gap between
                    technology and user experience.
                </p>
            </main>
            <article
                className={`flex justify-center bg-cream text-darkPine w-4/5 rounded-lg p-8 ${animationClass}`}
                style={{ animationDelay: `${baseDelay + stagger}s` }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </article>
            <div
                className={`flex gap-4 ${animationClass}`}
                style={{ animationDelay: `${baseDelay + stagger * 2}s` }}>
                {['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go', 'Ruby', 'PHP'].map(
                    (language) => (
                        <div
                            key={language}
                            className="bg-darkPine text-cream px-4 py-2 rounded-md text-sm font-medium">
                            {language}
                        </div>
                    )
                )}
            </div>
        </div>
    );
}
