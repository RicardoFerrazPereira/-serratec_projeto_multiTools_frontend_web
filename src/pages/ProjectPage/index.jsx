import {
  BoxAddProject,
  BoxCard,
  BoxTitle,
  Container,
  TextAddProject,
  TextTitle,
} from "./styles";
import React, { useContext, useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import NavBarSearch from "../../components/NavBarSearch";
import CardProject from "../../components/CardProject";
import api from "../../services/api";
import jwt_decode from "jwt-decode";

const ProjectPage = () => {
  const [projeto, setProjeto] = useState([]);
  const userToken = localStorage.getItem("token");
  var decoded = jwt_decode(userToken);
  var emailDecoded = decoded.sub;
  console.log("decoded: ", emailDecoded);
  useEffect(() => {
    getProjetos();
  }, []);

  const getProjetos = async () => {
    api
      .get("/projeto/lista", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setProjeto(response.data);
      });
  };
  // const getProjetos = async () => {
  //   api.get(`/projeto/projeto-usuario/${emailDecoded}`,
  //   { headers: {"Authorization" : `Bearer ${userToken}`} })
  //     .then(response => {
  //       setProjeto(response.data)
  //     });
  // }

  return (
    <>
      <NavBarSearch />
      <Container>
        <BoxAddProject>
          <Link to="/cadastrar-produto" style={{ textDecoration: "none" }}>
            <AddCircleIcon
              style={{
                filter: "drop-shadow(3px 5px 2px rgb(0 0 0 / 0.2))",
                width: "38px",
                height: "20vh",
                fontSize: "38px",
                color: "#7B51D6",
              }}
            />
            <TextAddProject>Cadastrar Novo Projeto</TextAddProject>
          </Link>
        </BoxAddProject>
        <BoxTitle>
          <TextTitle>Projetos</TextTitle>
        </BoxTitle>
        <CardProject projetos={projeto} getProjetos={getProjetos} />
      </Container>
    </>
  );
};
export default ProjectPage;
