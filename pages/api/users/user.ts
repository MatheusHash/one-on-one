import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";
type Data = {
  user?: object;
  UserCreated?: object;
  message?: string;
};
type Company = {
  name: string;
  email?: string;
  cnpj?: string;
  users?: Array<User>;
};

type User = {
  name: string;
  email?: string;
  password?: string;
  permission?: number;
  notaMedia?: number;
  company_id?: string;
  company: Company;
};

type CreateUser = {
  main: User;
  collaborators: Array<users>;
};

type Collaborator = {
  name: string;
  email: string;
  password?: string;
  company_id: string;
};

// TO DO
/**
 * Criar uma função para verificar se o email do usuario já esta cadastrado
 */

async function CreateUser(users: CreateUser) {
  console.log(users);
  const prisma = new PrismaClient();
  prisma.$connect();

  // users.users == Usuarios somente com email {Colaboradores}
  const userMain = users.main;
  
  
  const user = await prisma.users.create({
    data: {
      email: userMain.email,
      name: userMain.name,
      password: userMain.password,
      permission: userMain.permission,
      company: {
        create: {
          name: userMain.company.name,
        },
      },
    },
    include: {company: true}
  });
  console.log("Usuario criado",user);

  // const basePasswordBcrypt = "pwd"; // Constante para utilizar no Salt da função hash de geracao de senha
  // userMain.password = await bcrypt.hash(basePasswordBcrypt, 4);

  // const UserCreated = await prisma.users.create({ data: userMain });

  // const collaborators: Array<Collaborator> = users?.collaborators ?? [];
  // if (collaborators.length) {
  //   // const companyId = UserCreated.company_id;

  //   let pass; // => Senha que será gerada com o bcrypt para cada usuario

  //   for (let index = 0; index < collaborators.length; index++) {
  //     pass = (await bcrypt.hash(basePasswordBcrypt, 4)) + "oneonone";
  //     if (!collaborators[index].name)
  //       collaborators[index].name = collaborators[index].email;
  //     collaborators[index].password = pass;
  //   }

  //   const newCollaborators = await prisma.users.createMany({
  //     data: collaborators,
  //   });

  //   return {
  //     UserCreated,
  //     message: `${newCollaborators.count} colegas cadastrados com sucesso!`,
  //   };
  // }

  return { user };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
      console.log("Metodo POST");
      // recebendo os usuarios da requisicao
      const usuarios: CreateUser = request.body;
      console.log("Dados da requisicao:\n", usuarios);

      const { user  } = await CreateUser(usuarios);

      return response.status(200).json({ user });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  response.status(400).json({ message: "Not Found" });
}
