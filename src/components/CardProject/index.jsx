import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import DeleteIcon from "@mui/icons-material/Delete";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import { Link } from "react-router-dom";
import React from "react";
import api from "../../services/api";
import MySwal from "sweetalert2";
import { BoxCard } from "../../pages/ProjectPage/styles";
import moment from "moment";

const CardProject = ({ projetos, getProjetos }) => {
  const userToken = localStorage.getItem("token");

  const deletarProjeto = (projeto) => {
    console.log("projetodelete: " + JSON.stringify(projeto));
    api
      .delete(`/projeto/${projeto.idProjeto}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        if (response.status === 202) {
          MySwal.fire({
            icon: "success",
            title: "success",
            text: `O projeto ${projeto.nome} foi deletado com sucesso`,
            confirmButtonText: "voltar",
          });
        }
        getProjetos();
      })
      .catch((error) => {
        MySwal.fire({
          icon: "error",
          title: "Não foi possível deletar o projeto",
          text: error,
        });
      });
  };
  console.log("projeto: " + JSON.stringify(projetos));

  return (
    <BoxCard>
      {projetos.map((projeto, i) => (
        <Card
          style={{
            borderRadius: "18px",
            width: "30rem",
            boxShadow: "0px 0px 4px 5px #979797",
          }}
        >
          <Card.Body>
            <Card.Title style={{ fontSize: "25px" }}>{projeto.nome}</Card.Title>
            <Card.Subtitle
              className="mb-2 text-muted"
              style={{ fontSize: "18px" }}
            >
              {moment(projeto.dtInicio).format("DD/MM/YYYY")}
            </Card.Subtitle>
            <Card.Text style={{ fontSize: "20px" }}>{projeto.email}</Card.Text>
            <button
              style={{ border: "none", background: "none" }}
              onClick={() => deletarProjeto(projeto)}
              variant="Projeto cadastrado com sucesso!"
            >
              <DeleteIcon style={{ fontSize: "28px", color: "7B51D6" }} />
            </button>
            <Card.Link onClick={""}></Card.Link>
            <Link to={`/detalhe-projeto/${projeto.idProjeto}`}>
              <button style={{ border: "none", background: "none" }}>
                <MenuOpenIcon style={{ fontSize: "28px", color: "7B51D6" }} />
              </button>
            </Link>
            <Card.Link onClick={""}></Card.Link>
          </Card.Body>
        </Card>
      ))}
    </BoxCard>
  );
};

export default CardProject;
