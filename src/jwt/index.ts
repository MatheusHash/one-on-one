// import jwt from 'jsonwebtoken'
import { users } from '@prisma/client';
import * as jose from 'jose';

export async function token(user: users): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT)
    
    const exp = iat + 60* 60; // four hours
    
    const jwt = await new jose.SignJWT({ user })
                .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
                .setExpirationTime(exp)
                .setIssuedAt(iat)
                .setNotBefore(iat)
                .sign(secret)

    return jwt;
}
