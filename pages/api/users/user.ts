import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";

type Data = {
  user?: object;
  UserCreated?: object;
  message?: string;
};

type User = {
  name: string;
  email?: string;
  password?: string;
  permission?: number;
  notaMedia?: number;
  company_id?: string;
};

type CreateUser = {
  main: User;
  collaborators: [];
};

type Collaborator = {
  name: string;
  email: string;
  password?: string;
  company_id: string;
};

async function CreateUser(users: CreateUser) {
  console.log(users);
  const prisma = new PrismaClient();
  prisma.$connect();

  // users.users == Usuarios somente com email {Colaboradores}
  const userMain = users.main;

  const basePasswordBcrypt = "pwd"; // Constante para utilizar no Salt da função hash de geracao de senha
  userMain.password = await bcrypt.hash(basePasswordBcrypt, 4);

  const UserCreated = await prisma.users.create({ data: userMain });

  console.log("Usuario principal cadastrado: > \n", UserCreated);

  const collaborators: Array<Collaborator> = users?.collaborators ?? [];
  if (collaborators.length) {
    // const companyId = UserCreated.company_id;

    let pass; // => Senha que será gerada com o bcrypt para cada usuario

    for (let index = 0; index < collaborators.length; index++) {
      pass = (await bcrypt.hash(basePasswordBcrypt, 4)) + "oneonone";
      if (!collaborators[index].name)
        collaborators[index].name = collaborators[index].email;
      collaborators[index].password = pass;
    }

    const newCollaborators = await prisma.users.createMany({
      data: collaborators,
    });

    return { UserCreated, message: `${newCollaborators.count} colegas cadastrados com sucesso!` };
  }

  return { UserCreated };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
      console.log("Metodo POST");
      // recebendo os usuarios da requisicao
      const usuarios = request.body;
      console.log("Dados da requisicao:\n", usuarios);
      
      const {UserCreated, message} = await CreateUser(usuarios);

      return response.status(200).json({ UserCreated, message });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  response.status(400).json({ message: "Not Found" });
}
