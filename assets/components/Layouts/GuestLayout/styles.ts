import styled from "styled-components";
import theme from "../../../../util/theme";

export const GridGuestLayout = styled.div`
    display: grid;
    grid-template-columns: calc(100vw - 500px) 500px;
    grid-template-rows: 100vh;

    /* height: 100vh; */
    /* width: 100vw; */
    grid-column: auto;
`
export const Space = styled.div`
    display: grid;
    width: 100%;
    background-color: ${theme.colorSecond};
`
export const Content = styled.div`
    width: 100%;
    display: grid;
    background-color: ${theme.colorPrimary};
    padding: 50px;
    display: grid;
    justify-content: center;
    align-items: center;

`

export const BrandStyle = styled.span`
margin-left: -15px;
        
img{
        width: 270px ;
        color: white;
    }
`
export const Header = styled.div`
    width: 100%;
    display: grid;
    background-color: ${theme.colorPrimary};
`


