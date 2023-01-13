import styled from "styled-components";
import theme from "../../../../util/theme";

export const AddButton = styled.button`
  background-color: #59f2cd;
  color: #2a7563;
  box-shadow: 0px 0px 15px rgba(89, 242, 205, 0.55);
  border-radius: 4px;
  border: none;
  font-size: 16px;
  width: 250px;
  height: 45px;
  cursor: pointer;
  /* display: flex; */
  text-align: right;
  /* ju: center; */
  padding-right: 15px;
  span {
    font-weight: 900;
  }
  svg {
    padding-left: 35px;
  }
`;
export const InputSearch = styled.input`
  background-color: #59f2cd;
  color: #13051d;
  background: #13051d;
  box-shadow: 0 0 0 0;
  border: 1px solid #1e0f29;
  border-radius: 4px;
  width: 340px;
  height: 45px;
  outline: 0;

  :focus {
    color: #a59ad4;
  }
  ::placeholder {
    color: #a59ad4;
  }
`;

export const DivContent = styled.article`
  /* background-color: ${theme.colorPrimary}; */
  border-radius: 15px;
  min-height: 80vh;
  display: grid;
  padding: 1em;
  background-color: ${props => props.color ?  props.color : theme.colorPrimary };
  margin: 0;
`;

export const Section = styled.section`
  background-color: ${theme.colorSecond};
  width: 100%;
  height: 150vh;
  overflow-y: auto;
  padding: 2em;
`;

export const Menu = styled.div`
  padding-top: 15px;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Main = styled.div`
  border-right: solid 1px black;
  background-color: ${theme.colorPrimary};
  height: 100vh;
`;
export const Content = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh !important;
  overflow-y: auto;
`;
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  width: 100%;
  background-color: ${theme.colorPrimary};
  height: 90px;
  nav {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;

export const BrandStyle = styled.span`
cursor: pointer;
  display: flex;
  justify-content: center;
  img {
    text-align: center;
    width: 220px;
    color: white;
  }
`;

export const GridMainLayout = styled.div`
  margin: 0;
  padding: 0;
  color: #7559f2;
  /* height: 100vh; */
  display: grid;
  grid-template-columns: 250px auto;
  overflow: hidden;
`;
