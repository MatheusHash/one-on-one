import Image from "next/image";
import React, { ChangeEvent, useState } from "react";
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

export default function UserData({ UserData }: users) {
  const [path, setPath] = useState<string>("");

  const dataUser = UserData.Data.user;
  const [file, setFile] = useState(null);
  const [base64code, setBase64code] = useState<string>();
  // console.log("ID DO USER", dataUser.id);
  const [user, setUser] = useState<users>(dataUser);

  const handleChangeInputValue = (e) => {
    const { id, value }: string | any = e.target;
    setUser((user) => ({
      ...user,
      [id]: value,
    }));
    console.log(user);
  };

  async function sendUpdate(id: string, value: string) {
    // console.log([id], value);
    await axios.put("/api/users/user", {
      userId: dataUser.id,
      field: {
        [id]: value,
      },
    });
  }

  const handleFocusEvent = (e: any) => {
    // console.log(e.target);
    const { id, value } = e.target;
    sendUpdate(id, value);
  };

  async function getImage(e: ChangeEvent<File | any>) {
    const { id } = e.target;
    console.log('alterei')
    const arquivo = await e.target.files[0];
    console.log('files: ',e.target.files[0]);
    getBase64(arquivo); // arquivo que peguei no input
    setFile(URL.createObjectURL(arquivo)); // setFile é a const que utilizo na tag '<Image src ={file}/>'
    sendUpdate(id, base64code); // enviando a string base64code, string base64 da imagem, para cadastrar no banco
    // console.log("base64code", base64code);
  }

  async function getBase64(file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = async () => {
      onLoad(reader.result);
    };
  }
  const onLoad = (fileString: string | any) => {
      setBase64code(fileString); // setanto a string base64code, que envio para a api
  };

  return (
    <UserContent>
      <UserLeftWithImage>
        <label htmlFor="profilePicture">
          <ImageProfile>
            <Image
              src={file ?? user.profilePicture}
              width="210"
              height="210"
              alt="inserir imagem"
            />
            <input
              onChange={(e) => getImage(e)}
              value={''}
              id="profilePicture"
              type="file"
              accept="image/*"
            />
          </ImageProfile>
          <TextAction>
            ALTERAR <span>IMAGEM</span>
          </TextAction>
        </label>
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
              value={user.tel ?? ""}
              type={"text"}
            />
          </Data>
          <Data>
            <h4>Perfil do Instagram</h4>
            <Input
              id={"notaMedia"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.notaMedia ?? ""}
              type={"number"}
            />
          </Data>
          <Data>
            <h4>Endereço da Empresa</h4>
            <Input
              id={"email"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.email ?? "Clique para digitar"}
              type={"text"}
            />
          </Data>
        </InputGroupUser>
      </UserRightWithData>
    </UserContent>
  );
}
