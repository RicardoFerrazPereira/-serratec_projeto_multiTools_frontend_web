import React from "react";
import {
  BoxCardProjectDetail,
  BoxCenterTitle,
  BoxEmailTools,
  BoxTitleProjectDetail,
  Container,
  TextAddProjectDetail,
  TextCenterTitle,
  TextEmailTools,
} from "./style";
import CardProjectDetail from "./../../components/CardProjectDetail/index";
import NavBarSearch from "../../components/NavBarSearch";
import { Link, useParams } from "react-router-dom";
import api from "./../../services/api";
import { useState, useEffect } from "react";
import moment from "moment";
import AddCircleIcon from "@mui/icons-material/AddCircle";

const ProjectDetail = () => {
  const { id } = useParams();

  const [ferramenta, setFerramenta] = useState([]);
  const [projetoNome, setProjetoNome] = useState();
  const [projetoDtInicio, setProjetoDtInicio] = useState();
  const [projetoEmail, setProjetoEmail] = useState();
  const [precoTotalProjeto, setprecoTotalProjeto] = useState();
  const dateFormatted = moment(projetoDtInicio).format("DD/MM/YYYY");
  const userToken = localStorage.getItem("token");
  useEffect(() => {
    getFerramentas();
  }, []);
  let precoTotal = 0;
  let listaFerramentas;

  const getFerramentas = async () => {
    api
      .get(`/projeto/buscar/${id}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setProjetoNome(response.data.nome);
        setProjetoDtInicio(response.data.dtInicio);
        setProjetoEmail(response.data.email);
        setFerramenta(response.data.ferramentas);
        listaFerramentas = response.data.ferramentas;
        console.log("listaFerramentas: " + listaFerramentas);
        for (let i = 0; i < listaFerramentas.length; i++) {
          console.log("teste", listaFerramentas[i].custoMinUsuarioMes);
          precoTotal += listaFerramentas[i].custoMinUsuarioMes;
        }
        setprecoTotalProjeto(precoTotal);
      });
  };

  return (
    <>
      <NavBarSearch />
      <Container>
        <BoxTitleProjectDetail>
          <TextAddProjectDetail>
            Nome do Projeto: {projetoNome}
          </TextAddProjectDetail>
          <BoxTitleProjectDetail>
            <TextAddProjectDetail>
              Data de Início: {dateFormatted}
            </TextAddProjectDetail>
            <TextAddProjectDetail>
              Valor Total do Projeto: R$ {precoTotalProjeto}
            </TextAddProjectDetail>
            <TextAddProjectDetail>Email:{projetoEmail}</TextAddProjectDetail>
          </BoxTitleProjectDetail>
        </BoxTitleProjectDetail>
        <BoxCenterTitle>
          <TextCenterTitle>Ferramentas</TextCenterTitle>
        </BoxCenterTitle>
        <BoxEmailTools>
          <Link to={`/ferramentas/${id}`}>
            <AddCircleIcon
              style={{
                filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                width: "38px",
                height: "20vh",
                fontSize: "38px",
                color: "#7B51D6",
              }}
            />
            <TextEmailTools>Adicionar ferramenta ao projeto </TextEmailTools>
          </Link>
        </BoxEmailTools>
        <BoxCardProjectDetail>
          <CardProjectDetail
            ferramentas={ferramenta}
            getFerramentas={getFerramentas}
          />
        </BoxCardProjectDetail>
      </Container>
    </>
  );
};
export default ProjectDetail;
