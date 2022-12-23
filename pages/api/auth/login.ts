import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, users } from "@prisma/client";
import bcrypt from "bcrypt";
type Data = {
  user?: object;
  UserCreated?: object;
  message?: string;
};
type LoginData = {
    email: string
    password: string
} 

async function Login(loginData: LoginData) {

    const prisma = new PrismaClient();
    const user: users | null | any  = prisma.users.findFirst({
        where: {
            email: loginData.email
        },
         include: {company: true,}
        });

    if(!user)
        return {message: 'Usuário ou senha inválidos!'}

    const verifyPassword = bcrypt.compare(loginData.password, user.password)
    if(!verifyPassword)
        return {message: 'Usuário ou senha inválidos!'}
    return { user, message: 'Sucesso ao realizar o login!' };
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
        const {user, message}: users | null | object | any  = Login(request.body);
        if(user)
          return response.status(200).json({ user, message });
        else 
          return response.status(400).json({ message });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  response.status(400).json({ message: "Not Found" });
}
