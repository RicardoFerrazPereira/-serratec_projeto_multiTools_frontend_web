import React, { useEffect, useState } from "react";
import CardTools from "../../components/CardTools";
import NavBarSearch from "../../components/NavBarSearch";
import api from "../../services/api";
import { CardBox, ToolsTitle, Container } from "./styles";

const ToolsPage = () => {
  const [ferramenta, setFerramenta] = useState([]);
  const userToken = localStorage.getItem("token");
  useEffect(() => {
    getFerramentas();
  }, []);

  const getFerramentas = async () => {
    api
      .get("/ferramenta/lista", {
        headers: { Authorization: `Bearer ${userToken}` },
      })
      .then((response) => {
        setFerramenta(response.data);
        console.log(response.data);
      });
  };

  console.log(ferramenta);
  return (
    <>
      <NavBarSearch />
      <Container>
        <ToolsTitle>Ferramentas</ToolsTitle>
        <CardBox>
          {ferramenta.map((k, i) => (
            <CardTools ferramenta={k} />
          ))}
        </CardBox>
      </Container>
    </>
  );
};

export default ToolsPage;
