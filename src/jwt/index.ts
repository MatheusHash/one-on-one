import jwt from 'jsonwebtoken'
import type { Secret } from 'jsonwebtoken'
import { ProcessEnvOptions } from 'child_process';
// type JwtTokenSecret = {
//     envSecret: Secret
// }

export const token = ()=>{
    const secret: Secret = process.env?.KEY_JWT || '';

    if(secret){
        const tk = jwt.sign({username: 'Matheus'}, secret)
        return tk;
    }
    return '';
}