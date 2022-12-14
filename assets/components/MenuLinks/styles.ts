import { IconProp } from "@fortawesome/fontawesome-svg-core";
import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-left: 15px ;
    margin-top: 165px;
    
    height: 70vh;
    /* min-height: 450px; */
`

export const Navigation = styled.div`
    display: grid;
    color: #A59AD4;
`


export const Button = styled.button`
    color: #A59AD4;
    text-align: left;
    background: none;
    border: none;
    width: 100%;
    margin-block: 25px;
    width: 200px;

    display: flex;
    align-items: center;
    gap: 15px;

    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0em;
    text-align: left;

    ::first-letter{
        text-transform: uppercase;
    }
    :hover{
        color: #7559F2;
        cursor: pointer;
    }
`

export const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
    cursor: pointer;
    img{
        
        border-radius: 50%;
        object-fit: cover;
    }
    :hover{
        color: #7559F2;
    }
`
export const Logout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;

`
export const MenuFooter = styled.div`

`

