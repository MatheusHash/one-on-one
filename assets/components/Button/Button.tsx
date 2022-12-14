import React from 'react';
import * as S from './styles'


import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

type Props = {
    children: string
    Icon: IconProp
}

function ButtonWithIconLeft({children, Icon}: Props){
    return(
        <S.Container>
            <S.Button>
                <S.Icon> 
                    <FontAwesomeIcon icon={Icon} size="lg"/>
                </S.Icon>
                {children}
            </S.Button>
        </S.Container>
    )
}




export default ButtonWithIconLeft;