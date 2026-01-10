'use client';

import { useMemo } from 'react';
import Link from 'next/link';
import CallingCard from '../../callingCard/callingCard';
import { useInitialLoad } from '@/app/hooks/useInitialLoad';

export default function NavigationBar() {
    const isInitialLoad = useInitialLoad();

    const navItems = useMemo(
        () => [
            { label: 'HOME', href: '/' },
            { label: 'PROJECTS', href: '/projects' },
            { label: 'EXPERIENCE', href: '#' },
            { label: 'BLOG', href: '#' },
            { label: 'CONTACT', href: '#' }
        ],
        []
    );

    const baseDelay = 0.8;
    const stagger = 0.25;

    return (
        <div className="inline-flex border-b-2 border-cream pb-2 w-full">
            <CallingCard isInitialLoad={isInitialLoad} />
            <div className="flex-1 flex items-center justify-center m-auto gap-24 relative">
                {navItems.map((item, i) => {
                    const underlineDelay = baseDelay + i * stagger;
                    const textDelay = underlineDelay + 0.3;

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
