import React from "react";
import * as S from "./styles";

type Props = {
  Title: string;
  Text: string;
};

export default function HeaderContent({ Title, Text }: Props) {
  return (
    <S.Content>
      <h1>{Title}</h1>
      <p>{Text}</p>
    </S.Content>
  );
}
