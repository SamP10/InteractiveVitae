'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BlogPostForm from './components/BlogPostForm';

export default function AdminDashboardPage() {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch('/api/auth/verify');
                const data = await res.json();
                if (!data.authenticated) {
                    router.replace('/portal');
                } else {
                    setIsAuthenticated(true);
                }
            } catch {
                router.replace('/portal');
            }
            setIsLoading(false);
        }
        checkAuth();
    }, [router]);

    const handleLogout = async () => {
        await fetch('/api/auth/logout', { method: 'POST' });
        router.push('/portal');
    };

    if (isLoading || !isAuthenticated) {
        return (
            <div className="min-h-screen bg-pine flex items-center justify-center">
                <span className="text-cream">Loading...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pine">
            <header className="bg-darkPine p-4 flex justify-between items-center">
                <h1 className="text-cream text-xl font-bold">Admin Dashboard</h1>
                <button
                    onClick={handleLogout}
                    className="text-cream hover:text-moss transition-colors px-4 py-2"
                >
                    Logout
                </button>
            </header>

            <main className="p-6 max-w-4xl mx-auto">
                <BlogPostForm />
            </main>
        </div>
    );
}
