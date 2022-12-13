import React from 'react'
import * as S from './styles'

const MenuLinks = ()=>{
    return(
        <S.Container>
            <S.Navigation>
                <S.Button>Setor</S.Button>
                <S.Button>one on one</S.Button>
                <S.Button>equipes</S.Button>
                <S.Button>empresa</S.Button>
            </S.Navigation>

            <S.MenuFooter>
                <S.User>
                    <div></div>
                    <S.Button>Nome do usuário</S.Button>
                </S.User>

                <S.Logout>
                    <div></div>
                    <S.Button>Nome do usuário</S.Button>
                </S.Logout>
            </S.MenuFooter>
        </S.Container>
    )

}

export default MenuLinks