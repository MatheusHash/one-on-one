import React, { ReactNode } from 'react';

import { faGhost  } from '@fortawesome/pro-thin-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonSubmit from '../assets/components/ButtonSubmit';
import {Input} from '../assets/components/Input';
import MainLayout from '../assets/components/Layouts/Main/MainLayout';

const Home = ()=> {
  return (
    <>

      <Input Placeholder={'digite seu email'} Icon={faGhost}/>
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