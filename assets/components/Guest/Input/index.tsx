import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Placeholder: string
    Icon: IconProp
    Type: string
    HandleChange: KeyboardEvent | any
    Id: string 
}

export function Input({Placeholder, Icon, Type,Id, HandleChange }: Props){
    return(
        <S.Div>
            <S.Input id={Id} onChange={(e)=>HandleChange(e)} type={Type} placeholder={Placeholder} required/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}