import React from "react"
import type { ReactNode } from "react"
import * as S from './style'

import MenuLinks from "../../MenuLinks"

import { InputSearch } from "../../Input"
import { faMagnifyingGlass } from "@fortawesome/pro-thin-svg-icons"
import { faGrid2 } from "@fortawesome/pro-thin-svg-icons"
import OneOnOne from '../../../../public/OneOnOne.svg'
import Image from "next/image"


interface Props {
    children: ReactNode
}

 const MainLayout = ({children}: Props) =>{

    return(
            <S.GridMainLayout>
                <S.Main>
                    <S.Menu>
                        <S.BrandStyle>
                            <Image src={OneOnOne} alt="One On One" width='100' />
                        </S.BrandStyle>

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

