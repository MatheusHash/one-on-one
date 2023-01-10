import React, { useState } from "react";
import { EncondeData, DecodeData } from "../../../../src/store/js-base64";
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
import { useGetFromStore } from "../../../../hooks/zustandHooks";
import { useStore } from "../../../../src/store";

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
  const [userZustand, setUserGlobal, removeUserGlobal] = useStore((state) => [
    state.user,
    state.setUserGlobal,
    state.removeUserGlobal,
  ]);
  const [userLog, setUserLog] = useState<any>();
  async function submitForm(e: HTMLButtonElement | MouseEvent | any) {
    e.preventDefault();
    await axios.post("/api/auth/login", loginData).then((res) => {
      if (res.data.tk) {
        console.log("res do Login", res.data.user);
        setUserLog(res.data.user);

        const encodedUser = EncondeData(res.data.user);
        console.log("Encode", encodedUser);
        setUserGlobal(encodedUser);
        setCookie("userLogged", res.data.tk);
        router.push("/dashboard");
      }
      // console.log(res.data);
    });
  }
  useGetFromStore(useStore, (state: any) => state.user);

  return (
    <S.Content>
      <S.Form>
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
      </S.Form>

      <S.TextForm>
        <Link href="/recuperarSenha">PRECISO DE UMA NOVA SENHA</Link>
      </S.TextForm>
    </S.Content>
  );
}
