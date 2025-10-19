import { NextResponse } from 'next/server'

export function middleware(request) {
    // Firebase Auth uses __session cookie, not authToken
    const session = request.cookies.get('__session')
    
    if (!session) {
        return NextResponse.redirect(new URL('/login', request.url))
    }
    
    return NextResponse.next()
}

export const config = {
    matcher: ['/dashboard/:path*', '/create/:path*']
}