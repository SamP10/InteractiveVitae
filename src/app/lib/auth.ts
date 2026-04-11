import { randomUUID } from 'crypto';

const SESSION_COOKIE = 'admin_session';
const SESSION_DURATION = 24 * 60 * 60 * 1000; // 24 hours

// In-memory session store (simple approach for single-user admin)
let activeSession: { token: string; expires: number } | null = null;

export function createSession(): string {
    const token = randomUUID();
    activeSession = {
        token,
        expires: Date.now() + SESSION_DURATION
    };
    return token;
}

export function validateSession(token: string): boolean {
    if (!activeSession) return false;
    if (activeSession.token !== token) return false;
    if (Date.now() > activeSession.expires) {
        activeSession = null;
        return false;
    }
    return true;
}

export function clearSession(): void {
    activeSession = null;
}

export function getSessionCookieName(): string {
    return SESSION_COOKIE;
}
