import React, { useState } from "react";
import type { ReactNode } from "react";
import * as S from "./style";

import MenuLinks from "../../MenuLinks";

import { InputSearch } from "../../Input";
import { faMagnifyingGlass, faPlus } from "@fortawesome/pro-thin-svg-icons";
import OneOnOne from "../../../../public/OneOnOne.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface Props {
  children: ReactNode;
  color: string | undefined
}

import PopUp from "../../PopUp";

import { useStore } from "../../../../src/store";
import { useGetFromStore } from "../../../../hooks/zustandHooks";
import { useRouter } from "next/router";


const MainLayout = ({ children, color }: Props) => {
  const [showPopUp, setShowPopUp] = useState<boolean>(false);
  // console.log("Olha o usuario que tenho no layout", user)
  const globalUser = useGetFromStore(useStore, (state: any ) => state.user);
  // console.log('GLOBAL USER',globalUser);
  const router = useRouter();
  return (
    <S.GridMainLayout>
      {showPopUp ? (
        <PopUp
          userId={ globalUser?.id ?? "" }
          companyId={ globalUser?.company_id ?? ""}
          setShowPopUp={() => {
            setShowPopUp((prev) => !prev);
            // console.log("teste");
          }}
        />
      ) : (
        <></>
      )}
      <S.Main>
        <S.Menu>

          <S.BrandStyle onClick={()=> router.push('/dashboard')}>
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

        <S.Section >
          <S.DivContent color={color}>{children}</S.DivContent>
        </S.Section>
      </S.Content>
    </S.GridMainLayout>
  );
};

export default MainLayout;
