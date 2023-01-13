import styled from "styled-components";
import theme from "../../../../util/theme";

export const Container = styled.section`
    height: 100%;
    display: flex;
    flex-direction: column;
`

export const Header = styled.header`
    display: flex;
    justify-content: space-around;
    width: 100%;
    border-bottom: solid 1px ${theme.BorderProfileColor};
`
export const TextAction = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: ${props => props.color ? props.color :  '#FFFFFF'} ;
    :hover{
        color: ${theme.TextNavigationProfile};
        cursor: pointer;
    }

    span{
        font-weight: 700;

    }
`