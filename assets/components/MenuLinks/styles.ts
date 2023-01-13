import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 15px ;
    height: 55vh;
`

export const Navigation = styled.div`
    color: #A59AD4;
    margin-top: -100px;
    height: 100%;
`

export const Button = styled.button`
    color: ${props => props.color ? props.color : '#A59AD4'};
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

    
    :hover{
        color: #7559F2;
        cursor: pointer;
    }
`

export const User = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
    img{

        border-radius: 50%;
        object-fit: cover;
    }
    :hover{
        color: #7559F2;
    }
`

export const MenuFooter = styled.div`
    display: grid;
    
`

