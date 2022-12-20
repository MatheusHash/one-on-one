// middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { isValid } from './src/jwt/isValidToken';

export async function middleware(request: NextRequest) {
  const cookie = request.cookies.get('userLogged')?.value ?? '';
  // console.log('COOKIE: ',cookie, '\n',typeof cookie);

  const { pathname } = request.nextUrl;
  
  if (pathname.startsWith("/_next")) return NextResponse.next();

  const authPages = ['/login','/register'];
  // console.log('pathname',pathname.toString());
  
  if(!request.cookies.has('userLogged') && authPages.includes(pathname))
  {
    request.nextUrl.pathname = pathname;
    return NextResponse.rewrite(request.nextUrl);

  }else
   if(request.cookies.has('userLogged') && await isValid(cookie) && !authPages.includes(pathname)){
     return NextResponse.next();
  }

}