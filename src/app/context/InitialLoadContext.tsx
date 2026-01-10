'use client';

import { createContext, useContext, useState, useEffect, ReactNode } from 'react';

const STORAGE_KEY = 'nav-animated';

interface InitialLoadContextType {
    isInitialLoad: boolean;
}

const InitialLoadContext = createContext<InitialLoadContextType>({ isInitialLoad: true });

export function InitialLoadProvider({ children }: { children: ReactNode }) {
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem(STORAGE_KEY);

        if (hasAnimated) {
            setIsInitialLoad(false);
        } else {
            sessionStorage.setItem(STORAGE_KEY, 'true');
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
