import React, { ReactNode } from 'react';
import GuestLayout from '../../assets/components/Layouts/GuestLayout/GuestLayout';



const Home = ()=> {
  return (
    <>
      hello
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <GuestLayout>{page}</GuestLayout>
  )
}