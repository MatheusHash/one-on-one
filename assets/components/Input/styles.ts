import styled from "styled-components";

export const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    width: 280px;
    height: 40px;
    padding: 0px 10px ;
`


export const Input = styled.input`
    width: 100%;
    height: 100%;
    border: hidden;
    background: transparent;
    :focus{
        outline: none;
        }
`



export const ContainerSearch = styled.div`
    display: flex;
    padding: 2px;
    justify-content: space-between;
    align-items: center;
    background-color: #13051D;
    color: #A59AD4;

    border: 1px solid #1E0F29;
    border-radius: 4px;

    width: 340px;
    height: 45px;

    :focus{
        border: 1px solid #A59AD4;
    }
`
export const InputSearch = styled.input`
    margin: 10px 10px;

    background: transparent;
    color: #A59AD4;
    box-shadow: 0 0 0 0;
    border: 0 none;
    width: 100%;
    height: 45px;
    outline: 0;
    ::placeholder{
        color: #A59AD4;
    }
`

export const Icon = styled.span`
margin-right: 15px;
`