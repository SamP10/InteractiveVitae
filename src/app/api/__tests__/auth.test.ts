/**
 * @jest-environment node
 */
import { POST as loginHandler } from '../auth/login/route';
import { POST as logoutHandler } from '../auth/logout/route';
import { GET as verifyHandler } from '../auth/verify/route';
import { NextRequest } from 'next/server';

jest.mock('bcrypt', () => ({
    compare: jest.fn()
}));
jest.mock('@/app/lib/auth', () => ({
    createSession: jest.fn(() => 'mock-token-123'),
    clearSession: jest.fn(),
    validateSession: jest.fn(),
    getSessionCookieName: jest.fn(() => 'admin_session')
}));

import bcrypt from 'bcrypt';
import { createSession, clearSession, validateSession } from '@/app/lib/auth';

function cookieHeader(cookies: Record<string, string>): Record<string, string> {
    const header = Object.entries(cookies).map(([k, v]) => `${k}=${v}`).join('; ');
    return header ? { Cookie: header } : {};
}

function makeRequest(body: unknown, cookies: Record<string, string> = {}): NextRequest {
    return new NextRequest('http://localhost/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...cookieHeader(cookies) },
        body: JSON.stringify(body)
    });
}

function makeGetRequest(cookies: Record<string, string> = {}): NextRequest {
    return new NextRequest('http://localhost/api/auth/verify', {
        headers: cookieHeader(cookies)
    });
}

describe('POST /api/auth/login', () => {
    beforeEach(() => {
        jest.clearAllMocks();
        process.env.ADMIN_PASSWORD_HASH = '$2b$10$hashedpassword';
    });

    test('returns 200 and success on valid credentials', async () => {
        // Given
        (bcrypt.compare as jest.Mock).mockResolvedValueOnce(true);

        // When
        const response = await loginHandler(makeRequest({ password: 'correct' }));
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.success).toBe(true);
    });

    test('returns 401 on invalid credentials', async () => {
        // Given
        (bcrypt.compare as jest.Mock).mockResolvedValueOnce(false);

        // When
        const response = await loginHandler(makeRequest({ password: 'wrong' }));
        const body = await response.json();

        // Then
        expect(response.status).toBe(401);
        expect(body.error).toBe('Invalid password');
    });

    test('returns 500 when ADMIN_PASSWORD_HASH is not set', async () => {
        // Given
        delete process.env.ADMIN_PASSWORD_HASH;

        // When
        const response = await loginHandler(makeRequest({ password: 'any' }));
        const body = await response.json();

        // Then
        expect(response.status).toBe(500);
    });
});

describe('POST /api/auth/logout', () => {
    test('returns 200 and clears session', async () => {
        // Given / When
        const response = await logoutHandler();
        const body = await response.json();

        // Then
        expect(response.status).toBe(200);
        expect(body.success).toBe(true);
        expect(clearSession).toHaveBeenCalled();
    });
});

describe('GET /api/auth/verify', () => {
    test('returns authenticated=false when no cookie present', async () => {
        // Given / When
        const response = await verifyHandler(makeGetRequest());
        const body = await response.json();

        // Then
        expect(body.authenticated).toBe(false);
    });

    test('returns authenticated=true for a valid token', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(true);

        // When
        const response = await verifyHandler(makeGetRequest({ admin_session: 'valid-token' }));
        const body = await response.json();

        // Then
        expect(body.authenticated).toBe(true);
    });

    test('returns authenticated=false for an invalid token', async () => {
        // Given
        (validateSession as jest.Mock).mockReturnValueOnce(false);

        // When
        const response = await verifyHandler(makeGetRequest({ admin_session: 'bad-token' }));
        const body = await response.json();

        // Then
        expect(body.authenticated).toBe(false);
    });
});
