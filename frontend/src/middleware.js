import { NextResponse } from "next/server";

export function middleware(request) {
    const token = request.cookies.get("Authorization");

    // If token is missing, redirect to login
    if (!token) {
        return NextResponse.redirect(new URL('/api/login', request.url)); // Adjust URL if login is a page
    }

    // If token exists, allow access to the page
    return NextResponse.next();
}

export const config = {
    matcher: [
        '/((?!api/login).*)', // Exclude /api/login but match all other paths
    ],
};
