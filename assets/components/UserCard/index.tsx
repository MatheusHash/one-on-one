import { faChessRookPiece } from "@fortawesome/pro-thin-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { users } from "@prisma/client";
import Image from "next/image";
import React from "react";
import { CardRating, ContainerCard, UserDesc, UserRating, Picture, Icon, Data, Nome, Cargo, Setor } from "./style";

type Props = {
  User: users;
};
export function UserCard({ User }: Props) {
  return (
    <ContainerCard>

      <UserDesc>
        <Picture>
          <Image src={User.profilePicture ?? '' } alt='photo' width={100} height={100}  />
        </Picture>
        <Icon>
          <FontAwesomeIcon icon={faChessRookPiece} color="#FC9E2F"/> 
          <span>GEST.</span>
        </Icon>
        <Data>
          <Nome>{User.name}</Nome>
          <Cargo>{User.permission ?? "Sem cargo"}</Cargo>
          <Setor>{User?.equipe?.name ?? "Sem equipe"}</Setor>
        </Data>
      </UserDesc>
      <UserRating>
        <CardRating>
          <span>99</span>
          <span>
            <strong>1ON1</strong> marcadas
          </span>
        </CardRating>
        <CardRating>
          <span>888</span>
          <span>
            <strong>1ON1</strong> realizadas
          </span>
        </CardRating>
        <CardRating>
          <span>8.8</span>
          <span>
            <strong>nota</strong> média
          </span>
        </CardRating>
      </UserRating>
    </ContainerCard>
  );
}
