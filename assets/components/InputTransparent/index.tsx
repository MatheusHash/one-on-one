import styled from "styled-components"
import theme from "../../../util/theme"
export const InputTransparent = styled.input`
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    background-color: transparent;
    border: none;
    color: #fff;
    ::placeholder{
        color: #F3426C;
    }
    :focus{
        outline: none;
        background-color: ${theme.colorThird};
    }
`