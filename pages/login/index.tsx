import React, { ReactNode } from "react";
import { token } from "../../src/jwt";
import GuestLayout from "../../assets/components/Layouts/GuestLayout/GuestLayout";
import { setCookie } from 'cookies-next';
import { useRouter } from "next/router"; 

import { Input } from "../../assets/components/Guest/Input";
import FormularioLogin from "../../assets/components/Guest/FormularioLogin";
import { users } from "@prisma/client";

type User = {
    name: string
    password: string
}

export default function Login(){
    const router = useRouter();

    
    const GenerateToken = async (user: users)=>{
        
        return token(user);
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