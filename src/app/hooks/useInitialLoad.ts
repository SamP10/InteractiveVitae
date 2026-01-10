'use client';

import { useState, useEffect } from 'react';

const STORAGE_KEY = 'nav-animated';

export function useInitialLoad(): boolean {
    const [isInitialLoad, setIsInitialLoad] = useState(true);

    useEffect(() => {
        const hasAnimated = sessionStorage.getItem(STORAGE_KEY);

        if (hasAnimated) {
            setIsInitialLoad(false);
        } else {
            sessionStorage.setItem(STORAGE_KEY, 'true');
        }
    }, []);

    return isInitialLoad;
}
