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

import { users } from "@prisma/client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/pro-thin-svg-icons";
import { useGetFromStore } from "../../../../../hooks/zustandHooks";
import { useStore } from "../../../../../src/store";
import { EncondeData } from "../../../../../src/store/js-base64";

export default function UserData({ UserData }: users) {
  const dataUser = UserData.Data.user;

  // console.log("ID DO USER", dataUser.id);
  const [user, setUser] = useState<users>(dataUser);

  const handleChangeInputValue = (e) => {
    const { id, value }: string | any = e.target;
    setUser((user) => ({
      ...user,
      [id]: value,
    }));
    // console.log(user);
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
    const encodeUser = EncondeData(user);
    setUserGlobal(encodeUser);
  };

  async function getImage(e: ChangeEvent<File | any>) {
    const { id } = e.target;
    const arquivo = e.target.files[0];

    await getBase64(id, arquivo); // arquivo que peguei no input

    // console.log("base64code", base64code);
  }
  const [userZustand, setUserGlobal, removeUserGlobal] = useStore((state) => [
    state.user,
    state.setUserGlobal,
    state.removeUserGlobal,
  ]);
  async function getBase64(id, file: File) {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      user.profilePicture = reader.result;
      sendUpdate(id, reader.result); // enviando a string base64code, string base64 da imagem, para cadastrar no banco
      const encodeUser = EncondeData(user);
      setUserGlobal(encodeUser);
    };
  }


  const globalUser = useGetFromStore(useStore, (state) => state.user);
  console.log('GLOBAL USER',globalUser);

  return (
    <UserContent>
      <UserLeftWithImage>
        <label htmlFor="profilePicture">
          <ImageProfile>
            {user.profilePicture ? (
              <Image
                src={ globalUser?.profilePicture ?? ""}
                width="210"
                height="210"
                alt="inserir imagem"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} width={"210"} height={"210"} />
            )}
            <input
              onChange={(e) => getImage(e)}
              value={""}
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
              placeholder={"Clique aqui para informar"}
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
              placeholder={"Clique aqui para informar"}
              type={"text"}
            />
          </Data>
          <Data>
            <h4>Nota Média</h4>
            <Input
              id={"notaMedia"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.notaMedia ?? ""}
              placeholder={"Clique aqui para informar"}
              type={"number"}
              readOnly
            />
          </Data>
          <Data>
            <h4>Endereço da Empresa</h4>
            <Input
              id={"email"}
              onChange={handleChangeInputValue}
              onBlur={handleFocusEvent}
              value={user.email ?? "Clique para digitar"}
              placeholder={"Clique aqui para informar"}
              type={"text"}
            />
          </Data>
        </InputGroupUser>
      </UserRightWithData>
    </UserContent>
  );
}
