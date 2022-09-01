import Card from "react-bootstrap/Card";
import "bootstrap/dist/css/bootstrap.min.css";

const CardProjectDetail = ({ ferramentas }) => {
  console.log("ferramenta no card: " + JSON.stringify(ferramentas));
  if (ferramentas === undefined) {
    return <></>;
  } else {
    return (
      <>
        {ferramentas.map((ferramenta, i) => (
          <Card
            style={{
              lineHeight: "0.5px",
              borderRadius: "18px",
              display: "flex",
              width: "30rem",
              margin: "5px",
              boxShadow: "4px 4px 2px 3px #97979763",
            }}
          >
            <Card.Body>
              <Card.Title style={{ fontSize: "25px", color: "#7B51D6" }}>
                {ferramenta.nome}
              </Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                {ferramenta.tipo}
              </Card.Subtitle>
              <Card.Text style={{ marginTop: "35px" }}>
                <text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#7B51D6",
                  }}
                >
                  Descrição:{" "}
                </text>
                {ferramenta.descricao}
              </Card.Text>
              <Card.Text style={{ marginTop: "25px" }}>
                <text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#7B51D6",
                  }}
                >
                  CustoMinUsuarioMes:{""}
                </text>
                {ferramenta.custoMinUsuarioMes}
              </Card.Text>
              <Card.Text style={{ marginTop: "25px" }}>
                <text
                  style={{
                    fontSize: "18px",
                    fontWeight: "500",
                    color: "#7B51D6",
                  }}
                >
                  Tags:{" "}
                </text>
                {ferramenta.tags}
              </Card.Text>
              <Card.Text>{ferramenta.preco}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </>
    );
  }
};
export default CardProjectDetail;
