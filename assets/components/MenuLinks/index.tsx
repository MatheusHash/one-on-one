import React from "react";
import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faDoorOpen } from "@fortawesome/pro-thin-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { users } from "@prisma/client";
import { deleteCookie } from "cookies-next";
import { useStore } from "../../../src/store";


const MenuLinks =  (user: users) => {

  const [userZustand, setUserGlobal, removeUserGlobal] = useStore((state) => [
    state.user,
    state.setUserGlobal,
    state.removeUserGlobal,
  ]);  // console.log('User no Menu Links: ', user);
  const router = useRouter();
  const logout = async () => {
    // router.push("/api/logout");
    removeUserGlobal();
    deleteCookie('userLogged');
    router.push('/login');
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
        <S.Button
          onClick={() => {
            router.push("/company");
          }}
        >
          <FontAwesomeIcon icon={faDoorOpen} size="xl" /> {user.userCompany}
        </S.Button>

        <S.User>
          <S.Button
            onClick={() => {
              router.push("/users/profile");
            }}
          >
            <>
            <div>
              <Image src={ user.userPicture} alt="IMG" width="24" height="24" />
            </div>
            {`${user.userName}`}
            </>
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
