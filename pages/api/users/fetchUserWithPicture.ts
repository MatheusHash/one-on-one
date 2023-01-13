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


async function findUserWithPicture(id: string): Promise<users | string> {
  const prisma = new PrismaClient();
  const user: users | null = await prisma.users.findFirst({
    where: { id },
    select: {id:true, profilePicture: true, name:true,email: true, company: true },
  });
  // console.log(user);
  if (user) return user;
  return "Usuário não encontrado!";
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
    // console.log("Query",request.query)
  if (request.method === "GET" && request.query.id) {
    // console.log("Get the image profile", request.query);
    const user = await findUserWithPicture(request.query.id.toString());

    return response.status(200).json(user);
  }
  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Não encontrado" });
}
