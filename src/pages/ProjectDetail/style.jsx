import styled from "styled-components";
export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #efeff6;
`;

export const BoxTitleProjectDetail = styled.div`
  flex: 1;
  display: flex;
  width: 100%;
  flex-direction: row;
  justify-content: space-around;
  padding-left: 20px;
  background-color: #fff;
  align-items: center;
`;

export const TextAddProjectDetail = styled.div`
  font-size: 20px;
  color: #7b51d6;
  font-weight: bold;
  font-family: "Inter";
`;

export const BoxCenterTitle = styled.div`
  display: flex;
  height: 15vh;
  justify-content: center;
  align-items: flex-end;
`;

export const TextCenterTitle = styled.p`
  font-size: 36px;
  color: #7b51d6;
  font-weight: bold;
  font-family: "Inter";
`;

export const BoxEmailTools = styled.div`
  flex: 1;
  display: flex;
  height: 7vh;
  justify-content: flex-end;
  border: 0px;
  align-items: flex-end;
`;

export const TextEmailTools = styled.button`
  font-size: 18px;
  color: #7b51d6;
  font-weight: bold;
  font-family: "Inter";
  border: none;
  margin-right: 20px;
`;

export const BoxCardProjectDetail = styled.div`
  flex: 1;
  display: flex;
  height: 20vh;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;
