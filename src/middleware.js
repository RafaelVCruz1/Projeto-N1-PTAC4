'use server'
import { NextResponse } from "next/server";
import { validateToken } from "./app/functions/validateToken";
import Dashboard from "./app/pages/dashboard/page";

export const middleware = (request) => {

    const token = request.cookies.get('token')?.value;
    const urlLogin = new URL('/', request.url);
    const isTokenValidated = validateToken(token);
    const urDashboard = new URL('/pages/dashboard', request.url)

    if (!isTokenValidated || !token) {
        if (request.nextUrl.pathname === '/pages/dashboard') {
            return NextResponse.redirect(urlLogin);
        }
    }

    if (isTokenValidated){
        if(request.nextUrl.pathname === '/') {
            return NextResponse.redirect(Dashboard);
        }
    }
    NextResponse.next();
};
export const config = {
    matcher: ['/', '/pages/dashboard']
};

