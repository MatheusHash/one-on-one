import { faGhost  } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import ButtonSubmit from '../assets/components/ButtonSubmit';
import Input from '../assets/components/Input';

export default function Home() {
  return (
    <>
      <Input Placeholder={'digite seu email'}/>
      <FontAwesomeIcon icon={faGhost} fontSize='200px' />
      <ButtonSubmit>Login</ButtonSubmit>
    </>
  )
}
