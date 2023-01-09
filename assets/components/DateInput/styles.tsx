import styled from "styled-components";

export const ContainerInputCalendar = styled.div`
  width: 100%;
  height: 45px;
  padding: 15px;
  color: #7559f2;
  background-color: #181818;
  display: flex;
  align-items: center;
  border: 1px solid #202020;
  border-radius: 4px;
  width: 100%;

  font-weight: 400;
font-size: 14px;
line-height: 20px;

  :hover {
    cursor: pointer;
  }
`;

export const InputDate = styled.input`
  color: #7559f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  background: transparent;
  border: none;

  cursor: pointer;
  :focus{
    outline: none;
  }
  font-size: 14px;

::-webkit-calendar-picker-indicator { background: transparent; }
`;
export const Label = styled.label`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

`