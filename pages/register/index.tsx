import React, { ReactNode } from 'react';
import GuestLayout from '../../assets/components/Layouts/GuestLayout/GuestLayout';



const Home = ()=> {
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