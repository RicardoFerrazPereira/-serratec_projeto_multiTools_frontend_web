import React, { useState, useContext } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "bootstrap/dist/css/bootstrap.min.css";
import { AuthContext } from "../../contexts/auth";
import {
  BoxLogoName,
  Container,
  EnterBox,
  Forget,
  Identify,
  LoginContainer,
  LoginTitle,
  MultiTools,
} from "./styles.jsx";
import { FaTools } from "react-icons/fa";
import { BsEyeSlash } from "react-icons/bs";
import { Link } from "react-router-dom";

const LoginPage = () => {
  const { login } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submit", { email, senha });
    login(email, senha);
  };

  return (
    <Container>
      <BoxLogoName>
        <FaTools style={{ fontSize: "80px", color: "#7B51D6" }} />
        <MultiTools>MultiTools</MultiTools>
      </BoxLogoName>
      <LoginContainer>
        <LoginTitle>Login</LoginTitle>
        <Identify>Identifique-se para prosseguir</Identify>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              style={{ boxShadow: "0px 0px 4px 1px #857f7f" }}
              placeholder="Digite seu email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Senha</Form.Label>
            <Form.Control
              type="password"
              name="pass"
              id="pass"
              style={{ boxShadow: "0px 0px 4px 1px #857f7f" }}
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <EnterBox>
            <Button
              variant="primary"
              type="submit"
              style={{
                background: "#9575CD",
                border: "none",
                marginTop: "15px",
              }}
            >
              Entrar
            </Button>
            <Link to="/cadastrar-usuario">
              <Button
                variant="primary"
                style={{
                  background: "#9575CD",
                  border: "none",
                  marginTop: "20px",
                  width: "100%",
                }}
              >
                Registre-se
              </Button>
              <Forget>Não tem conta? Registre-se aqui</Forget>
            </Link>
          </EnterBox>
        </Form>
      </LoginContainer>
    </Container>
  );
};

export default LoginPage;
