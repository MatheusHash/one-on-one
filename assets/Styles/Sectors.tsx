import styled from "styled-components";

export const SectorsContent = styled.div``;

export const ListCardsSectors = styled.div`
  padding: 15px;
  margin: auto;
  max-width: 1000px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
  grid-gap: 20px;
  justify-content: center;
`;

export const HeaderSector = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #ffffff;
  width: 100%;
  gap: 15px;
  h1 {
    font-weight: 400;
    font-size: 32px;
  }
  span {
    font-weight: 700;
  }
`;

export const TeamDetails = styled.div`
  width: 100%;
  height: 100vh;
  z-index: 9999;
  background-color: blue;
`;
