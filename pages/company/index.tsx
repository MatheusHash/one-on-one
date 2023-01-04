import React, { ReactNode, useState } from "react";
import { isValid } from "../../src/jwt/isValidToken";
import { company } from "@prisma/client";
import axios from "axios";
import {
  Container,
  DataCompany,
  Header,
  TextAction,
  TextHeader,
  ContainerContentCompanyProfile,
  Line,
} from "../../assets/components/Company/profile/styles";
import MainLayout from "../../assets/components/Layouts/Main/MainLayout";
import { InputTransparent } from "../../assets/components/InputTransparent";
import { Data } from "../../assets/components/Company/profile/CompanyData/styles";
import * as jose from "jose";


export default function Company(company: company) {

  const [company_handle, setCompanyHandle] = useState<company>(company);
//   console.log("SETcompanyHandle", company);
  const handleChangeInputValue = (e: any) => {
      const { id, value }: string | any = e.target;
      setCompanyHandle((company_handle) => ({
          ...company_handle,
          [id]: value,
        }));
    console.log("company handle", company_handle);
  };

  async function sendUpdate(id: string, value: string) {
    console.log([id], value);
    if(value)
    {
      await axios.put("/api/company", {
        companyId: company.id,
        field: {
          [id]: value,
        },
      });
    }
  }

  const handleFocusEvent = (e) => {
    console.log(e.target);
    const { id, value } = e.target;
    sendUpdate(id, value);
  };

  const [showProfileData, setShowProfileData] = useState<string>("empresa");
  function Show(e: MouseEvent) {
    const { id } = e.target;
    if (id == "op") {
      setShowProfileData("op");
    } else if (id == "empresa") {
      setShowProfileData("empresa");
    } else {
      setShowProfileData("time");
    }
    return;
  }

  return (
    <Container>
      <Header>
        <TextAction  id="op" onClick={(e) => Show(e)}>
          MINHAS <span id="op">OPÇÕES</span>
        </TextAction>
        <TextAction id="empresa" onClick={(e) => Show(e)}>
          MINHA <span id="empresa">EMPRESA</span>
        </TextAction>
        <TextAction id="time" onClick={(e) => Show(e)}>
          MEU <span id="time">TIME</span>
        </TextAction>
      </Header>
      <ContainerContentCompanyProfile>
      {showProfileData == "op" ? (
        "OPCOES"
      ) : showProfileData == "empresa" ? (
        <DataCompany>
          <TextHeader>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit nulla
            dolores ut facilis numquam, adipisci eveniet illum hic eligendi.
            Sequi!
          </TextHeader>
          <Line />
          <DataCompany>
            <Data>
              <h4>Nome da Empresa</h4>
              <InputTransparent
                id={"name"}
                onChange={(e) => handleChangeInputValue(e)}
                onBlur={handleFocusEvent}
                value={company_handle.name}
                placeholder={"Clique aqui para informar"}
                type={"text"}
              />
            </Data>
            <Data>
              <h4>Documento Fiscal (CNPJ)</h4>
              <InputTransparent
                id={"cnpj"}
                onChange={(e) => handleChangeInputValue(e)}
                onBlur={handleFocusEvent}
                placeholder={"Clique aqui para informar"}
                value={company_handle?.cnpj || ""}
                type={"text"}
              />
            </Data>
            <Data>
              <h4>Perfil do Instagram</h4>
              <InputTransparent
                id={"instagram"}
                onChange={(e) => handleChangeInputValue(e)}
                onBlur={handleFocusEvent}
                value={company_handle?.instagram ?? ''}
                placeholder={"Clique aqui para informar"}
                type={"text"}
              />
            </Data>
            <Data>
              <h4>Endereço da Empresa</h4>
              <InputTransparent
                id={"endereco"}
                onChange={(e) => handleChangeInputValue(e)}
                onBlur={handleFocusEvent}
                value={'@'+company_handle.name}
                placeholder={"Clique aqui para informar"}
                type={"text"}
              />
            </Data>
            <Data>
              <h4>DDD + Telefone</h4>
              <InputTransparent
                id={"endereco"}
                onChange={(e) => handleChangeInputValue(e)}
                onBlur={handleFocusEvent}
                value={company_handle?.tel ?? ''}
                placeholder={"Clique aqui para informar"}
                type={"text"}
              />
            </Data>
          </DataCompany>
        </DataCompany>
      ) : (
        "TIME"
      )}
      </ContainerContentCompanyProfile>
    </Container>
  );
}
Company.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context: {
  req: { cookies: { userLogged: string } };
}) {
//   console.log("tchee", context.req.cookies.userLogged);
  const cookie = context.req.cookies.userLogged;
  const payload: jose.JWTPayload = await isValid(cookie);
  const company_id: unknown = payload.user.company_id;

//   console.log("do server", payload);

  const {company} = await fetch(
    `http://localhost:3000/api/company?id=${company_id}`
  ).then((res) => res.json());
  console.log("COMPANY: \n", company);
  return {
    props: 
      company,
     // will be passed to the page component as props
  };
}
