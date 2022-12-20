import React, { ReactNode } from 'react';
import GuestLayout from '../../assets/components/Layouts/GuestLayout/GuestLayout';
import { useRouter } from "next/router"; 

import { getCookie } from "cookies-next";


const Home = ()=> {
  const router = useRouter();
  const verifyIfCookieExists = async ()=> {
    const cookieExists =  getCookie('userLogged');
    if(cookieExists){
        router.push('/dashboard')
    }
}
verifyIfCookieExists();

  return (
    <div>
      <h1>Titulo</h1>
    </div>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}