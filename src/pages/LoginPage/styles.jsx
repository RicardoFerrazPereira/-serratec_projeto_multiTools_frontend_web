import styled from "styled-components";
import "bootstrap/dist/css/bootstrap.min.css";

export const Container = styled.div`
  flex: 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  min-height: 100vh;
  padding: 0 2rem;
  background: linear-gradient(#9575cd 50%, #fff 50%);
`;

export const BoxLogoName = styled.div`
  height: 30em;
  display: flex;
  width: 100%;
  max-width: 700px;
`;

export const LoginContainer = styled.div`
  display: block;
  flex-direction: column;
  background-color: #fff;
  border-radius: 8px;
  width: 100%;
  max-width: 500px;
  padding: 0.5rem;
  align-items: center;
  height: 500px;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

export const MultiTools = styled.div`
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 30;
  font-size: 60px;
  color: #ffffff;
  margin-left: 10px;
`;

export const LoginTitle = styled.div`
  color: #9575cd;
  font-size: 28px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: flex-start;
`;

export const Forget = styled.button`
  font-size: 14px;
  align-items: flex-start;
  height: 15px;
  align-self: flex-start;
  border: none;
  background-color: #fff;
`;

export const EnterBox = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  justify-content: space-around;
`;

export const Identify = styled.p`
  margin-left: 3px;
  font-size: 14px;
  align-items: flex-start;
  height: 15px;
  align-self: flex-start;
  margin-bottom: 20px;
`;
