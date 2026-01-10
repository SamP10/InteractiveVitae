'use client';

import { ReactNode } from 'react';
import { InitialLoadProvider } from '@/app/context/InitialLoadContext';

export default function Providers({ children }: { children: ReactNode }) {
    return <InitialLoadProvider>{children}</InitialLoadProvider>;
}
