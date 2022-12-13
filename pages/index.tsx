import React, { ReactNode } from 'react';
import type { NextPage } from 'next';

import { faGhost  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonSubmit from '../assets/components/ButtonSubmit';
import {Input} from '../assets/components/Input';
import MainLayout from '../assets/components/Layouts/MainLayout';

const Home: NextPage = ()=> {
  return (
    <>
      
      <Input Placeholder={'digite seu email'} Icon={'function'}/>
      <FontAwesomeIcon icon={faGhost} fontSize='200px' />
      <ButtonSubmit>Login</ButtonSubmit>
        
    </>
  )
}

export default Home

Home.getLayout = function getLayout(page: ReactNode) {
  return (
      <MainLayout>{page}</MainLayout>
  )
}