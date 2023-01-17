import React, { useEffect, useState } from "react";
import DynamicInputs from "../DynamicInputs";
import { UserCard } from "../UserCard";
import { ContainerListUsersCard } from "./style";
import axios from "axios";
import { users } from "@prisma/client";

type Props = { 
    companyId: string | undefined | null
}
export default function ListCardUser({companyId}: Props) {
  const [users, setUsers] = useState<users[]>();
    console.log('COMPANYID',companyId)
  async function getUsers(id: string) {
    if(id){
        console.log('comecando a busca')
        await axios.get("/api/users/fetchAllUsersCompany", { params: {id: companyId} })
          .then((res) => {
            if (res.status === 200) {
              console.log(res.data);
              setUsers(res.data.users);
            }
          })
          .catch((err) =>{
            console.log(err);
            return err;
          })
          return;
    }
      return;
  }

  useEffect(() => {
        getUsers(companyId?.toString() ?? '');
    console.log('users',users)
  }, []);

  return (
    <ContainerListUsersCard>
        {
          users?.map((user)=>{
            return(
              <UserCard key={user.id} User={user} />
            )
          })
        }
      {/* <DynamicInputs /> */}
    </ContainerListUsersCard>
  );
}
