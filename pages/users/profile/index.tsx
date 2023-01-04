import React, { ReactNode } from "react";
import MainLayout from "../../../assets/components/Layouts/Main/MainLayout";
import UserProfile from "../../../assets/components/Users/profile";
import { isValid } from "../../../src/jwt/isValidToken";

import * as jose from "jose";
import { users } from "@prisma/client";

const Profile = (user: users) => {
  console.log('first data',user)
  return (
    <>
      <UserProfile Data={user} />
    </>
  );
};

export default Profile;

Profile.getLayout = function getLayout(page: ReactNode) {
  return <MainLayout>{page}</MainLayout>;
};

export async function getServerSideProps(context: {
  req: { cookies: { userLogged: string } };
}) {
  // console.log( 'tchee',req.req.rawHeaders)
  console.log("tchee", context.req.cookies.userLogged);
  const cookie = context.req.cookies.userLogged;
  const payload: jose.JWTPayload = await isValid(cookie);
  const user_id: unknown = payload.user.id;

  console.log(payload);

  const user = await fetch(
    `http://localhost:3000/api/users/user?id=${user_id}`
  ).then((res) => res.json());
  console.log("USER: \n", user);
  return {
    props: {
      user,
    }, // will be passed to the page component as props
  };
}
