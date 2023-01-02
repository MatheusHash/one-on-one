import React, { useState } from "react";
import { Input } from "../Input/index";
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
import DynamicInputs from "../../DynamicInputs";

import axios from "axios";
import { setCookie } from "cookies-next";
import router from "next/router";
export function RegisterForm() {
  const [inviteTeam, showTeamInputs] = useState<boolean>(false);

  const [team, setTeam] = useState([]);
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
    const { id, value } = e.target;
    setMainUser((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(mainUser);
  }
  function handleCompanyChange(e) {
    const { id, value } = e.target;
    setCompany((prev) => ({
      ...prev,
      [id]: value,
    }));
    console.log(company);
  }

  function nextStep(e) {
    e.preventDefault();
    showTeamInputs((prev) => !prev);
    // console.log("Empresa", company, "Usuario: ", mainUser);
  }

  async function makeLogin(email: string, password: string) {
    await axios.post("/api/auth/login", { email, password }).then((res) => {
      if (res.data.tk) {
        setCookie("userLogged", res.data.tk);
        router.push("/dashboard");
      }
      console.log(res.data);
    });
  }

  async function sendRegisterData(e) {
    e.preventDefault();

    const response = await axios.post("/api/users/user", {
      team,
      mainUser,
      company,
    });
    if (response.status === 200) {
      const data = await response.data;
      const user = await data.user;
      if (user) {
        makeLogin(user.email, mainUser.password);
        return;
      }
    } else {
      console.log("Erro ao realizar o cadastro");
    }
  }

  return (
    <>
      <FormRegister>
        {inviteTeam ? (
          <>
            <DynamicInputs setTeam={setTeam} />

            <ButtonSubmit
              Icon={faArrowRight}
              Submit={(e) => sendRegisterData(e)}
            >
              {"CONCLUIR CADASTRO"}
            </ButtonSubmit>
          </>
        ) : (
          <>
            <Input
              Id="name"
              HandleChange={(e) => handleMainUserChange(e)}
              Placeholder="Nome Completo"
              Type="text"
              Icon={faUser}
            />
            <Input
              Id="email"
              HandleChange={(e) => handleMainUserChange(e)}
              Placeholder="Digite seu e-email"
              Type="text"
              Icon={faEnvelope}
            />
            <Input
              Id="tel"
              HandleChange={(e) => handleMainUserChange(e)}
              Placeholder="Digite seu DDD + Whatsapp"
              Type="text"
              Icon={faMobile}
            />
            <Input
              Id="name"
              HandleChange={(e) => handleCompanyChange(e)}
              Placeholder="Nome da sua empresa"
              Type="text"
              Icon={faBuilding}
            />

            <Input
              Id="password"
              HandleChange={(e) => handleMainUserChange(e)}
              Placeholder="Crie sua senha"
              Type="text"
              Icon={faLock}
            />
            <Input
              Id="confirmPassword"
              HandleChange={(e) => handleMainUserChange(e)}
              Placeholder="Confirme sua senha"
              Type="text"
              Icon={faLock}
            />

            <ButtonSubmit Icon={faArrowRight} Submit={(e) => nextStep(e)}>
              {"Proximo Passo"}
            </ButtonSubmit>
            <TextForm>
              Já tem uma conta? <Link href="/login">CLIQUE AQUI</Link>{" "}
            </TextForm>
          </>
        )}
      </FormRegister>
    </>
  );
}
