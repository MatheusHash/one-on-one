import React from 'react'
import * as S from './styles'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faDoorOpen } from '@fortawesome/pro-thin-svg-icons'
import Image from 'next/image'
import myProfilePicture from '../../../public/myProfilePicture.jpeg'


const MenuLinks = ()=>{
    return(
        <S.Container>
            <S.Navigation>
                <S.Button><FontAwesomeIcon icon={faBuilding} size='xl'/> Equipes</S.Button>
                <S.Button><FontAwesomeIcon icon={faBuilding} size='xl'/> one on one</S.Button>
                <S.Button><FontAwesomeIcon icon={faBuilding} size='xl'/> Minha Empresa</S.Button>
            </S.Navigation>

            <S.MenuFooter>
                <S.User>
                    
                    <S.Button>
                        <div>
                            <Image src={myProfilePicture} alt='IMG' width='24' height='24' />
                        </div>
                        Nome do usuário
                     </S.Button>
                </S.User>

                <S.Logout>
                    
                    <S.Button><FontAwesomeIcon icon={faDoorOpen} size='xl' /> Nome do usuário</S.Button>
                </S.Logout>
            </S.MenuFooter>
        </S.Container>
    )

}

export default MenuLinks