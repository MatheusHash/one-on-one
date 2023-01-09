import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { users } from "@prisma/client";
type Data = {
  user?: users | null;
  UserCreated?: object;
  message?: string;
  mensagem?: string;
  colaboradores?: string | object | any;
  users?: Array<users>;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

async function getCollaboratorsUsers(
  id: string,
  type: number
): Promise<users | string> {
  const prisma = new PrismaClient();
  const users: users | null = await prisma.users.findMany({
    where: { company_id: id, permission: type },
    select: {
      id: true,
      profilePicture: true,
      name: true,
      email: true,
    },
  });
  console.log(users);
  if (users) return users;
  return "Usuário não encontrado!";
}

async function getMangerUsers(
  id: string,
  type: number
): Promise<users | string> {
  const prisma = new PrismaClient();
  const users: users | null = await prisma.users.findMany({
    where: { company_id: id, permission: type },
    select: {
      id: true,
      profilePicture: true,
      name: true,
      email: true,
    },
  });
  console.log(users);
  if (users) return users;
  return "Usuário não encontrado!";
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log("OLHA A QUERY →", request.query);
  const type = parseInt(request.query.type);
  if (request.query.id) {
    if (request.method === "GET" && type === 1) {
      console.log("Buscanco Gestores");
      const users = await getMangerUsers(request.query.id.toString(), type);
      return response.status(200).json(users);  

    } else if (request.method === "GET" && type === 0) {
      console.log("Buscanco colaboradores");
      console.log('type: ', type)
      const users = await getCollaboratorsUsers(
        request.query.id.toString(),
        type
      );
      return response.status(200).json(users);
    }
  }
  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(500).json({ message: "Não encontrado" });
}
