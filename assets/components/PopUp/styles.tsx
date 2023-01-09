import styled from "styled-components";

export const Screen = styled.section`
  width: 100vw;
  height: 100vh;
  z-index: 98;
  background-color: #282828;
  opacity: 0.5;
  position: absolute;
`;

export const Popup = styled.div`
  position: absolute;

  width: 650px;
  margin-left: calc(50% - 325px );
  margin-top: calc(50vh - 300px );
  /* padding-top: ; */
  display: flex;
  height: 600px;
  opacity: 1;
  z-index: 99;
  background-color: #282828;
  border-radius: 20px;
  padding: 15px;
  display: flex;
  flex-direction: column;
`;

export const Success = styled.div`
display: flex;
flex-direction: column;
height: 100%;
align-items: center;
justify-content: center;
`
export const ContentPopUp = styled.div`
  align-self: center;
  display: flex;
  flex-direction: column;
  gap: 30px;
  align-items: center;
  width: 480px;
`;
export const TitleHeader = styled.div`
  margin-top: 15px;
`;
export const Title = styled.h4`
  color: #e0e0e0;
  text-align: center;
  font-weight: 400;
  font-size: 22px;
  line-height: 32px;
`;

export const CardGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* gap: 15px; */
  width: 100%;
`;
export const Card = styled.div`
  padding: 5px;
  background-color: #181818;
  border: 1px solid #202020;
  border-radius: 4px;
  width: 220px;
  height: 125px;

  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const PictureUserSelected = styled.div`
  width: 80px;
  height: 80px;

  /* text-align: center; */
  display: flex;
  align-items: center;
  cursor: pointer;

  img{
    border-radius: 50%;
    border: 1px solid #000000;

  }
`;

export const TextChoose = styled.span`
  font-weight: 400;
  font-size: 10px;
  line-height: 9px;
  text-align: center;
  color: #363636;
`;
export const LabelChooseUser = styled.label`
  color: #363636;
  cursor: pointer;
`;

export const UserRole = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 5px;
  padding-inline: 15px;
`;
export const InputCard = styled.input`
  color: #7559f2;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  ::placeholder {
    color: #7559f2;
  }
  border: none;
  background-color: transparent;
  :focus {
    outline: none;
  }
`;

export const CardBody = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ListUsers = styled.div`
  width: 100%;
  height: 150px;
  min-height: 150px;
  background-color: #181818;
  overflow: auto;
  border: 1px solid #202020;
  border-radius: 4px;
  z-index: 9999;
  overflow-x: hidden ;
  padding-right: 2px;


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
  background: transparent;
}
`;


export const ContainerPopUp = styled.div`
  /* position: absolute; */

`