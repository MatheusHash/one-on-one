import React, { useState } from "react"
import { Input } from "../Input"
import { FormRegister } from "./styles"
import { faUser } from "@fortawesome/pro-thin-svg-icons"
export function RegisterForm(){

    const [mainUser, setMainUser] = useState({
        name: '',
        email:'',
        tel:'',
        password: '',
    });

    const [company, setCompany] = useState({
        name: '',
    })

    function handleMainUserChange(e){
        console.log('main user')
    }
    function handleCompanyChange(e){
        console.log('company')
    }


    return(
            <FormRegister>
                <Input  Id="name" HandleChange={handleMainUserChange}  Placeholder="digite seu nome" Type="text" Icon={faUser} />
                <Input  Id="company" HandleChange={handleCompanyChange}  Placeholder="digite seu nome" Type="text" Icon={faUser} />

            </FormRegister>
        )
}