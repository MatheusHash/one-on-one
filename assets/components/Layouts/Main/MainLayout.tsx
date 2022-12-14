import React from "react";
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
}

const MainLayout = ({ children }: Props) => {
  return (
    <S.GridMainLayout>
      <S.Main>
        <S.Menu>
          <S.BrandStyle>
            <Image src={OneOnOne} alt="One On One" />
          </S.BrandStyle>

          <MenuLinks />
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
