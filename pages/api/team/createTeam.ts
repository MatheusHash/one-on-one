import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, teams } from "@prisma/client";

type Data = {
  message?: string;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "10mb",
    },
  },
};

async function criarTime(team: teams) {
  const prisma = new PrismaClient();
  console.log("Team to create", team);

  const newTeam: teams = await prisma.teams.create({
    data: team,
  });
  if (!newTeam) return { message: "Falha ao criar usuário principal!" };
  return { newTeam, message: `Sucesso ao cadastrar ${newTeam.name}` };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
    console.log("BODY DATA: ",request.body);
  if (request.method === "POST") {
    const bodyData: teams = request.body;
    const team = await criarTime(bodyData);
    console.log("Time cadastrado:\n", team);
    return response.status(200).json(team);
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
