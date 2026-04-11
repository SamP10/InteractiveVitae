'use client';

import { createContext, useContext, useState, useLayoutEffect, ReactNode } from 'react';

const STORAGE_KEY = 'nav-animated';

interface InitialLoadContextType {
    isInitialLoad: boolean;
}

const InitialLoadContext = createContext<InitialLoadContextType>({ isInitialLoad: true });

export function InitialLoadProvider({ children }: { children: ReactNode }) {
    const [isInitialLoad, setIsInitialLoad] = useState(false);

    useLayoutEffect(() => {
        const hasAnimated = sessionStorage.getItem(STORAGE_KEY);

        if (!hasAnimated) {
            sessionStorage.setItem(STORAGE_KEY, 'true');
            setIsInitialLoad(true);
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
