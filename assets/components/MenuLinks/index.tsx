import React from "react";
import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faDoorOpen } from "@fortawesome/pro-thin-svg-icons";
import Image from "next/image";
import myProfilePicture from "../../../public/myProfilePicture.jpeg";
import axios from "axios";

import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";

const MenuLinks = () => {
  const router = useRouter();

  const logout = async () => {
    // router.push("/api/logout");
    fetch('/api/logout');
  };

  return (
    <S.Container>
      <S.Navigation>
        <S.Button>
          <FontAwesomeIcon icon={faBuilding} size="xl" /> Equipes
        </S.Button>
        <S.Button>
          <FontAwesomeIcon icon={faBuilding} size="xl" /> one on one
        </S.Button>
        <S.Button>
          <FontAwesomeIcon icon={faBuilding} size="xl" /> Minha Empresa
        </S.Button>
      </S.Navigation>

      <S.MenuFooter>
        <S.Button>
          <FontAwesomeIcon icon={faDoorOpen} size="xl" /> Nome Empresa
        </S.Button>

        <S.User>
          <S.Button
            onClick={() => {
              router.push("/users/profile");
            }}
          >
            <div>
              <Image src={myProfilePicture} alt="IMG" width="24" height="24" />
            </div>
            Nome do usuário
          </S.Button>
        </S.User>

        <S.Button onClick={() => logout()}>
          <FontAwesomeIcon icon={faDoorOpen} size="xl" /> Sair do Gestor 1ON1
        </S.Button>
      </S.MenuFooter>
    </S.Container>
  );
};

export default MenuLinks;
