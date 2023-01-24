import React, { ReactNode } from "react";
import MainLayout from "../../assets/components/Layouts/Main/MainLayout";
import theme from "../../util/theme";
import {
  HeaderSector,
  ListCardsSectors,
  SectorsContent,
  TeamDetails,
} from "../../assets/Styles/Sectors";
import CardSector from "../../assets/components/CardSector";
import { useStore } from "../../src/store";
import { useGetFromStore } from "../../hooks/zustandHooks";
import { useRef } from "react";
import axios from "axios";
import { useQuery } from "react-query";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/pro-thin-svg-icons";

export default function Sectors() {
  const globalUser = useGetFromStore(useStore, (state: any) => state.user);
  const companyId = globalUser?.company.id;

  const cardRef = React.useRef<HTMLDivElement | null>(null);

  const { data, error } = useQuery("/api/team/getAllFromTeams", async () => {
    const { data } = await axios.get("/api/team/getAllFromTeams", {
      params: { company_id: companyId },
    });
    return data;
  });
  console.log("olha o retornoooo", data);
  if (error) return;
  <p>Ocorreu algum erro inesperado. Recarregue a página!</p>;

  return (
    <>
      <SectorsContent>
        <HeaderSector>
          <h1>
            MEUS <span>SETORES</span>
          </h1>
          <FontAwesomeIcon icon={faPlusCircle} size={"xl"} />
        </HeaderSector>
        <ListCardsSectors>
          {data ? (
            data.teams.map((team) => {
              return <CardSector ref={cardRef} key={team.id} team={team} />;
            })
          ) : (
            <>Cadastre seus times! +</>
          )}
        </ListCardsSectors>
      </SectorsContent>
      <TeamDetails></TeamDetails>
    </>
  );
}

Sectors.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout color={theme.colorSecond}>{page}</MainLayout>;
};
