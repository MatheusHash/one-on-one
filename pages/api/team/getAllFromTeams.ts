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

async function getCompanyTeams(data: any) {
  const prisma = new PrismaClient();
  console.log("Company id to get teams", data);
  const teams: Array<teams> = await prisma.teams.findMany({
    where: data,
  });
//   console.log(teams)
  if (!teams)
    return { message: "Falha ao buscar times da empresa :" + data + "↓" };
  return {
    teams,
    message: `Sucesso ao buscar times da empresa ${data} ↑`,
  };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log("Query DATA: ", request.query);
  if (request.method === "GET") {
    const data = request.query;
    // const data = queryData;
    console.log("Company id",data)
    if (data) {
      const teams = await getCompanyTeams(data);
      if (!teams) {
        return response
          .status(400)
          .json({ message: "Nenhum time encontrado para esta empresa!" });
      }
      return response.status(200).json(teams);
    } else {
      return response.status(400).json({ message: "Envie o ID  da company" });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
