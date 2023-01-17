import styled from "styled-components";

export const ContainerCard = styled.div`
  width: 700px;
  display: grid;
  justify-content: space-between;
  grid-template-columns:1fr 1fr;
  height: 100px;
  padding: 3px;
  margin-top: 55px;
`;

export const UserDesc = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  justify-self: start;
  svg {
    width: 20px;
    height: 30px;
  }
`;
export const UserRating = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 10px;
`;

export const CardRating = styled.div`
  cursor: context-menu;
  color: #7559f2;
  background: #282828;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  grid-row: 2;
  
  padding: 12px;
  text-align: center;
  gap: 10px;
  span {
    :first-child {
      font-weight: 700;
      font-size: 36px;
      line-height: 52px;
    }
    :last-child {
      color: #ffffff;
      font-size: 11px;
      line-height: 9px;
    }
  }
`;

export const Picture = styled.div`
  max-width: 200px;
  border-radius: 50%;
  img {
    border-radius: 50%;
    border: 2px solid #7559f2;
    min-width: 100px;
    min-height: 100px;
  }
`;
export const Icon = styled.div`
  color: #e0e0e0;
  gap: 5px;
  margin: 15px;
  display: grid;
  place-items: center;
  font-weight: 700;
  font-size: 10px;
  line-height: 10px;
`;
export const Data = styled.div`
  display: flex;
  flex-direction: column;
  color: #e0e0e0;
`;

export const Nome = styled.span`
  font-weight: 400;
  font-size: 16px;
  display: flex;
`;
export const Cargo = styled.span`
  font-weight: 700;
  font-size: 11px;
`;
export const Setor = styled.span`
  font-weight: 700;
  font-size: 14px;
  color: #7559f2;
`;
