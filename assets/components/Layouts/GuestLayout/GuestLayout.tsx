import { ReactNode } from "react"
import React from "react"
import OneOnOne from "../../../../public/OneOnOne.svg";
import Image from "next/image";
import * as S from './styles'
import HeaderContent from "../../Guest/Header/HeaderContent"
interface Props{
    children: ReactNode
}
const GuestLayout = ({children}: Props) =>{
    return(
        <S.GridGuestLayout>
            <S.Space></S.Space>
            <S.Content>
                <S.Header>
                    <S.BrandStyle>
                        <Image src={OneOnOne} alt="One On One" />
                    </S.BrandStyle>
                    <HeaderContent />
                </S.Header>
                {children}
            
            </S.Content>
        </S.GridGuestLayout>
    )
}

export default GuestLayout;