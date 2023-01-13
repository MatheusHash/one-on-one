import Image from "next/image";
import React, { useState } from "react";
import {
  ImageProfile,
  InputGroupUser,
  TextAction,
  UserContent,
  UserLeftWithImage,
  UserRightWithData,
  Data,
  Input,
} from "./styles";

import axios from "axios";

import myProfilePicture from "../../../../../public/myProfilePicture.jpeg";
import { users } from "@prisma/client";

export default function UserData({UserData}: users) {

  const dataUser = UserData.Data.user;
  // console.log("ID DO USER", dataUser.id)
  const [user, setUser] = useState<users>(
    dataUser
  );

  const handleChangeInputValue = (e)=>{
    const { id, value }: string | any = e.target;
    setUser((user) => ({
      ...user,
      [id]: value,
    }));
    // console.log(user)
  }

  async function sendUpdate(id: string, value: string){
    // console.log([id],value);
    await axios.put('/api/users/user',{
      userId: dataUser.id,
      field:{
        [id] : value,
      }
    })
  }

  const handleFocusEvent = (e) => {
    // console.log(e.target);
    const {id, value} = e.target;
    sendUpdate(id,value)
  };


  return (
    <UserContent>
      <UserLeftWithImage>
        <ImageProfile>
          <Image src={myProfilePicture} alt="photo" />
        </ImageProfile>
        <TextAction>
          ALTERAR <span>IMAGEM</span>
        </TextAction>
      </UserLeftWithImage>
      <UserRightWithData>
        <InputGroupUser>
          <Data>
            <h4>Nome Completo</h4>
            <Input
              id={"name"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.name}
              type={"text"}
            />
          </Data>
          <Data>
            <h4>Tel</h4>
            <Input
              id={"tel"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.tel ?? ''}
              type={"text"}
            />
          </Data>
          <Data>
            <h4>Perfil do Instagram</h4>
            <Input
              id={"notaMedia"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.notaMedia ?? ''}
              type={"number"}
            />
          </Data>
          <Data>
            <h4>Endereço da Empresa</h4>
            <Input
              id={"email"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.email ?? 'Clique para digitar'}
              type={"text"}
            />
          </Data>
        </InputGroupUser>
      </UserRightWithData>
    </UserContent>
  );
}
