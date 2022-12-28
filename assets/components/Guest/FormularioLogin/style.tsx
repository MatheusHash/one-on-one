import styled from "styled-components";
import theme from "../../../../util/theme";

export const TextForm = styled.h6`
  text-align: center;
  color: ${theme.colorTextBlack};
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  a {
    border-bottom: solid 1px;
  }
`;

export const Content = styled.main`
  display: flex;
  flex-direction: column;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;
