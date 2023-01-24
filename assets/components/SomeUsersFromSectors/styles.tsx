import styled from "styled-components";

interface Props {
  width: number;
}

export const ContainerSomeUsersList = styled.div<Props>`
  display: flex;
  justify-content: space-between;
  width: ${(props) => props.width}%;
  img {
    border-radius: 50%;
  }
`;

export const Gestor = styled.div``;
export const SomeCollaborattors = styled.div`
  display: flex;
  margin-right: -5px;
`;
