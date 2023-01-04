import React, { useState } from "react";
import type { ReactNode } from "react";
import * as S from "./style";

import MenuLinks from "../../MenuLinks";

import { InputSearch } from "../../Input";
import { faMagnifyingGlass, faPlus } from "@fortawesome/pro-thin-svg-icons";
import OneOnOne from "../../../../public/OneOnOne.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { DocumentContext } from "next/document";

import { PrismaClient } from "@prisma/client";
import { getCookie } from "cookies-next";
import { isValid } from "../../../../src/jwt/isValidToken";



interface Props {
  children: ReactNode;
}

import {useEffect} from 'react'

const MainLayout = ({ children }: Props) => {

  const [user,setUser] = useState('');

  
  useEffect(()=>{
    async function getUserCookie() {
      const cookie = getCookie("userLogged");
      console.log("COOKIE LAYOUT →",cookie);
      console.log('executando...')
      const payload: any =   await isValid(cookie);
      const user = payload.user;  
      setUser(user);
      console.log("USER LAYOUT →",user);
      return user.name; 
    }  
  }, []);

  return (
    <S.GridMainLayout>
      <S.Main>
        <S.Menu>
          <S.BrandStyle>
            <Image src={OneOnOne} alt="One On One" />
          </S.BrandStyle>

          <MenuLinks userName={user} />
        </S.Menu>
      </S.Main>

      <S.Content>
        <S.Header>
          {/* <S.InputSearch placeholder="Pesquisar 1on1 ou Pessoa" type="text" /> */}
          <InputSearch
            Placeholder="Pesquisar 1on1 ou Pessoa"
            Icon={faMagnifyingGlass}
          />
          <S.AddButton>
            ADICIONAR <span>1ON1</span> <FontAwesomeIcon icon={faPlus} />
          </S.AddButton>
        </S.Header>

        <S.Section>
          <S.DivContent>
            {children}
          </S.DivContent>
          </S.Section>
      </S.Content>
    </S.GridMainLayout>
  );
};

export default MainLayout;
