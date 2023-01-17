import styled from "styled-components";
import theme from "../../../../util/theme";


export const ContainerContentCompanyProfile= styled.div`
    /* width: 700px; */
    margin: 50px;
`

export const Container = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
`;
export const DataCompany = styled.div`
  display: flex;
  flex-direction: column;
`;
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

export const Header = styled.header`
  display: flex;
  justify-content: space-around;
  width: 100%;
  border-bottom: solid 1px ${theme.BorderProfileColor};
  
`;

export const TextHeader = styled.p`
  color: #ffffff;
  width: 800px;
  font-weight: 400;
  font-size: 18px;
  line-height: 22px;
  
  `;
export const Line = styled.hr`
  width: 885px;
  border: solid 1px #282828;
  margin-bottom: 50px;
  
`;
export const TextAction = styled.h4`

  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  color: ${ props => props.color ? props.color : '#fff'};
  padding-inline: 50px;
  :nth-child(2){
    border-left: solid 2px ${theme.InputBorder};
  }
  :nth-child(3){
    border-left: solid 2px ${theme.InputBorder};
  }
  :hover {
    color: ${theme.TextNavigationProfile};
    cursor: pointer;
  }
  span {
    font-weight: 700;
  }
`;


export const Time =styled.div`
display: grid;
grid-template-columns: 2fr 1fr;
`