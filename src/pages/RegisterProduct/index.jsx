import {
  BoxButton,
  BoxRegisterProduct,
  BoxTitleRegister,
  ContainerRegister,
  NewButton,
  TitleRegister,
} from "./style";
import Form from "react-bootstrap/Form";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import api from "./../../services/api";
import MySwal from "sweetalert2";
import { Link } from "react-router-dom";

export const RegisterProduct = () => {
  const { id } = useParams();
  const [nome, setNome] = useState([]);
  const [email, setEmail] = useState([]);
  const [dtInicio, setdtInicio] = useState([]);
  const userToken = localStorage.getItem("token");

  useEffect(() => {
    getProjeto();
  }, []);

  const getProjeto = async () => {
    api
      .get("/projeto/lista", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        response.data.forEach((projeto) => {
          if (projeto.id === parseInt(id)) {
            setNome(projeto.nome);
            setdtInicio(projeto.dtInicio);
            setEmail(projeto.email);
          }
        });
      });
  };

  const cadastrarProjeto = () => {
    if (id) {
      api
        .put(
          `/projeto/atualizar/${id}`,
          { id, nome, dtInicio, email },
          { headers: { Authorization: `Bearer ${userToken}` } }
        )
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
            title: "Favor preencher os demais campos",
            text: error,
          });
        });
    } else {
      api
        .post(
          "/projeto/salvar",
          { nome, dtInicio, email },
          { headers: { Authorization: `Bearer ${userToken}` } }
        )
        .then((response) => {
          if (response.status === 200) {
            const mensagemRetorno = response.data;
            MySwal.fire({
              icon: "warning",
              text: mensagemRetorno,
              confirmButtonText: "voltar",
            }).then((result) => {
              if (result.isConfirmed) {
                window.location.href = "/projeto";
              }
            });
          }
        })
        .catch((response) => {
          const mensagemRetorno = response.data;
          MySwal.fire({
            icon: "error",
            title: "o email não está cadastrado",
            text: mensagemRetorno,
            confirmButtonText: "voltar",
          });
        });
    }
  };
  return (
    <ContainerRegister>
      <BoxRegisterProduct>
        <BoxTitleRegister>
          <TitleRegister>Cadastrar Projeto</TitleRegister>
          <Form.Control
            label="Nome"
            variant="outlined"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            style={{
              height: "5%",
              width: "80%",
              borderRadius: "10px",
              boxShadow: "0px 0px 4px 1px #857f7f",
            }}
            size="lg"
            type="text"
            placeholder="Digite o nome do projeto"
          />
          <Form.Control
            label="Data de inicio"
            variant="outlined"
            value={dtInicio}
            onChange={(e) => setdtInicio(e.target.value)}
            style={{
              height: "5%",
              width: "80%",
              borderRadius: "10px",
              boxShadow: "0px 0px 4px 1px #857f7f",
            }}
            size="lg"
            type="date"
            placeholder="Data de criação"
          />
          <Form.Control
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{
              height: "5%",
              width: "80%",
              borderRadius: "10px",
              boxShadow: "0px 0px 4px 1px #857f7f",
            }}
            size="lg"
            type="email"
            placeholder="email do membro"
          />
        </BoxTitleRegister>
        <BoxButton>
          <Link
            style={{ display: "flex", textDecoration: "none" }}
            to="/projeto"
          >
            <NewButton>Voltar</NewButton>
          </Link>
          <NewButton onClick={cadastrarProjeto}>Cadastrar</NewButton>
        </BoxButton>
      </BoxRegisterProduct>
    </ContainerRegister>
  );
};

export default RegisterProduct;
