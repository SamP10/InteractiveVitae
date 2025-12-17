import { useMemo } from 'react';
import CallingCard from '../../callingCard/callingCard';

export default function NavigationBar() {
    const navItems = useMemo(() => ['HOME', 'PROJECTS', 'SKILLS', 'EXPERIENCE', 'CONTACT'], []);

    // timing should start after the calling card icons finish (last icon starts at 1.4s and runs 1.5s => ~2.9s)
    const baseDelay = 3.0; // seconds
    const stagger = 0.25; // seconds between each item

    return (
        <div className="inline-flex border-b-2 border-cream pb-2 w-full">
            <CallingCard />
            <div className="flex-1 flex items-center justify-center m-auto gap-24 relative">
                {navItems.map((label, i) => {
                    const underlineDelay = baseDelay + i * stagger;
                    const textDelay = underlineDelay + 0.3; // text pops up after underline

                    return (
                        <span key={label} className="inline-flex flex-col items-center relative">
                            <a
                                className="text-cream text-sm md:text-md lg:text-lg animate-nav-pop-up"
                                href="#"
                                style={{ animationDelay: `${textDelay}s`}}>
                                {label}
                            </a>
                            <div
                                className="nav-underline animate-nav-underline"
                                style={{ animationDelay: `${underlineDelay}s` }}
                                aria-hidden="true"
                            />
                        </span>
                    );
                })}
            </div>
        </div>
    );
}
