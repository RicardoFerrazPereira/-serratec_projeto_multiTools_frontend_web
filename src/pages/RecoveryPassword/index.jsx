import {
  BoxPassword,
  BoxLogoName,
  MultiTools,
  ContainerRecovery,
  SubTitleRecovery,
  TextTitleRecovery,
} from "./styles";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import { FaTools } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const RecoveryPassword = () => {
  return (
    <ContainerRecovery>
      <BoxLogoName>
        <FaTools style={{ fontSize: "80px", color: "#7B51D6" }} />
        <MultiTools>MultiTools</MultiTools>
      </BoxLogoName>
      <BoxPassword>
        <TextTitleRecovery>Esqueci minha senha</TextTitleRecovery>
        <SubTitleRecovery>
          Para redefinir sua senha, por favor digite o endereço de e-mail da sua
          conta.
        </SubTitleRecovery>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
            <Col sm="10">
              <Form.Control
                style={{
                  background: "#fff",
                  borderRadius: "10px",
                  width: "50vh",
                }}
                plaintext
                readOnly
                defaultValue="Insira seu e-mail aqui"
              />
            </Col>
          </Form.Group>
        </Form>
      </BoxPassword>
    </ContainerRecovery>
  );
};

export default RecoveryPassword;
