import styled from "styled-components";

export const AddButton = styled.button`
    background-color: #59F2CD;
    color: #2A7563;
    box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
    border-radius: 4px;
    border: none;

    width: 250px;
    height: 45px;
    cursor: pointer;
    font-size: larger;
    font-weight: 600;
`
export const InputSearch = styled.input`
    background-color: #59F2CD;
    color: #13051D;
    background: #13051D;
    box-shadow: 0 0 0 0;
    border: 1px solid #1E0F29;
    border-radius: 4px;
    width: 340px;
    height: 45px;
    outline: 0;

    :focus{
        color: #A59AD4;
    }
    ::placeholder{
        color: #A59AD4;
    }


`



export const Section = styled.section`
    background-color: #221030;
    width: calc(100vw - 280px);
    height: 150vh;
    overflow-y: auto;
`

export const Menu = styled.div`
    h1{
        text-align: center;
    }
`

export const Main = styled.div`
    background-color: #190925;
    height: 100vh;
`
export const Content = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh !important;
    overflow-y: auto;
`
export const Header = styled.header`

    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 20px;
    width: 100%;
    background-color: #190925;
    height: 90px;
    nav{
        display: flex;
        align-items: center;
        justify-content: space-between;        
    }
`


export const BrandStyle = styled.span`
    img{
        margin-top: 22px;
        padding: 5px;
        width: 100%;
        height: 40px;
        color: white;
        box-shadow: 0px 0px 15px #7559F2;
        opacity: .5;
        background-color: #7559F2;
        border-radius: 2.5px;
    }
`

export const GridMainLayout = styled.div`
    margin: 0;
    padding: 0;
    color: #7559F2;
    /* height: 100vh; */
    
    display: grid;
    grid-template-columns: 280px auto;
    
    overflow: hidden;
`