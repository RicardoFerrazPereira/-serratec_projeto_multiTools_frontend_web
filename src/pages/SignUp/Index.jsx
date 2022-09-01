import { useState } from "react";
import { MultiTools } from "./../LoginPage/styles";
import { FaTools } from "react-icons/fa";
import Form from "react-bootstrap/Form";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BoxLogoNameSignUp,
  BoxSignUpButton,
  ContainerSignUp,
  FormSignUp,
  Identify,
  LoginContainerSignUp,
  LoginTitle,
} from "./styles";
import Button from "react-bootstrap/Button";
import { useParams } from "react-router";
import MySwal from "sweetalert2";
import api from "../../services/api";
import { Link } from "react-router-dom";

const SignUp = () => {
  const { id } = useParams();
  const [nomeCompleto, setNomeCompleto] = useState([]);
  const [email, setEmail] = useState([]);
  const [senha, setSenha] = useState([]);
  const [confirmarSenha, setConfirmarSenha] = useState([]);

  const cadastrarUsuarios = async () => {
    if (id) {
      api
        .put(`/usuario/atualizar/${id}`, {
          id,
          nomeCompleto,
          email,
          senha,
          confirmarSenha,
        })
        .then((response) => {
          console.log(response);
          if (response.status === 200) {
            MySwal.fire({
              icon: "success",
              title: "Success",
              text: "!",
            });
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "error",
            title: "Oops...",
            text: error,
          });
        });
    } else {
      api
        .post("/usuario/salvar", { nomeCompleto, email, senha, confirmarSenha })
        .then((response) => {
          if (response.status === 200) {
            MySwal.fire({
              icon: "success",
              title: "Success",
              text: "Conta cadastrada com sucesso!",
              confirmButtonText: "Voltar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/";
              }
            });
          }
          if (senha !== confirmarSenha) {
            MySwal.fire({
              icon: "warning",
              title: "Senhas não conferem",
              text: "Favor digitar as senhas iguais",
            });
          }
        })
        .catch((error) => {
          MySwal.fire({
            icon: "warning",
            title: "Warning",
            text: "Não foi possível fazer o cadastro, tente novamente mais tarde",
          });
        });
    }
  };
  return (
    <ContainerSignUp>
      <BoxLogoNameSignUp>
        <FaTools style={{ fontSize: "80px", color: "#7B51D6" }} />
        <MultiTools>MultiTools</MultiTools>
      </BoxLogoNameSignUp>
      <LoginContainerSignUp>
        <LoginTitle>Cadastro</LoginTitle>
        <Identify>Preencha os campos abaixo </Identify>
        <FormSignUp>
          <Form.Group className="mb-3">
            <Form.Control
              label="NomeCompleto"
              variant="outlined"
              value={nomeCompleto}
              onChange={(e) => setNomeCompleto(e.target.value)}
              type="text"
              placeholder="Nome Completo"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="pass"
              id="pass"
              placeholder="Digite sua senha"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="password"
              name="pass"
              id="passConfirm"
              placeholder="Digite sua senha"
              value={confirmarSenha}
              onChange={(e) => setConfirmarSenha(e.target.value)}
            />
          </Form.Group>
        </FormSignUp>
        <BoxSignUpButton>
          <Button
            style={{ width: "100px", background: "#7B51D6", border:"none"  }}
            as="input"
            type="submit"
            value="Cadastrar"
            onClick={cadastrarUsuarios}
          />{" "}
          <Link to="/">
            <Button
              style={{ width: "100px", background: "#7B51D6", border:"none" }}
              as="input"
              type="submit"
              value="Voltar"
            />{" "}
          </Link>
        </BoxSignUpButton>
      </LoginContainerSignUp>
    </ContainerSignUp>
  );
};
export default SignUp;
