import React from "react";
import {
  ContainerCardSector,
  CreatedAt,
  HeaderCardSector,
  SectorName,
  FooterCardSectors,
  SeeMore,
} from "./style";
import SomeUsersFromSectors from "../SomeUsersFromSectors";

type Props = {
  team: any
}

export default function CardSector({team}:Props) {
  return (
    <ContainerCardSector>
      <HeaderCardSector>
        <SectorName>{team.name}</SectorName>
        <CreatedAt>
          ATIVO <span>DESDE</span>
          <strong>
            <br /> 21/07/2022
          </strong>
        </CreatedAt>
      </HeaderCardSector>

      <FooterCardSectors>
        <SomeUsersFromSectors />

        <SeeMore>Ver mais...</SeeMore>
      </FooterCardSectors>
    </ContainerCardSector>
  );
}
