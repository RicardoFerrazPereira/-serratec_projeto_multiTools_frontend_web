import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { FaTools } from "react-icons/fa";
import { AuthContext } from "../../contexts/auth";
import { useContext } from "react";

function NavBarSearch() {
  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
  };

  return (
    <Navbar
      sticky="top"
      expand="lg"
      style={{ background: "#7b51d6", opacity: 0.7 }}
    >
      <Container fluid>
        <FaTools
          style={{ fontSize: "38px", color: "#fff", marginRight: "15px" }}
        />
        <Navbar.Brand href="#" style={{ color: "#fff" }}>
          MultiTools
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <button
              onClick={handleLogout}
              style={{ border: "none", color: "#fff", background: "none" }}
            >
              Logout
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBarSearch;
