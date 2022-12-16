import React from "react";
import { token } from "../../src/jwt";



export default function Login(){

    const GenerateToken = ()=>{
        console.log(token)
        return token;
    }

    return(
        <>
            <button >CRIAR JWT</button>
        </>
    )

}