import { ReactNode } from "react"
import React from "react"

import * as S from './styles'
interface Props{
    children: ReactNode
}
const GuestLayout = ({children}: Props) =>{
    return(
        <S.GridGuestLayout>
            <S.Space>a</S.Space>
            <S.Content>{children}</S.Content>
        </S.GridGuestLayout>
    )
}

export default GuestLayout;