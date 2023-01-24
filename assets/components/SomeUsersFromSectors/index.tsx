import Image from "next/image";
import React from "react";
import { ContainerSomeUsersList, Gestor, SomeCollaborattors } from "./styles";
import myphoto from "../../../public/myProfilePicture.jpeg";
export default function SomeUsersFromSectors() {
  return (
    <ContainerSomeUsersList width={50}>
      <Gestor>
        <Image
          src={myphoto}
          alt="ph"  
          width={20}
          height={20}
          placeholder={"blur"}
        />
      </Gestor>
      <SomeCollaborattors>
        <Image
          src={myphoto}
          alt="ph"
          width={20}
          height={20}
          placeholder={"blur"}
        />
        <Image
          src={myphoto}
          alt="ph"
          width={20}
          height={20}
          placeholder={"blur"}
        />
        <Image
          src={myphoto}
          alt="ph"
          width={20}
          height={20}
          placeholder={"blur"}
        />
        <Image
          src={myphoto}
          alt="ph"
          width={20}
          height={20}
          placeholder={"blur"}
        />
        <Image
          src={myphoto}
          alt="ph"
          width={20}
          height={20}
          placeholder={"blur"}
        />
      </SomeCollaborattors>
    </ContainerSomeUsersList>
  );
}
