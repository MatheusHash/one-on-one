import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { users } from "@prisma/client";
type Data = {
  user?: users | null;
  UserCreated?: object;
  message?: string;
  mensagem?: string;
  colaboradores?: string | object | any;
  users?: Array<users> | string;
};

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "50mb",
    },
  },
};

async function getUsers(id: string): Promise<users[] | string> {
  const prisma = new PrismaClient();
  const users: users[] | any =
    await prisma.users.findMany({
      where: { company_id: id },
      select: {
        id: true,
        profilePicture: true,
        name: true,
        notaMedia: true,
        equipe: true,
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
  if (request.query.id) {
    if (request.method === "GET") {
      console.log("Buscanco todos os usuarios da empresa");
      const users: users[] | string = await getUsers(
        request.query.id.toString()
      );
      return response.status(200).json({ users });
    }
  }
  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(500).json({ message: "Não encontrado" });
}
