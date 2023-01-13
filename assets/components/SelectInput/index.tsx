import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { ContainerSelect, ListTeams, Select } from "./styles";
import { faChevronDown, faChevronUp } from "@fortawesome/pro-thin-svg-icons";
import axios from "axios";
import { teams } from "@prisma/client";
export default function SelectInput({ companyId, showDropdownTeams, selectTeam, team }: any) {
  const [teams, setTeams] = useState<Array<teams>>([]);
  console.log("id da empresa", companyId);
  async function getTeams() {
    if(teams.length == 0){
      await axios
        .get("/api/team/getTeams", { params: { company_id: companyId } })
        .then(async (res) => {
          if (res.status === 200) {
            const data = await res.data;
            // console.log("Data times\n", data.teams);
            setTeams(data.teams);
            // console.log("TIMES \n", teams);
          }
        })
        .catch((err) => console.log("Error:       ↓", err));
      return;
    }
  }

  return (
    <ContainerSelect id="equipe" onClick={getTeams}>
      <Select id="equipe">
        <>{ team ? team : "Escolha sua Equipe"}</>

        {showDropdownTeams ? (
          <FontAwesomeIcon icon={faChevronUp} />
        ) : (
          <FontAwesomeIcon icon={faChevronDown} />
        )}
      </Select>

      {showDropdownTeams ? (
        <ListTeams id="equipe">
          <ul>
            {teams
              ? teams.map((team) => {
                  return (
                    <li key={team.id} id={team.id} onClick={(e)=>selectTeam(e, team.id, team.name)}>
                      {team.name}
                    </li>
                  );
                })
              : "Sem times cadastrados..."}
          </ul>
        </ListTeams>
      ) : null}
    </ContainerSelect>
  );
}
