import Image from 'next/image';
import Logo from '../../assets/images/Me.png';
import { SPACING, TYPOGRAPHY } from '../legacy/constants';

export default function CallingCard() {
    return (
        <div className="flex">
            <div className="flex-shrink ml-6 mt-6">
                <Image src={Logo} alt="A cartoon characture of Sam Plant" width={55} />
            </div>
            <div className="flex flex-col max-w-full max-h-full mt-6 ml-6 pr-6">
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
                    Software Engineer
                </h2>
            </div>
        </div>
    );
}
