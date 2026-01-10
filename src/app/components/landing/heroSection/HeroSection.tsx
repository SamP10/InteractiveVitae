'use client';

import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { getHeroTiming } from '@/app/constants/animations';

export default function HeroSection() {
    const isInitialLoad = useInitialLoad();
    const { baseDelay, textStagger, ctaStagger } = getHeroTiming(isInitialLoad);

    const headlineWords = ['SAM', 'PLANT'];
    const tagline = 'Software Engineer';
    const valueProposition =
        'Helping Software Companies innovate during times of constant change.';

    const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-darkPine via-pine to-darkPine">
            {/* Floating background shapes */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div
                    className="absolute top-20 left-10 w-32 h-32 bg-moss/10 rounded-full blur-xl animate-floating"
                    aria-hidden="true"
                />
                <div
                    className="absolute top-40 right-20 w-48 h-48 bg-cream/5 rounded-full blur-2xl animate-floating-delayed"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-20 left-1/4 w-24 h-24 bg-moss/15 rounded-full blur-lg animate-floating-slow"
                    aria-hidden="true"
                />
                <div
                    className="absolute bottom-32 right-1/3 w-40 h-40 bg-cream/5 rounded-full blur-2xl animate-floating"
                    aria-hidden="true"
                />
            </div>

            {/* Main content */}
            <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
                {/* Animated headline */}
                <h1 className="mb-4">
                    {headlineWords.map((word, index) => (
                        <span
                            key={word}
                            className="inline-block text-6xl md:text-8xl font-limelight text-cream animate-text-reveal mx-2"
                            style={{
                                animationDelay: `${baseDelay + index * textStagger}s`
                            }}>
                            {word}
                        </span>
                    ))}
                </h1>

                {/* Tagline */}
                <p
                    className="text-xl md:text-2xl text-moss font-young-serif-regular mb-6 animate-text-reveal"
                    style={{
                        animationDelay: `${baseDelay + headlineWords.length * textStagger}s`
                    }}>
                    {tagline}
                </p>

                {/* Value proposition */}
                <p
                    className="text-lg md:text-xl text-cream/80 max-w-2xl mx-auto mb-10 animate-text-reveal"
                    style={{
                        animationDelay: `${baseDelay + (headlineWords.length + 1) * textStagger}s`
                    }}>
                    {valueProposition}
                </p>

                {/* Dual CTAs */}
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <button
                        onClick={() => scrollToSection('featured-projects')}
                        className="px-8 py-3 bg-moss text-cream font-semibold rounded-lg hover:bg-moss/90 transition-all duration-300 transform hover:scale-105 opacity-0 animate-card-fade-in"
                        style={{
                            animationDelay: `${baseDelay + (headlineWords.length + 2) * textStagger}s`
                        }}>
                        View My Work
                    </button>
                    <button
                        onClick={() => scrollToSection('work-together')}
                        className="px-8 py-3 border-2 border-cream text-cream font-semibold rounded-lg hover:bg-cream hover:text-darkPine transition-all duration-300 transform hover:scale-105 opacity-0 animate-card-fade-in"
                        style={{
                            animationDelay: `${baseDelay + (headlineWords.length + 2) * textStagger + ctaStagger}s`
                        }}>
                        Let&apos;s Talk
                    </button>
                </div>
            </div>

            {/* Scroll indicator */}
            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-card-fade-in"
                style={{
                    animationDelay: `${baseDelay + (headlineWords.length + 3) * textStagger}s`
                }}>
                <div className="w-6 h-10 border-2 border-cream/50 rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-cream/50 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
}
