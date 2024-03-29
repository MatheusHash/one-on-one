import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, users } from "@prisma/client";
import bcrypt from "bcrypt";
import { token } from "../../../src/jwt";

type Data = {
  user?: object;
  UserCreated?: object;
  message?: string;
  tk?: string;
};
type LoginData = {
  email: string;
  password: string;
};

async function getToken(user: users) {
  const { company_id, id, name } = user;
  const tokenJWT = token({ company_id, id, name });
  return tokenJWT;
}

async function Login(loginData: LoginData) {
  const prisma = new PrismaClient();
  let user: users | null | any = await prisma.users.findFirst({
    where: {
      email: loginData.email,
    },
    select: {profilePicture: true,id: true, name: true,company_id: true, password: true, company: true,},
  });
  if (!user) return null;

  const verifyPassword = await bcrypt.compare(
    loginData.password,
    user.password
  );

  if (!verifyPassword) {
    user = null;
    return user;
  }
  return user;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
      // console.log(request.body);
      const user: users | null | object | string | any = await Login(
        request.body
      );

      if (user) {
        // console.log("Login user\n",user);
        const tk = await getToken(user);
        return response.status(200).json({ user, tk });
      } else
        return response
          .status(400)
          .json({ message: "USUÁRIO OU SENHA INVÁLIDA!" });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
