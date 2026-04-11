'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function PortalLoginPage() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isCheckingAuth, setIsCheckingAuth] = useState(true);
    const router = useRouter();

    useEffect(() => {
        async function checkAuth() {
            try {
                const res = await fetch('/api/auth/verify');
                const data = await res.json();
                if (data.authenticated) {
                    router.replace('/portal/admin');
                }
            } catch {
                // Ignore errors - just show login
            }
            setIsCheckingAuth(false);
        }
        checkAuth();
    }, [router]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            const res = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ password })
            });

            if (res.ok) {
                router.push('/portal/admin');
            } else {
                const data = await res.json();
                setError(data.error || 'Invalid password');
            }
        } catch {
            setError('Network error. Please try again.');
        }

        setIsLoading(false);
    };

    if (isCheckingAuth) {
        return (
            <div className="min-h-screen bg-pine flex items-center justify-center">
                <span className="text-cream">Loading...</span>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-pine flex items-center justify-center p-4">
            <form onSubmit={handleSubmit} className="bg-cream p-8 rounded-lg max-w-md w-full">
                <h1 className="text-2xl text-darkPine font-bold mb-6">Admin Portal</h1>

                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>
                )}

                <div className="mb-4">
                    <label htmlFor="password" className="block text-darkPine font-medium mb-2">
                        Password
                    </label>
                    <input
                        id="password"
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Enter password"
                        className="w-full px-4 py-3 border border-pine rounded-lg text-darkPine focus:outline-none focus:border-moss focus:ring-2 focus:ring-moss"
                        disabled={isLoading}
                        autoFocus
                    />
                </div>

                <button
                    type="submit"
                    disabled={isLoading || !password}
                    className="w-full bg-moss text-cream py-3 rounded-lg hover:bg-pine transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isLoading ? 'Signing in...' : 'Sign In'}
                </button>
            </form>
        </div>
    );
}
