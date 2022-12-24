import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";
type Data = {
  user?: object;
  UserCreated?: object;
  message?: string;
  mensagem?: string;
  colaboradores?: string | object | any
  users?: Array<users>
};

// TO DO
/**
 * Criar uma função para verificar se o email do usuario já esta cadastrado
 */

async function criarUsuario(usuario: users, company: object | any) {
  const prisma = new PrismaClient();
  const { name, email, tel, password, company_id }: string | null | any = usuario;

  const hash: string = (await bcrypt.hash(password, 4)) + "1on1";
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
    return { user, mensagem: `Sucesso ao cadastrar ${user}` };
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
    return { user, mensagem: `Sucesso ao cadastrar ${user}` };
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

async function editUserField(field:object | any, id_user: string) {
  
  const prisma = new PrismaClient();
  const updatedField = prisma.users.update({where:{ id: id_user}, data:{ name: field, }})
}

async function getAllUsers() {
  const prisma = new PrismaClient();
  const users = await prisma.users.findMany();
  return users;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
      console.log(request.body);
      // recebendo um usuario principal e um array de usuarios collaboradores no body da requisicao
      const {
        mainUser,
        collaborators,
        company,
      }: users | Array<users> | null | any = request.body;
      console.log("Dados da requisicao:\n", mainUser);
      console.log("Dados da requisicao:\n", collaborators);

      const { user, mensagem } = await criarUsuario(mainUser, company);

      if (collaborators?.length > 0 && user) {
        const colaboradores: any  = await criarUsuariosCollaboradores(
          collaborators,
          user.company_id
        );
        return response.status(200).json({ colaboradores });
      }
      console.log(mensagem);

      return response.status(200).json({ user, mensagem });
    }
    case "PUT":{
      const {userField, id_user } = request.body
      if(userField){
        await editUserField(userField, id_user);
        response.status(200).json({ message: `Sucesso ao atualizar o campo ${userField}` });
      }
      break;
    }
    case "GET":{
      const users = await getAllUsers(); 
      return response.status(200).json({ users });
    }

  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
