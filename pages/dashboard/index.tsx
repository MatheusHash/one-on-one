import React, { ReactNode } from 'react';


import MainLayout from '../../assets/components/Layouts/Main/MainLayout';
import { getCookie } from 'cookies-next';
const Home = ()=> {

    const cookie = getCookie('userLogged');
    console.log('Cookie',cookie);

  return (
    <>
        Dashboard
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <MainLayout>{page}</MainLayout>
  )
}