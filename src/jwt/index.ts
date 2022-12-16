import jwt from 'jsonwebtoken'

export const token = (name: string)=>{
    const secret = process.env.NEXT_PUBLIC_KEY_JWT;
    
    if(secret){
        const tk = jwt.sign({user: name}, secret)
        return tk;
    }
}