import { NextRequest, NextResponse } from 'next/server';
import { validateSession, getSessionCookieName } from '@/app/lib/auth';

export async function GET(request: NextRequest) {
    const token = request.cookies.get(getSessionCookieName())?.value;

    if (!token) {
        return NextResponse.json({ authenticated: false });
    }

    const isValid = validateSession(token);

    return NextResponse.json({ authenticated: isValid });
}
