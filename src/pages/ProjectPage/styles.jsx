import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  background-color: #efeff6;
  height: 100%;
`;

export const TextAddProject = styled.button`
  font-size: 24px;
  color: #7b51d6;
  font-weight: bold;
  font-family: "Inter";
  border: none;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.211);
`;

export const BoxAddProject = styled.div`
  display: flex;
  width: 95%;
  height: 20vh;
  justify-content: end;
  align-items: flex-end;
`;

export const TextTitle = styled.div`
  font-size: 36px;
  color: #7b51d6;
  font-weight: bold;
  font-family: "Inter";
`;

export const BoxTitle = styled.div`
  display: flex;
  height: 10vh;
  justify-content: center;
  align-items: center;
`;

export const BoxCard = styled.div`
  flex: 1;
  display: flex;
  height: 20vh;
  justify-content: center;
  flex-wrap: wrap;
  gap: 18px;
`;
