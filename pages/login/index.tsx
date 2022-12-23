import React, { ReactNode } from "react";
import { token } from "../../src/jwt";
import GuestLayout from "../../assets/components/Layouts/GuestLayout/GuestLayout";
import { setCookie } from 'cookies-next';
import { useRouter } from "next/router"; 

import { Input } from "../../assets/components/Guest/Input";
import FormularioLogin from "../../assets/components/Guest/FormularioLogin";

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
            <FormularioLogin />
        </>
    )

}


Login.getLayout = function getLayout(page: ReactNode) {
    return (
        <GuestLayout>{page}</GuestLayout>
    )
  }