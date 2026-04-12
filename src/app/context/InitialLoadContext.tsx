'use client';

import { createContext, useContext, useState, useLayoutEffect, ReactNode } from 'react';

const STORAGE_KEY = 'nav-animated';

interface InitialLoadContextType {
    isInitialLoad: boolean;
}

const InitialLoadContext = createContext<InitialLoadContextType>({ isInitialLoad: true });

export function InitialLoadProvider({ children }: { children: ReactNode }) {
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useLayoutEffect(() => {
        if (document.documentElement.hasAttribute('data-skip-animations')) {
            setIsInitialLoad(false);
        } else {
            // Flip to false once all first-load animations have completed.
            // Longest initial delay is workTogether at 3.4s + ~0.8s animation = ~4.2s.
            const timer = setTimeout(() => setIsInitialLoad(false), 4500);
            return () => clearTimeout(timer);
        }
    }, []);

    return (
        <InitialLoadContext.Provider value={{ isInitialLoad }}>
            {children}
        </InitialLoadContext.Provider>
    );
}

export function useInitialLoad(): boolean {
    const context = useContext(InitialLoadContext);
    return context.isInitialLoad;
}
