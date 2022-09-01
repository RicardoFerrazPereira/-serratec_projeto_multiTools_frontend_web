import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useParams } from "react-router-dom";
import * as React from "react";
import api from "./../../services/api";
import MySwal from "sweetalert2";
import { Button } from "@mui/material";

const CardTools = ({ ferramenta }) => {
  const { id } = useParams();
  const userToken = localStorage.getItem("token");

  const adicionarFerramenta = (idFerramenta) => {
    api
      .post(`/projeto/${id}/${idFerramenta}`, {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        if (response.status === 200) {
          MySwal.fire({
            icon: "success",
            title: "Success",
            text: "Ferramenta adicionada com sucesso!",
          }).then((result) => {});
        }
      })
      .catch((error) => {
        MySwal.fire({
          icon: "warning",
          title: "Favor preencher os campos vazios",
          text: "existem campos obrigatórios nao preenchidos",
        });
      });
  };
  return (
    <Card
      style={{
        lineHeight: 0.5,
        borderRadius: "18px",
        width: "30rem",
        boxShadow: "4px 4px 2px 3px #97979763",
      }}
    >
      <Card.Body>
        <Card.Title style={{ fontSize: "25px" }}>{ferramenta.nome}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {ferramenta.tipo}
        </Card.Subtitle>
        <Card.Text style={{ marginTop: "35px" }}>
          <text style={{ fontSize: "18px", fontWeight: "500" }}>
            Descrição:{" "}
          </text>
          {ferramenta.descricao}
        </Card.Text>
        <Card.Text>
          <text style={{ fontSize: "18px", fontWeight: "500" }}>
            CustoMinUsuarioMes:{" "}
          </text>
          {ferramenta.custoMinUsuarioMes}
        </Card.Text>
        <Card.Text>
          <text style={{ fontSize: "18px", fontWeight: "500" }}>Tags: </text>
          {ferramenta.tags}
        </Card.Text>
        <Card.Link onClick={""}></Card.Link>
        <Link to="/detalhe-projeto">
          <button style={{ border: "none", background: "none" }}></button>
        </Link>
        <Button
          onClick={() => adicionarFerramenta(ferramenta.idFerramenta)}
          style={{
            margin: "0 auto",
            display: "flex",
            border: "none",
            background: "none",
            color: "#fff",
            backgroundColor: "#9575CD",
            marginTop: "22px",
            borderRadius: "30px",
            boxShadow: "2px 2px 2px 3px #9797979a",
          }}
        >
          Vincular ferramenta
        </Button>
        <Card.Link onClick={""}></Card.Link>
      </Card.Body>
    </Card>
  );
};

export default CardTools;
