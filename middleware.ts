// middleware.ts

import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'


export function middleware(request: NextRequest) {

    // console.log("GETCOOKIE",getCookie('userLogged'));
    console.log(request.cookies.get('userLogged'));
    const cookie = request.cookies.get('userLogged');

    
    const pathname = request.url;
    
    console.log('PathName',pathname);

    const authPages = ['/login','/register'];
    
    if(cookie || authPages.includes(pathname)){
        return NextResponse.next();
    }
    
    if (!authPages.includes(pathname)) {
        console.log(cookie)        
    }

    // return NextResponse.redirect(new URL('/login', request.url));
}