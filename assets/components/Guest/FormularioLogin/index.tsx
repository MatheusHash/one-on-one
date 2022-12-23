import React, { useState } from "react";
import {
  faArrowRight,
  faEnvelope,
  faLock,
} from "@fortawesome/pro-thin-svg-icons";
import { Input } from "../Input";
import ButtonSubmit from "../ButtonSubmit";
import * as S from "./style";
import Link from "next/link";
import axios from "axios";
import { setCookie } from "cookies-next";

import { useRouter } from "next/router";


export default function FormularioLogin() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const router = useRouter();

  function handleChange(e: KeyboardEvent) {
    const { id, value }: string | any = e.target;
    setLoginData((loginData) => ({
      ...loginData,
      [id]: value,
    }));
    console.log(loginData);
  }

  function submitForm(e: HTMLButtonElement | MouseEvent | any) {
    e.preventDefault();
    axios.post("/api/auth/login", loginData).then((res)=>{
      if(res.data.tk){
        setCookie('userLogged', res.data.tk);
        router.push('/dashboard');
      }
      console.log(res.data);
    })
  }

  return (
    <>
      <form method="POST">
        <Input
          HandleChange={handleChange}
          Id="email"
          Type={"text"}
          Placeholder={"E-mail"}
          Icon={faEnvelope}
        />
        <Input
          HandleChange={handleChange}
          Id="password"
          Type={"password"}
          Placeholder={"E-mail"}
          Icon={faLock}
        />
        <ButtonSubmit Submit={submitForm} Icon={faArrowRight}>
          ENTRAR
        </ButtonSubmit>
        <S.TextForm>
          Não tem uma conta? <Link href="/register">CADASTRE-SE AQUI</Link>
        </S.TextForm>
      </form>

      <S.TextForm>
        <Link href="/recuperarSenha">PRECISO DE UMA NOVA SENHA</Link>
      </S.TextForm>
    </>
  );
}
