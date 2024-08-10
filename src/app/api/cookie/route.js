import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const cookieStore = cookies();
    cookieStore.set({
        name: 'userToken',
        maxAge: 1000,
        path: '/',
        expires: Date() * 1,
    });
    return NextResponse.json({ message: 'this is message' });
}
