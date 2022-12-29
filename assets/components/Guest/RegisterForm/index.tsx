import React, { useState } from "react";
import { Input } from "../Input";
import { FormRegister } from "./styles";
import {
  faUser,
  faEnvelope,
  faMobile,
  faBuilding,
  faLock,
  faArrowRight,
} from "@fortawesome/pro-thin-svg-icons";
import ButtonSubmit from "../ButtonSubmit";
import { TextForm } from "../FormularioLogin/style";
import Link from "next/link";
export function RegisterForm() {
  const [mainUser, setMainUser] = useState({
    name: "",
    email: "",
    tel: "",
    password: "",
  });

  const [company, setCompany] = useState({
    name: "",
  });

  function handleMainUserChange(e) {
    console.log("main user");
  }
  function handleCompanyChange(e) {
    console.log("company");
  }

  function sendData(e) {
    e.preventDefault();
    console.log("enviando dados");
  }

  return (
    <FormRegister>
      <Input
        Id="name"
        HandleChange={handleMainUserChange}
        Placeholder="Nome Completo"
        Type="text"
        Icon={faUser}
      />
      <Input
        Id="email"
        HandleChange={handleMainUserChange}
        Placeholder="Digite seu e-email"
        Type="text"
        Icon={faEnvelope}
      />
      <Input
        Id="tel"
        HandleChange={handleMainUserChange}
        Placeholder="Digite seu DDD + Whatsapp"
        Type="text"
        Icon={faMobile}
      />
      <Input
        Id="company"
        HandleChange={handleCompanyChange}
        Placeholder="Nome da sua empresa"
        Type="text"
        Icon={faBuilding}
      />

      <Input
        Id="password"
        HandleChange={handleMainUserChange}
        Placeholder="Crie sua senha"
        Type="text"
        Icon={faLock}
      />
      <Input
        Id="confirmPassword"
        HandleChange={handleMainUserChange}
        Placeholder="Confirme sua senha"
        Type="text"
        Icon={faLock}
      />

      <ButtonSubmit Icon={faArrowRight} Submit={(e) => sendData(e)}>
        {"Proximo Passo"}
      </ButtonSubmit>

      <TextForm>Já tem uma conta? <Link href='/login'>CLIQUE AQUI</Link> </TextForm>
    </FormRegister>
  );
}
