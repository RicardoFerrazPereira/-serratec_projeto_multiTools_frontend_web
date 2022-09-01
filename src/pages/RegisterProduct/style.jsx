import styled from "styled-components";
import Button from "react-bootstrap/Button";

export const ContainerRegister = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 99vh;
  padding: 0 2rem;
  background: linear-gradient(#9575cd 50%, #efeff6 50%);
`;

export const BoxRegisterProduct = styled.div`
  background-color: #fff;
  flex: 1;
  display: flex;
  flex-direction: column;
  max-width: 60vh;
  height: 70vh;
  justify-content: center;
  align-items: center;
  padding-bottom: 2rem;
`;

export const BoxTitleRegister = styled.div`
  flex: 1;
  display: flex;
  max-height: 10px;
  max-height: 60vh;
  width: 50vh;
  flex-direction: column;
  justify-content: space-evenly;
  text-align: center;
  align-items: center;
`;
export const TitleRegister = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #7b51d6;
`;

export const BoxButton = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  max-height: 6%;
  width: 66%;
  justify-content: space-between;
  font-size: 50px;
  margin-bottom: 4rem;
`;

export const NewButton = styled(Button)`
  font-size: 16px;
  background-color: #7b51d6;
  color: #fff;
  border-radius: 10px;
  border-color: gray;
  width: 130px;
  height: 50px;
  box-shadow: 0px 0px 2px 1px #7b51d6;
`;
