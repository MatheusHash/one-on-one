import React, { useState } from "react";
import type { ReactNode } from "react";
import * as S from "./style";

import MenuLinks from "../../MenuLinks";

import { InputSearch } from "../../Input";
import { faMagnifyingGlass, faPlus } from "@fortawesome/pro-thin-svg-icons";
import OneOnOne from "../../../../public/OneOnOne.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { getCookie } from "cookies-next";
import { isValid } from "../../../../src/jwt/isValidToken";

interface Props {
  children: ReactNode;
}

import { useEffect } from "react";
import axios from "axios";
import PopUp from "../../PopUp";

import { useStore } from "../../../../src/store";
import { useGetFromStore } from "../../../../hooks/zustandHooks";
import { DecodeData } from "../../../../src/store/js-base64";

const MainLayout = ({ children }: Props) => {
  const [user, setUser] = useState({});
  const [showPopUp, setShowPopUp] = useState<boolean>(false);

  // const [userApi, setUserApi] = useState<users>();

  useEffect(() => {
    async function getUserCookie() {
      const cookie = getCookie("userLogged");
      // console.log("COOKIE LAYOUT →", cookie);
      // console.log("executando...");
      const payload = await isValid(cookie);
      const user = await payload.user;

      console.log("USER LAYOUT →", user);
      await axios
        .get("/api/users/fetchUserWithPicture?id=" + user.id)
        .then((res) => {
          if (res.status === 200) {
            const data = res.data;
            // console.log("DATADATA →", res.data);
            setUser(data);
          }
        })
        .catch((err) => console.log(err));

      return user;
    }
    console.log("verdadeiro", user);
    getUserCookie();
  }, []);

  // console.log("Olha o usuario que tenho no layout", user)


  const globalUser = useGetFromStore(useStore, (state) => state.user);
  console.log('GLOBAL USER',globalUser);

  return (
    <S.GridMainLayout>
      {showPopUp ? (
        <PopUp
          userId={ globalUser?.id ?? "" }
          companyId={ globalUser?.company_id ?? ""}
          setShowPopUp={() => {
            setShowPopUp((prev) => !prev);
            console.log("teste");
          }}
        />
      ) : (
        <></>
      )}
      <S.Main>
        <S.Menu>

          <S.BrandStyle>
            <Image src={OneOnOne} alt="One On One" />
          </S.BrandStyle>

          <MenuLinks
            userName={ globalUser?.name ?? ""}
            userPicture={  globalUser?.profilePicture ?? ""}
            userCompany={  globalUser?.company.name ?? ""}
          />
        </S.Menu>
      </S.Main>

      <S.Content>
        <S.Header>
          {/* <S.InputSearch placeholder="Pesquisar 1on1 ou Pessoa" type="text" /> */}
          <InputSearch
            Placeholder="Pesquisar 1on1 ou Pessoa"
            Icon={faMagnifyingGlass}
          />
          <S.AddButton
            onClick={() => {
              setShowPopUp((prev) => !prev);
            }}
          >
            ADICIONAR <span>1ON1</span> <FontAwesomeIcon icon={faPlus} />
          </S.AddButton>
        </S.Header>

        <S.Section>
          <S.DivContent>{children}</S.DivContent>
        </S.Section>
      </S.Content>
    </S.GridMainLayout>
  );
};

export default MainLayout;
