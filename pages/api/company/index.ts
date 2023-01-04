import type { NextApiRequest, NextApiResponse } from "next";
import { company, PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { users } from "@prisma/client";
type Data = {
  message?: string;
};

async function updateCompanyField(field, id: string) {
  console.log(id);
  const prisma = new PrismaClient();
  for (const key in field) {
    if (field.hasOwnProperty(key)) {
      const value = field[key];
      await prisma.company.update({
        where: { id },
        data: {
          [key]: value,
        },
      });
      console.log(`${key}: ${value}`);
    }
  }
}

async function findCompany(id: string): Promise<company | string>{ 
  const prisma = new PrismaClient();
  const company = await prisma.company.findFirst({ where: { id } });
  console.log('Empresa →',company);
  if (company) return company;
  return 'Empresa não encontrada!';
}

export default async function handler(
  request: NextApiRequest,
  response: NextApiResponse<Data>
) {
  switch (request.method) {
    
    case "PUT": {
      const { field } = request.body;
      const id = request.body.companyId;
      console.log(request.body, "\n", field);
      if (field) {
        await updateCompanyField(field, id);
        return response
          .status(200)
          .json({ message: `Sucesso ao atualizar o campo ${field}` });
      }
      break;
    }
    case "GET": {
        console.log("query →", request.query);
        const company = await findCompany(request.query.id.toString());
    
        return response.status(200).json({ company });
    }
  }

  // resposta caso nenhum metodo preparado tenha sido utilizado
  return response.status(400).json({ message: "Not Found" });
}
