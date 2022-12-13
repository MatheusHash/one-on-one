import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Placeholder: string
    Icon: IconProp
}

export function Input({Placeholder, Icon}: Props){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}

export function InputSearch({Placeholder, Icon}: Props){
    return(
        <S.ContainerSearch>
            <S.InputSearch placeholder={Placeholder}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.ContainerSearch>
    )
}

