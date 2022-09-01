import Card from "react-bootstrap/Card";
import { MdAddBox } from "react-icons/md";

function Cards() {
  return (
    <Card style={{ width: "18rem", boxShadow: "0px 0px 4px 5px #979797" }}>
      <Card.Body>
        <Card.Title>Photoshop</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          Edição de Fotos
        </Card.Subtitle>
        <Card.Text>Ferramenta para edição de fotos</Card.Text>
        <MdAddBox
          href="#"
          onClick={"#"}
          style={{ fontSize: "26px", color: "#9575CD" }}
        />

        <Card.Link href="#" style={{ color: "#9575CD" }}>
          Adicionar
        </Card.Link>
      </Card.Body>
    </Card>
  );
}

export default Cards;
