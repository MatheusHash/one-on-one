// import jwt from 'jsonwebtoken'
import * as jose from 'jose';

export async function token(name: string): Promise<string> {
    const iat = Math.floor(Date.now() / 1000);
    const secret = new TextEncoder().encode(process.env.NEXT_PUBLIC_KEY_JWT)
    
    const exp = iat + 60* 60; // one hour
    
    const jwt = await new jose.SignJWT({ user: name})
                .setProtectedHeader({ alg: 'HS256', typ: 'JWT' })
                .setExpirationTime(exp)
                .setIssuedAt(iat)
                .setNotBefore(iat)
                .sign(secret)
    return jwt;
}
