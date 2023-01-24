import React from "react";
import * as S from "./styles";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuilding, faDashboard, faDoorOpen } from "@fortawesome/pro-thin-svg-icons";
import Image from "next/image";
import { useRouter } from "next/router";
import { deleteCookie } from "cookies-next";
import { useStore } from "../../../src/store";

type Props = {
  userName: string;
  userPicture: string;
  userCompany: string;
};

const MenuLinks = ({ userName, userPicture, userCompany }: Props) => {
  const [removeUserGlobal] = useStore((state) => [
    state.removeUserGlobal,
  ]); // console.log('User no Menu Links: ', user);
  const router = useRouter();
  const pathname = router.pathname;

  const selectedColor = "#7559F2";

  const logout = async () => {
    // router.push("/api/logout");
    removeUserGlobal();
    deleteCookie("userLogged");
    router.push("/login");
  };
  return (
    <S.Container>
      <S.Navigation>
        <S.Button  onClick={()=> router.push('/dashboard')} color={pathname === "/dashboard" ? selectedColor : ""}>
          <FontAwesomeIcon icon={faDashboard} size="xl" /> Dashboard
        </S.Button>
        <S.Button onClick={()=> router.push('/sectors')} color={pathname === "/sectors" ? selectedColor : ""}>
          <FontAwesomeIcon icon={faBuilding} size="xl" /> Setores
        </S.Button>
      </S.Navigation>

      <S.MenuFooter>
        <S.Button
          color={pathname === "/company" ? selectedColor : ""}
          onClick={() => {
            router.push("/company");
          }}
        >
          <FontAwesomeIcon icon={faBuilding} size="xl" /> {userCompany}
        </S.Button>

        <S.User>
          <S.Button
            color={pathname === "/users/profile" ? selectedColor : ""}
            onClick={() => {
              router.push("/users/profile");
            }}
          >
            <>
              <div>
                <Image src={userPicture} alt="IMG" width="24" height="24" />
              </div>
              {userName}
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
