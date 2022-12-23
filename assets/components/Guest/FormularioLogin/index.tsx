import React from "react"
import { faArrowRight, faEnvelope, faLock } from "@fortawesome/pro-thin-svg-icons"
import { Input } from "../Input"
import ButtonSubmit from "../ButtonSubmit"
import * as S from './style'
import Link from "next/link"
export default function FormularioLogin(){

    function submitForm(){
        console.log('Hello');
    }

    return(
        <>
            <form>
                <Input Type={'text'} Placeholder={'E-mail'} Icon={faEnvelope} /> 
                <Input Type={'password'} Placeholder={'E-mail'} Icon={faLock} /> 
                <ButtonSubmit Submit={submitForm}  Icon={faArrowRight}>ENTRAR</ButtonSubmit>
            <S.TextForm>Não tem uma conta? <Link href='/register'>CADASTRE-SE AQUI</Link ></S.TextForm>
            </form>

            <S.TextForm ><Link href="/recuperarSenha">PRECISO DE UMA NOVA SENHA</Link></S.TextForm>
        </>
    )
}