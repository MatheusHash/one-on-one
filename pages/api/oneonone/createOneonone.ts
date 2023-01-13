import type { NextApiRequest, NextApiResponse } from "next";
import { oneonone, PrismaClient, teams } from "@prisma/client";
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

async function criarOneonone({ oneonone }) {
  const prisma = new PrismaClient();
  console.log("oneonone to create", oneonone);

  delete oneonone.team_name;
  const Oneonone = oneonone;


  console.log("ONEONONE DA FUNÇÃO DE CRIAÇÃO", Oneonone);
  const newOneonone: oneonone = await prisma.oneonone.create({
    data: Oneonone,
  });
  if (!newOneonone) return { message: "Falha ao criar usuário principal!" };
  return { newOneonone, message: `Sucesso ao cadastrar ${newOneonone.name}` };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log("BODY DATA: ", request.body);
  if (request.method === "POST") {
    
    const bodyData: teams = request.body;
    const oneonone = await criarOneonone(bodyData);
    console.log("Time cadastrado:\n", oneonone);
    return response.status(200).json(oneonone);
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
