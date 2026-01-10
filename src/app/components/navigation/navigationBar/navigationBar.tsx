'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import CallingCard from '../../callingCard/callingCard';
import { useInitialLoad } from '@/app/context/InitialLoadContext';
import { ANIMATION_TIMING } from '@/app/constants/animations';

export default function NavigationBar() {
    const isInitialLoad = useInitialLoad();

    const navItems = useMemo(
        () => [
            { label: 'HOME', href: '/' },
            { label: 'PROJECTS', href: '/projects' },
            { label: 'EXPERIENCE', href: '/experience' },
            { label: 'BLOG', href: '#' },
            { label: 'CONTACT', href: '#work-together' }
        ],
        []
    );

    const baseDelay = ANIMATION_TIMING.delays.navigation;
    const stagger = ANIMATION_TIMING.stagger.navigation;

    return (
        <div className="inline-flex border-b-2 border-cream pb-2 w-full">
            <CallingCard isInitialLoad={isInitialLoad} />
            <div className="flex-1 flex items-center justify-center m-auto gap-24 relative">
                {navItems.map((item, i) => {
                    const underlineDelay = baseDelay + i * stagger;
                    const textDelay = underlineDelay + ANIMATION_TIMING.delays.navTextOffset;

                    return (
                        <span key={item.label} className="inline-flex flex-col items-center relative">
                            <Link
                                className={`text-cream text-sm md:text-md lg:text-lg ${isInitialLoad ? 'animate-nav-pop-up' : ''}`}
                                href={item.href}
                                style={isInitialLoad ? { animationDelay: `${textDelay}s` } : undefined}>
                                {item.label}
                            </Link>
                            <div
                                className={`nav-underline ${isInitialLoad ? 'animate-nav-underline' : ''}`}
                                style={isInitialLoad ? { animationDelay: `${underlineDelay}s` } : undefined}
                                aria-hidden="true"
                            />
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
