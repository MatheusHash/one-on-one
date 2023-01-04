import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";
type Data = {
  user?: users | null;
  UserCreated?: object;
  message?: string;
  mensagem?: string;
  colaboradores?: string | object | any;
  users?: Array<users>;
};

// TO DO
/**
 * Criar uma função para verificar se o email do usuario já esta cadastrado
 */

async function criarUsuario(usuario: users, company: object | any) {
  const prisma = new PrismaClient();
  const { name, email, tel, password, company_id }: string | null | any =
    usuario;
  console.log("USUARIO", usuario);
  const hash: string = await bcrypt.hash(password, 4);
  console.log(hash);
  if (company) {
    const user: users | null = await prisma.users.create({
      data: {
        name,
        email,
        password: hash,
        tel,
        company: { create: { name: company.name } },
      },
    });
    if (!user) return { mensagem: "Falha ao criar usuário principal!" };
    return { user: user, mensagem: `Sucesso ao cadastrar ${user}` };
  } else {
    const user: users | null = await prisma.users.create({
      data: {
        name,
        email,
        password: hash,
        tel,
        company_id,
      },
    });
    if (!user) return { mensagem: "Falha ao criar usuário principal!" };
    return { user, mensagem: `Sucesso ao cadastrar ${user.name}` };
  }
}

async function criarUsuariosCollaboradores(
  collaborators: Array<users>,
  id_company: string
) {
  const prisma = new PrismaClient();

  let pass;
  for (let index = 0; index < collaborators.length; index++) {
    pass = await bcrypt.hash("oneonone", 4);

    for (let index = 0; index < collaborators.length; index++) {
      collaborators[index].name =
        collaborators[index]?.email ?? "Nome do Usuario";
      collaborators[index].password = pass;
      collaborators[index].company_id = id_company;
    }
  }

  const users = await prisma.users.createMany({ data: collaborators });
  if (users) return { message: `Sucesso ao convidar ${users.count} colegas!` };
  return { message: `Falha ao convidar colegas!` };
}

async function getAllUsers() {
  const prisma = new PrismaClient();
  const users = await prisma.users.findMany();
  return users;
}

async function updateUserField(field, id: string) {
  console.log(id);
  const prisma = new PrismaClient();
  for (const key in field) {
    if (field.hasOwnProperty(key)) {
      const value = field[key];
      await prisma.users.update({
        where: { id },
        data: {
          [key]: value,
        },
      });
      console.log(`${key}: ${value}`);
    }
  }
}

async function findUser(id: string): Promise<users | string> {
  const prisma = new PrismaClient();
  const user = await prisma.users.findFirst({ where: { id } });
  console.log(user);
  if (user) return user;
  return 'Usuário não encontrado!'
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  if (request.method === "GET" && request.body.userId) {
    console.log(request.body);
    return response.status(200).json({ message: "deu meio que certo" });
  }

  if (request.method === "GET" && request.query.id) {
    console.log("aqui", request.query);
    const user = await findUser(request.query.id.toString());

    return response.status(200).json(user);
  }

  switch (request.method) {
    case "POST": {
      // console.log(request.body);
      // recebendo um usuario principal e um array de usuarios collaboradores no body da requisicao
      const { mainUser, team, company }: users | Array<users> | null | any =
        request.body;

      const { user, mensagem } = await criarUsuario(mainUser, company);
      console.log("user cadastrado:\n", user);
      if (team?.length > 0 && user) {
        const colaboradores: { message: string } =
          await criarUsuariosCollaboradores(team, user.company_id);
        return response.status(200).json({ user, colaboradores });
      }

      return response.status(200).json({ user, mensagem });
    }
    case "PUT": {
      const { field } = request.body;
      const id = request.body.userId;
      console.log(request.body, "\n", field);
      if (field) {
        await updateUserField(field, id);
        return response
          .status(200)
          .json({ message: `Sucesso ao atualizar o campo ${field}` });
      }
      break;
    }
    case "GET": {
      const users = await getAllUsers();
      return response.status(200).json({ users });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
