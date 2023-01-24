import React from "react";
import { deleteCookie } from "cookies-next";
import { useRouter } from "next/router";
import { EXPIRED } from "../../assets/Styles/SessionExpired";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacePersevering } from "@fortawesome/pro-thin-svg-icons";
export default function SessionExpired() {
  deleteCookie("userLogged");
  const router = useRouter();

  setTimeout(() => {
    router.push("login");
  }, 3000);
  
  return (
    <EXPIRED>
      <FontAwesomeIcon icon={faFacePersevering} />
      <>Sua sessão foi expirada faça o login novamente!</>
    </EXPIRED>
  );
}
