import React from "react";
import { token } from "../../src/jwt";

import { setCookie } from 'cookies-next';
import { useRouter } from "next/router"; 

import { getCookie } from "cookies-next";

type User = {
    name: string
    password: string
}

export default function Login(){
    const router = useRouter();

    const checkDataFromSubmit = (user: User)=>{
        
        const {name, password}: User = user;

        if(name == 'Matheus' && password == '123456'){
            const newToken = GenerateToken(name);
            setCookie('userLogged', newToken);
            return true;
            // router.push('/dashboard');
        }

        return false;
    }
    const GenerateToken = (name: string)=>{
        
        return token(name);
    }

    const makeLogin = (user: User)=>{
        
        if(checkDataFromSubmit(user)){
            router.push('/dashboard');
        }else{
            console.log('ERRO AO LOGIN')
        }
        
    }

    const verifyIfCookieExists = async ()=> {
        const cookieExists =  getCookie('userLogged');
        if(cookieExists){
            router.push('/dashboard')
        }
    }
    verifyIfCookieExists();

    return(
        <>
            <button onClick={()=>{makeLogin({name:'Matheus', password: '123456'})}}>CRIAR JWT</button>
        </>
    )

}
