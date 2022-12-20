import React from "react";
import { token } from "../../src/jwt";

import { setCookie } from 'cookies-next';
import { useRouter } from "next/router"; 

type User = {
    name: string
    password: string
}

export default function Login(){
    const router = useRouter();

    const checkDataFromSubmit = async (user: User)=>{
        
        const {name, password}: User = user;

        if(name == 'Matheus' && password == '123456'){
            const newToken = await GenerateToken(name);
            console.log('NOVO TOKEN: ', newToken);
            setCookie('userLogged', newToken);
            return true;
            // router.push('/dashboard');
        }

        return false;
    }
    const GenerateToken = async (name: string)=>{
        
        return token(name);
    }

    const makeLogin = async (user: User)=>{
        
        if(await checkDataFromSubmit(user)){
            router.push('/dashboard');
        }else{
            console.log('ERRO AO LOGIN')
        }
        
    }


    return(
        <>
            <button onClick={()=>{makeLogin({name:'Matheus', password: '123456'})}}>CRIAR JWT</button>
        </>
    )

}
