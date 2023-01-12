import React, { useEffect, useState } from "react";
import {
  Screen,
  Popup,
  ContentPopUp,
  TitleHeader,
  Title,
  CardGroup,
  Card,
  PictureUserSelected,
  TextChoose,
  LabelChooseUser,
  UserRole,
  InputCard,
  CardBody,
  ListUsers,
  Success,
} from "./styles";
import SelectInput from "../SelectInput";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRight,
  faPlus,
  faUser,
  faUserGroup,
} from "@fortawesome/pro-thin-svg-icons";
import DateInput from "../DateInput";
import ButtonSubmit from "../Guest/ButtonSubmit";
import axios from "axios";
import { company, users } from "@prisma/client";
import { Button, User } from "../MenuLinks/styles";
import Image from "next/image";
import { Input } from "../Guest/Input";

interface OneOnOne {
  name: string;
  company_id: string;
  team_id: string;
  team_name: string;
  manager_id: string;
  collaborator_id: string;
}

export default function PopUp({ setShowPopUp, companyId, userId }) {
  const [success, setSuccess] = useState<string>("");
  const [listGestores, showGestores] = useState<boolean>(false);
  const [listColaboradores, showColaboradores] = useState<boolean>(false);
  const [digiteGestorAqui, setDigiteGestorAqui] = useState("Gestor");
  const [digiteColaboradorAqui, setDigiteColaboradoresAqui] =
    useState("Colaborador");

  const [searchManager, setSearchManager] = useState<string>("");
  const [searchCollaborators, setSearchCollaborators] = useState<string>("");

  const [selectedCollaborator, setSelectedCollaborator] =
    useState<users | null>();
  const [selectedGestor, setSelectedGestor] = useState<users | null>();

  const [showDropdownTeams, setShowDropdownTeams] = useState<boolean>(false);
  const [gestores, setGestores] = useState<Array<users>>([]);
  const [colaboradores, setCollaboradores] = useState<Array<users>>([]);

  const [oneonone, setOneonone] = useState<OneOnOne | null>({
    name: "",
    team_id: "",
    team_name: "",
    company_id: companyId,
    manager_id: "",
    collaborator_id: "",
  });

  async function showListUsers(e: any) {
    e.preventDefault();
    console.log(e.target.tagName);

    if (e.target.id == "equipe") {
      setShowDropdownTeams(true);
      return;
    }

    if (e.target.id == "gestor") {
      if (listGestores) return;
      showGestores((prev) => !prev);
      showColaboradores(false);
      setShowDropdownTeams(false);

      setDigiteGestorAqui("Digite...");
      setDigiteColaboradoresAqui("Colaborador");
      return;
    } else if (e.target.id == "colaborador") {
      if (listColaboradores) return;

      showColaboradores((prev) => !prev);
      setDigiteColaboradoresAqui("Digite...");
      setDigiteGestorAqui("Gestor");
      showGestores(false);
      setShowDropdownTeams(false);

      return;
    } else {
      if (!listColaboradores && !listGestores && !showDropdownTeams) return;

      setDigiteGestorAqui("Gestor");
      setDigiteColaboradoresAqui("Colaborador");
      showColaboradores(false);
      showGestores(false);
      setShowDropdownTeams(false);

      return;
    }
  }

  async function fetchUsers() {
    if (gestores?.length == 0) {
      await axios
        .get("/api/users/fetchMangerUsers", {
          params: { id: companyId, type: 1 },
        })
        .then((res) => {
          if (res.status === 200) {
            console.log("RES DO AXIOS");
            const data = res.data;
            // console.log("DATADATA →", rses.data);
            setGestores(data);
          }
        })
        .catch((err) => console.log(err));
    }

    if (colaboradores?.length == 0) {
      await axios
        .get("/api/users/fetchMangerUsers", {
          params: { id: companyId, type: 0 },
        })
        .then((res) => {
          if (res.status === 200) {
            const data = res.data;
            // console.log("DATADATA →", res.data);
            setCollaboradores(data);
          }
        })
        .catch((err) => console.log(err));
    }
  }

  useEffect(() => {
    fetchUsers();
  }, [setShowPopUp]);

  console.log("CompanyId", companyId);

  async function submitData(e) {
    e.preventDefault();
    console.log("ENVIAR DADOS DO ONEONONE\n");
    await axios
      .post("/api/oneonone/createOneonone", { oneonone })
      .then((res) => {
        if (res.status === 200) {
          console.log("Oneonone cadastrado com sucesso!!");
          console.log(res.data);
          setSuccess("Sucesso ao registrar: " + oneonone.name + "!");
        }
      })
      .catch((err) => console.log(err));

    console.log(oneonone);
    return;
  }

  async function handleSearchManagerChange(e) {
    console.log("onchange", searchManager);
    const { value }: string | any = e.target;
    setSearchManager((prev) => value);
  }
  async function handleSearchCollaboratorChange(e) {
    console.log("onchange", searchCollaborators);
    const { value }: string | any = e.target;
    setSearchCollaborators((prev) => value);
  }

  function selecionarGestor(e, user) {
    e.preventDefault();
    setSelectedGestor(user);
    setOneonone((prev) => ({
      ...prev,
      manager_id: user.id,
    }));
  }
  function selecionarColaborador(e, user) {
    e.preventDefault();
    setSelectedCollaborator(user);
    setOneonone((prev) => ({
      ...prev,
      collaborator_id: user.id,
    }));
  }
  function selectTeam(e, team_id, team_name) {
    e.preventDefault();
    setOneonone((prev) => ({
      ...prev,
      team_id,
      team_name,
    }));
  }

  function handleOneononeTitle(e) {
    setOneonone((prev) => ({
      ...prev,
      name: e.target.value,
    }));
  }

  return (
    <>
      <Screen
        onClick={() => {
          setShowPopUp();
        }}
      ></Screen>
      <Popup>
        {success ? (
          <Success>
            {success}
            <ButtonSubmit
              Submit={(e) => {
                e.preventDefault();
                setSuccess("");
                setSelectedCollaborator(null);
                setSelectedGestor(null);
                setOneonone({
                  name: "",
                  team_id: "",
                  team_name: "",
                  company_id: companyId,
                  manager_id: "",
                  collaborator_id: "",
                });
              }}
              Icon={faPlus}
            >
              {"Cadastrar novo OneOnOne"}
            </ButtonSubmit>
          </Success>
        ) : (
          <ContentPopUp
            onClick={(e) => {
              showListUsers(e);
            }}
          >
            <TitleHeader>
              <Title>REGISTRAR 1ON1</Title>
            </TitleHeader>

            <CardGroup>
              <Card>
                <CardBody id="gestor">
                  <LabelChooseUser id="gestor">
                    {selectedGestor ? (
                      <PictureUserSelected id="gestor">
                        <Image
                          id="gestor"
                          src={selectedGestor.profilePicture ?? ""}
                          alt={"img"}
                          width={"80"}
                          height={"80"}
                        />
                      </PictureUserSelected>
                    ) : (
                      <PictureUserSelected id="gestor">
                        <TextChoose id="gestor">
                          CLIQUE PARA ESCOLHER
                        </TextChoose>
                      </PictureUserSelected>
                    )}
                  </LabelChooseUser>

                  <UserRole id="gestor">
                    <InputCard
                      id="gestor"
                      placeholder={digiteGestorAqui}
                      onChange={(e) => handleSearchManagerChange(e)}
                      value={searchManager}
                    />
                    <FontAwesomeIcon icon={faUser} />
                  </UserRole>
                </CardBody>

                {listGestores ? (
                  <ListUsers id="gestor">
                    <ul>
                      {gestores
                        ? gestores.filter(item => item.name.includes(searchManager)).map((user) => {
                            return (
                              <li key={user.id} id={user.id}>
                                <User>
                                  <Button
                                    onClick={(e) => selecionarGestor(e, user)}
                                  >
                                    <>
                                      <div>
                                        <Image
                                          src={user.profilePicture ?? ""}
                                          alt="IMG"
                                          width={"24"}
                                          height={"24"}
                                        />
                                      </div>
                                      {user.name}
                                    </>
                                  </Button>
                                </User>
                              </li>
                            );
                          })
                        : "Sem resutados..."}
                    </ul>
                  </ListUsers>
                ) : null}
              </Card>
              <Card>
                <CardBody id="colaborador">
                  <LabelChooseUser id="colaborador">
                    {selectedCollaborator ? (
                      <PictureUserSelected id="colaborador">
                        {selectedCollaborator.profilePicture ? (
                          <Image
                            id="colaborador"
                            src={selectedCollaborator.profilePicture}
                            alt="IMG"
                            width={"80"}
                            height={"80"}
                          />
                        ) : (
                          <>
                            <FontAwesomeIcon icon={faUser} />
                            {selectedCollaborator.name}
                          </>
                        )}
                      </PictureUserSelected>
                    ) : (
                      <PictureUserSelected id="colaborador">
                        <TextChoose id="colaborador">
                          CLIQUE PARA ESCOLHER
                        </TextChoose>
                      </PictureUserSelected>
                    )}
                  </LabelChooseUser>

                  <UserRole>
                    <InputCard
                      id="colaborador"
                      placeholder={digiteColaboradorAqui}
                      value={searchCollaborators}
                      onChange={(e)=> handleSearchCollaboratorChange(e)}
                    />
                    <FontAwesomeIcon icon={faUser} />
                  </UserRole>
                </CardBody>

                {listColaboradores ? (
                  <ListUsers id="colaborador">
                    <ul>
                      {colaboradores
                        ? colaboradores.filter(item => item.name.includes(searchCollaborators)).map((user) => {
                            return (
                              <li key={user.id} id={user.id}>
                                <User>
                                  <Button
                                    onClick={(e) =>
                                      selecionarColaborador(e, user)
                                    }
                                  >
                                    <>
                                      <div>
                                        {user.profilePicture ? (
                                          <Image
                                            src={user.profilePicture}
                                            alt="IMG"
                                            width={"24"}
                                            height={"24"}
                                          />
                                        ) : (
                                          <FontAwesomeIcon icon={faUser} />
                                        )}
                                      </div>
                                      {user.name}
                                    </>
                                  </Button>
                                </User>
                              </li>
                            );
                          })
                        : "Sem resutados..."}
                    </ul>
                  </ListUsers>
                ) : null}
              </Card>
            </CardGroup>

            <Input
              Icon={faUserGroup}
              Type={"text"}
              Id={"titleOneonone"}
              Placeholder={"Digite o titulo para o 1ON1"}
              HandleChange={(e) => handleOneononeTitle(e)}
            />
            <SelectInput
              companyId={companyId}
              selectTeam={selectTeam}
              team={oneonone?.team_name ?? ""}
              showDropdownTeams={showDropdownTeams}
            />
            <DateInput />
            <ButtonSubmit
              Submit={(e) => {
                submitData(e);
              }}
              Icon={faArrowRight}
            >
              {"PROXIMO PASSO"}
            </ButtonSubmit>
          </ContentPopUp>
        )}
      </Popup>
    </>
  );
}
