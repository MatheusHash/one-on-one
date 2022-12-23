import {Button, ContentButton} from './styles'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IconProp } from '@fortawesome/fontawesome-svg-core'

interface Props{
    children: string
    Icon: IconProp
    Submit: MouseEvent
}

export default function ButtonSubmit({children, Icon, Submit}: Props){
    return(
        <Button onClick={ (e)=>  Submit(e)}>
            <ContentButton>
                {children}
                <FontAwesomeIcon icon={Icon}/>
            </ContentButton>
        </Button>
    )
}