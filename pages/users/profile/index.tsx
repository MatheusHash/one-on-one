import React, { ReactNode } from 'react';
import MainLayout from '../../../assets/components/Layouts/Main/MainLayout';

import { getCookie } from 'cookies-next';
const Profile = ()=> {

    const cookie = getCookie('userLogged');

  return (
    <>
        Dashboard
    </>
  )
}

export default Profile

Profile.getLayout = function getLayout(page: ReactNode) {
  return (
      <MainLayout>{page}</MainLayout>
  )
}