import Image from 'next/image';
import Logo from '../../assets/images/Me.png';
import { SPACING, TYPOGRAPHY } from '../constants';

export default function CallingCard() {
    return (
        <div className="flex overflow-hidden">
            <div className="flex-shrink ml-6 mt-6">
                <Image
                    src={Logo}
                    alt="A cartoon characture of Sam Plant"
                    width={80}
                />
            </div>
            <div className="flex flex-col max-w-full max-h-full mt-6 ml-6">
                <u className={`text-lily-pad`}>
                    <h1
                        className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.title} animate-slide-in-right-0_8Second opacity-0 text-cream`}>
                        SAM
                    </h1>
                    <h1
                        className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.title} animate-slide-in-right-0_8Second-with_0_12s-delay leading-none text-cream opacity-0`}>
                        PLANT
                    </h1>
                </u>
                <h2
                        className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.subtitle} animate-slide-in-right-0_8Second-with_0_17s-delay leading-none text-cream opacity-0 mt-2`}>
                    Software Engineer</h2>
                <div className="flex mt-4 space-x-3">
                    <a
                        href="https://github.com/SamP10"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center text-lily-pad animate-slide-in-right-rotate-1_5Second-with_0_8s-delay opacity-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                            <path d="M12 .5C5.73.5.75 5.48.75 11.75c0 4.94 3.2 9.12 7.64 10.6.56.1.76-.24.76-.53 0-.26-.01-.95-.01-1.86-3.11.68-3.77-1.5-3.77-1.5-.51-1.3-1.25-1.65-1.25-1.65-1.02-.7.08-.69.08-.69 1.12.08 1.71 1.15 1.71 1.15 1.01 1.74 2.65 1.24 3.3.95.1-.74.39-1.24.71-1.53-2.48-.28-5.09-1.24-5.09-5.5 0-1.21.43-2.2 1.14-2.98-.12-.28-.5-1.4.11-2.92 0 0 .93-.3 3.05 1.13a10.6 10.6 0 0 1 2.78-.37c.94 0 1.9.12 2.78.36 2.12-1.44 3.05-1.13 3.05-1.13.62 1.53.24 2.64.12 2.92.71.78 1.14 1.77 1.14 2.98 0 4.27-2.62 5.21-5.11 5.49.4.35.76 1.05.76 2.12 0 1.53-.01 2.76-.01 3.14 0 .3.2.64.77.53C19.06 20.86 22.25 16.68 22.25 11.75 22.25 5.48 17.27.5 12 .5z" />
                        </svg>
                    </a>

                    <a
                        href="https://www.linkedin.com/in/sam-plant-642b05195/"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center text-lily-pad animate-slide-in-right-rotate-1_5Second-with_1_1s-delay opacity-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                            <path d="M4.98 3.5C3.88 3.5 3 4.38 3 5.48c0 1.09.88 1.97 1.98 1.97h.02C6.08 7.45 7 6.57 7 5.48 7 4.38 6.12 3.5 4.98 3.5zM3.5 8.88h3V20H3.5zM9 8.88h2.88v1.56h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.6V20h-3V14.9c0-1.23-.02-2.82-1.72-2.82-1.72 0-1.98 1.34-1.98 2.73V20H9z" />
                        </svg>
                    </a>

                    <a
                        href="mailto:sam.plant998@gmail.com"
                        aria-label="Email"
                        className={`w-8 h-8 rounded-full bg-cream flex items-center justify-center text-lily-pad animate-slide-in-right-rotate-1_5Second-with_1_4s-delay opacity-0`}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden="true">
                            <path d="M12 13.065L2.4 6.3V18c0 1.1.9 2 2 2h15.2c1.1 0 2-.9 2-2V6.3L12 13.065zM12 11L22.2 4H1.8L12 11z" />
                        </svg>
                    </a>
                </div>
            </div>
        </div>
    );
}
