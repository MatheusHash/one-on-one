import type { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient, users } from "@prisma/client";
import bcrypt from "bcrypt";
import { token } from "../../../src/jwt";
import removeCookie from "../../../src/cookies/removeCookie.logout";


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
  const tokenJWT = token(user);
  return tokenJWT;
}
import { deleteCookie, getCookie } from "cookies-next";
async function LogOut() {
    console.log("getcookie:::>", getCookie('userLogged'));
  deleteCookie("userLogged");
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    case "POST": {
        const hasCookie = request.cookies?.userLogged || null
        if(hasCookie){
            await removeCookie();
            console.log(hasCookie);
        }
      return response.status(200).redirect("/login");
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
