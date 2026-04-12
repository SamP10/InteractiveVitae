import Image from 'next/image';
import Logo from '../../assets/images/Me.png';
import { SPACING, TYPOGRAPHY } from '../legacy/constants';

interface CallingCardProps {
    isInitialLoad: boolean;
}

export default function CallingCard({ isInitialLoad }: CallingCardProps) {
    return (
        <div className="flex">
            <div className="flex-shrink ml-6 mt-6">
                <Image src={Logo} alt="A cartoon characture of Sam Plant" width={55} />
            </div>
            <div className="flex flex-col max-w-full max-h-full mt-6 ml-6 pr-6">
                <u className={`text-moss`}>
                    <h1
                        className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.title} text-cream first-load-hidden ${isInitialLoad ? 'animate-slide-in-right-0_8Second' : ''}`}>
                        SAM
                    </h1>
                    <h1
                        className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.title} leading-none text-cream first-load-hidden ${isInitialLoad ? 'animate-slide-in-right-0_8Second-with_0_12s-delay' : ''}`}>
                        PLANT
                    </h1>
                </u>
                <h2
                    className={`${TYPOGRAPHY.fontFamilies.youngSerif} ${SPACING.textSize.subtitle} leading-none text-cream mt-2 first-load-hidden ${isInitialLoad ? 'animate-slide-in-right-0_8Second-with_0_17s-delay' : ''}`}>
                    Senior Software Engineer
                </h2>
            </div>
        </div>
    );
}
