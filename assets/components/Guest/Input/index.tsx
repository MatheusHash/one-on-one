import * as S from './styles'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconProp } from '@fortawesome/fontawesome-svg-core'
import React from 'react';

type Props = {
    Placeholder: string
    Icon: IconProp
    Type: string
}

export function Input({Placeholder, Icon, Type}: Props){
    return(
        <S.Div>
            <S.Input type={Type} placeholder={Placeholder}/>
            <S.Icon> 
                <FontAwesomeIcon icon={Icon} size="lg"/>
            </S.Icon>
        </S.Div>
    )
}