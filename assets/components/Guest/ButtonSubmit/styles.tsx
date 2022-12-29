import styled from "styled-components";
import theme from "../../../../util/theme";

export const Button = styled.button`
    width: 340px;
    height: 45px;
    background-color: ${theme.colorButton};
    padding: 0 10px;
    border: none;
    border-radius: 2px;
    box-shadow: 0px 0px 25px rgba(117, 89, 242, 0.25);
    border-radius: 4px;
    :hover{
        cursor: pointer;
    }
`

export const ContentButton = styled.div`
    display: flex;
    padding-left: 40%;
    justify-content: space-between;
    align-items: center;
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    padding-right: 15px;

`