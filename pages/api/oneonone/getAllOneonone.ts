import type { NextApiRequest, NextApiResponse } from "next";
import { oneonone, PrismaClient } from "@prisma/client";
import { Prisma } from "@prisma/client";
type Data = {
  message?: string;
  oneonones: Array<oneonone> | null;
};

async function getOneonones(userID: string): Promise<Array<oneonone> | null> {
  const prisma = new PrismaClient();

  const OneononeFromUser = await prisma.oneonone.findMany({
    where: {
      users_IDs: {
        hasSome: userID,
      },
    },
  });

  // console.log("OLha o teste maroto", OneononeFromUser);
  return OneononeFromUser;
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  console.log("BODY DATA: ", request.body);
  if (request.method === "GET") {
    const bodyData = request.query;
    // console.log(request.query);
    const id = bodyData?.userId ?? "";
    if (id){
      const OneononeFromUser: Array<oneonone> | null = await getOneonones(id);
    // console.log("Todas as one on one:\n", userWithOneonone);
    return response.status(200).json({ oneonones: OneononeFromUser });
  }
  return response.status(400).json({ oneonones: [] });
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({
    message: "Not Found",
    oneonones: [],
  });
}
