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
    /* height: 70px; */
    margin-block: 25px;
    /* margin-inline: 20px ; */
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
    div{
        width: 20px;
        height: 20px;
        background-color: #ccc;
        border-radius: 50%;
    }
    `
export const Logout = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    div{
        width: 20px;
        height: 20px;
        background-color: #ccc;
        border-radius: 50%;
    }
`
export const MenuFooter = styled.div`

`

