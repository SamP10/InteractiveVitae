import { NextResponse } from 'next/server';
import { clearSession, getSessionCookieName } from '@/app/lib/auth';

export async function POST() {
    clearSession();

    const response = NextResponse.json({ success: true });
    response.cookies.delete(getSessionCookieName());

    return response;
}
