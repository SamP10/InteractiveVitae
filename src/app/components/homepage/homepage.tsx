import Image from 'next/image';
import Logo from '../../assets/images/Me.png';

export default function Homepage() {
    return (
        <div className="relative min-h-screen">
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Notable&display=swap" rel="stylesheet" />
            <link href="https://fonts.googleapis.com/css2?family=Limelight&family=Notable&display=swap" rel="stylesheet"></link>

            {/* Logo positioned in top right corner */}
            <div className="fixed top-4 right-4 md:top-6 md:right-6 lg:top-8 lg:right-8 z-30 drop-shadow-xl">
                <Image
                    src={Logo}
                    alt="AISP Logo"
                    width={120}
                    height={100}
                    priority
                    className="w-auto h-16 md:h-20 lg:h-24 object-contain"
                />
            </div>

            {/* SAM text positioned to the left of logo with good margin */}
            <h1
                className="fixed font-limelight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.16em] leading-none whitespace-nowrap m-0 text-border-black animate-slide-in-left opacity-0 z-20"
                style={{ 
                    color: '#00782b',
                    top: '1rem',
                    right: '6rem'
                }}
            >
                SAM
            </h1>

            {/* PLANT text positioned vertically below the image with each letter stacked */}
            <div 
                className="fixed z-20 text-border-black animate-slide-in-bottom opacity-0"
                style={{ 
                    top: '10rem',
                    right: '1rem'
                }}
            >
                <div className="font-limelight text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-[0.16em] leading-none">
                    <div style={{ color: '#00782b' }}>P</div>
                    <div style={{ color: '#00782b' }}>L</div>
                    <div style={{ color: '#00782b' }}>A</div>
                    <div style={{ color: '#00782b' }}>N</div>
                    <div style={{ color: '#00782b' }}>T</div>
                </div>
            </div>
        </div>
    );
}
