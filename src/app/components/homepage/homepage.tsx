import Image from 'next/image';
import Logo from '../../assets/images/Me.png';

export default function Homepage() {
    const styleVars = {
        '--logo-top': '0rem',
        '--logo-left': '89%',
        '--sam-top': '1rem',
        '--sam-right': '15%',
        '--plant-top': '10rem',
        '--plant-left': '89%'
    } as unknown as React.CSSProperties;

    return (
        <div className="relative min-h-screen" style={styleVars}>
            <h1
                className="font-limelight text-6xl md:text-8xl lg:text-9xl tracking-[0.16em] leading-none whitespace-nowrap m-0 absolute top-[var(--sam-top)] right-[var(--sam-right)] text-border-black animate-slide-in-left opacity-0"
                style={{ color: '#00782b' }}
            >
                SAM
            </h1>

            <h1
                className="font-limelight text-6xl md:text-8xl lg:text-9xl tracking-[0.16em] leading-none whitespace-nowrap m-0 absolute top-[var(--plant-top)] left-[var(--plant-left)] vertical-rl text-border-black animate-slide-in-bottom opacity-0"
                style={{ color: '#00782b' }}
            >
                PLANT
            </h1>

            <div className="absolute z-30 drop-shadow-xl top-[var(--logo-top)] left-[var(--logo-left)]">
                <Image
                    src={Logo}
                    alt="AISP Logo"
                    width={120}
                    height={100}
                    priority
                />
            </div>
        </div>
    );
}
