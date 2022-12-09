import * as S from './styles'

type Props = {
    Placeholder: string
}

function Input({Placeholder}: Props){
    return(
        <S.Div>
            <S.Input placeholder={Placeholder}/>
        </S.Div>
    )
}

export default Input;