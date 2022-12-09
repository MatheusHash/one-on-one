import * as S from './styles'

type Props = {
    children: string
}

function ButtonSubmit({children}: Props){
    return(
        <S.Div>
            <S.Button>{children}</S.Button>
        </S.Div>
    )
}

export default ButtonSubmit;