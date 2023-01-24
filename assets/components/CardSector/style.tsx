import styled from "styled-components";

export const ContainerCardSector = styled.div`
  color: #ffffff;
  background: #202020;
  border-radius: 10px;
  padding: 10px;
  height: 150px;
  display: grid;
`;
export const HeaderCardSector = styled.div`
  display: flex;
  justify-content: space-between;

  div {
    display: flex;
    flex-direction: column;
  }
`;
export const SectorName = styled.span`
  font-weight: 700;
  font-size: 20px;
`;
export const CreatedAt = styled.span`
  font-weight: 400;
  font-size: 10px;
  text-align: right;
  span {
    font-weight: 700;
  }
  strong {
    font-weight: 700;
    font-size: 12px;
  }
`;

export const FooterCardSectors = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  /* gap: 10px; */
`;

export const SeeMore = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-weight: 700;
  font-size: 10px;
  :hover {
    font-size: 11px;
  }
`;
