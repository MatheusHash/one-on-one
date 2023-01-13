import styled from "styled-components";
import theme from "../../util/theme";

export const Div = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  width: 100%;
  /* height: 500vh; */
  background-color: ${theme.colorSecond};
  h3 {
    text-transform: uppercase;
    font-weight: 400;
    font-size: 16px;
    text-align: center;
  }
`;
export const Colum1 = styled.div`
  padding: 30px 15px 0px 15px;
`;
export const Colum2 = styled.div`
  padding: 30px 15px 0px 15px;
  display: grid;
  grid-template-rows: 130px 130px auto auto;
  gap: 20px;
`;
export const Activities = styled.div`
  background-color: ${theme.colorPrimary};
  height: 100%;
  border-top-left-radius: 40px;
  border-top-right-radius: 40px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Scores = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;
export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 10px 0px 15px 0px;
  background-color: ${theme.colorThird};
  width: 30%;
  height: 100%;
  border-radius: 10px;
  color: ${theme.colorDetails};
  font-weight: 700;
  font-size: 46px;

  span {
    color: white;
    font-weight: 200;
    font-size: 14px;
    text-transform: uppercase;
    word-spacing: 4px;
  }
  small {
    color: white;
    font-weight: 600;
    font-size: 14px;
    text-transform: uppercase;
    strong {
      color: ${(prop) => prop.color ?? "#25F9A0"};
    }
  }
`;
export const Okrs = styled.div`
  background-color: ${theme.colorPrimary};
  border-radius: 40px;
  height: auto;
  padding: 20px;
`;
export const ListOkrs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;

export const GroupList = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const ItemListDasboard = styled.li`
  background-color: #181818;
  width: 100%;
  padding: 10px;
  text-align: start;
  color: #e0e0e0;
  font-weight: 400;
  font-size: 16px;
  line-height: 23px;
  list-style: none;
  cursor: context-menu;
`;
export const History = styled.div`
  background-color: ${theme.colorPrimary};
  border-radius: 40px;
  height: auto;
  padding: 20px;
`;
