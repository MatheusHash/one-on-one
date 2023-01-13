import React, { useState } from "react";
import { Container, Header, TextAction } from "./styles";
import PasswordForm from "./PasswordForm/index";
import UserData from "./UserData";
import { users } from "@prisma/client";

export default function UserProfile({ Data }: users) {
  const [showProfileData, setShowProfileData] = useState<boolean>(true);
  // console.log('User Profile: ', Data);
  function Show(e: MouseEvent) {
    if (e.target?.id == "profile") {
      setShowProfileData(true);
      return;
    } else {
      setShowProfileData(false);
      return;
    }
  }

  const selectedColor = '#7559F2';
  return (
    <Container>
      <Header>
        <TextAction
          color={showProfileData ? selectedColor : ""}
          id="profile"
          onClick={(e) => Show(e)}
        >
          MEU <span id="profile">PERFIL</span>
        </TextAction>
        <TextAction
          id="password"
          onClick={(e) => Show(e)}
          color={!showProfileData ? selectedColor : ""}
        >
          MINHA <span id="password">SENHA</span>
        </TextAction>
      </Header>
      {showProfileData ? <UserData UserData={{ Data }} /> : <PasswordForm />}
    </Container>
  );
}
