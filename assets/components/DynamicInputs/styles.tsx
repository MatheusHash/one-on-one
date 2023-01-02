import styled from "styled-components";
import theme from "../../../util/theme";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormDynamic = styled.div`
  display: flex;
  flex-direction: column;
`;

export const BtnMakeInput = styled.button`
  border-radius: 50%;
  border: none;

  align-self: center;

  width: 30px;
  height: 30px;
  text-align: center;
  cursor: pointer;

  background-color: ${theme.colorButton};
  color: #ffffff;
  box-shadow: 0px 0px 25px rgba(117, 89, 242, 0.5);

  margin: 20px 0 20px 0;
`;
