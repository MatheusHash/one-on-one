import styled from "styled-components";

export const ContainerSelect = styled.div`
  width: 100%;
  height: 45px;
  padding: 15px;
  color: #7559f2;
  background-color: #181818;
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #202020;
  border-radius: 4px;
  width: 100%;
  :hover{
    cursor: pointer;
  }
`;

export const Select = styled.div`
  color: #7559f2;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 450px;
`;

export const ListTeams = styled.div`
  width: 480px;
  margin-top: 2px;
  min-height: 150px;
  background-color: #181818;
  overflow: auto;
  border: 1px solid #202020;
  border-radius: 4px;
  z-index: 9999999;
  overflow-x: hidden ;
  padding-right: 2px;
  
  ul li{
    padding: 10px 20px;
    border-bottom: 1px solid #202020;
  }


  /* width */
::-webkit-scrollbar {
  width: 5px;
  height: 5px;
}

/* Track */
::-webkit-scrollbar-track {
  background: transparent;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #202020;
}
`