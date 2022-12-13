import React from "react"
import type { ReactNode } from "react"
import * as S from './style'

import MenuLinks from "../MenuLinks"

import { InputSearch } from "../Input"
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons"

interface Props {
    children: ReactNode
}

 const MainLayout = ({children}: Props) =>{

    return(
            <S.GridMainLayout>
                <S.Main>
                    <S.Menu>
                        <h1>One On One</h1>

                        <MenuLinks/>
                    </S.Menu>
                </S.Main>

                <S.Content>
                    <S.Header>
                            {/* <S.InputSearch placeholder="Pesquisar 1on1 ou Pessoa" type="text" /> */}
                            <InputSearch Placeholder="Pesquisar 1on1 ou Pessoa" Icon={faMagnifyingGlass} />
                            <S.AddButton>Adicionar 1on1 +</S.AddButton>
                    </S.Header>

                    <S.Section>{children}</S.Section>

                </S.Content>

            </S.GridMainLayout>
    )
}

export default MainLayout

