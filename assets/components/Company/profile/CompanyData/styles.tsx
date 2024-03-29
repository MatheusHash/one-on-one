import styled from "styled-components";
import theme from "../../../../../util/theme";



export const TextAction = styled.h4`
    font-weight: 400;
    font-size: 16px;
    line-height: 23px;
    color: #fff;
    :hover{
        color: ${theme.TextNavigationProfile};
        cursor: pointer;
    }

    span{
        font-weight: 700;

    }
`


export const UserContent = styled.div`
    display: flex;
    width: 100%;
    padding: 40px;
`

export const UserLeftWithImage = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 15px;
`
export const ImageProfile = styled.div`
    width: 210px;
    margin-top: 20px;
    img{
        border: solid 6px ${theme.ImageProfileBorder};
        object-fit: cover;
        border-radius: 50%;
        width: 100%;
        height: 100%;
    }
`

export const UserRightWithData = styled.div`
    width: 70%;
`

export const InputGroupUser = styled.div`
    display: flex;
    flex-direction: column;

` 
export const Data = styled.div`
    display: flex;
    flex-direction: column;
    
    h4{
        color: ${theme.TitleInputProfileUser};
        font-weight: 400;
        font-size: 14px;
        line-height: 20px;
    }   
`

export const Input = styled.input`
    font-weight: 400;
    font-size: 28px;
    line-height: 40px;
    background-color: transparent;
    border: none;
    color: #fff;
    
    :focus{
        outline: none;
    }
`