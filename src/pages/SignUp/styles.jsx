import styled from "styled-components";
import Form from "react-bootstrap/Form";

export const ContainerSignUp = styled.div`
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

export const BoxSignUpButton = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
  width: 95%;
  justify-content: space-around;
`;

export const BoxLogoNameSignUp = styled.div`
  height: 25em;
  display: flex;
  width: 100%;
  max-width: 650px;
`;

export const LoginContainerSignUp = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  width: 100%;
  max-width: 500px;
  height: 70vh;
  padding: 0.5rem;
  align-items: center;
  box-shadow: 0px 4px 20px rgba(0, 0, 0, 0.25);
`;

export const MultiTools = styled.div`
  color: #fff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  color: #ffffff;
  margin-left: 10px;
`;
export const LoginTitle = styled.div`
  color: #9575cd;
  font-size: 40px;
  font-weight: 900;
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  align-self: flex-start;
`;

export const Identify = styled.p`
  margin-left: 3px;
  font-size: 15px;
  align-items: flex-start;
  height: 15px;
  align-self: flex-start;
  margin-bottom: 20px;
`;

export const FormSignUp = styled(Form)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  gap: 30px;
  width: 50vh;
`;
