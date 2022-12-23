import styled from "styled-components";
import theme from "../../../../util/theme";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${theme.InputLoginBackground};
    width: 340px;
    height: 45px;
    padding: 0px 10px ;
    color: ${theme.InputLoginColor};
    border: solid 1px ${theme.InputBorder};
    border-radius: 2px;

    margin:5px 0;
`

export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: hidden;
    background: transparent;
    color: ${theme.InputLoginColor};

    :focus{
        outline: none;
        }
    ::placeholder{
        color: ${theme.InputLoginColor};
    }
`

export const Icon = styled.span`
margin-right: 15px;
`