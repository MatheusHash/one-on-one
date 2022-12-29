import styled from "styled-components";
import theme from "../../../../util/theme";

export const GridGuestLayout = styled.div`
  display: grid;
  grid-template-columns: calc(100vw - 500px) 500px;
  /* grid-template-rows: 100vh; */

  height: 100vh;
  width: 100vw;
  grid-column: auto;

  @media (max-width: 768px) {
    grid-template-columns: 0 100vw;
  }
`;
export const Space = styled.div`
  display: grid;
  width: 100%;
  background-color: ${theme.colorSecond};
`;
export const Content = styled.div`
  width: 100%;
  height: 100vh;
  padding-top: 30px;
  
  background-color: ${theme.colorPrimary};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  
  overflow-y: visible;
  overflow-x: hidden;

  @media (max-width: 768px) {
    padding: 1em;
  }
`;

export const BrandStyle = styled.span`
  margin-left: -15px;

  img {
    width: 270px;
    color: white;
  }
`;
export const Header = styled.div`
  display: grid;
  background-color: ${theme.colorPrimary};
`;
