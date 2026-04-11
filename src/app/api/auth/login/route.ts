import { NextRequest, NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { createSession, getSessionCookieName } from '@/app/lib/auth';

export async function POST(request: NextRequest) {
    try {
        const { password } = await request.json();
        const passwordHash = process.env.ADMIN_PASSWORD_HASH;

        if (!passwordHash) {
            console.error('ADMIN_PASSWORD_HASH not configured');
            return NextResponse.json({ error: 'Server configuration error' }, { status: 500 });
        }

        const isValid = await bcrypt.compare(password, passwordHash);

        if (!isValid) {
            return NextResponse.json({ error: 'Invalid password' }, { status: 401 });
        }

        const token = createSession();

        const response = NextResponse.json({ success: true });
        response.cookies.set(getSessionCookieName(), token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production',
            sameSite: 'strict',
            maxAge: 24 * 60 * 60 // 24 hours
        });

        return response;
    } catch (error) {
        console.error('Login error:', error);
        return NextResponse.json({ error: 'Login failed' }, { status: 500 });
    }
}
