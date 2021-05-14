import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { useHistory } from "react-router";

const Navigation = () => {
  const history = useHistory();

  return (
    <Navbar bg="dark" variant="dark">
      <Navbar.Brand>Diagram</Navbar.Brand>
      <Nav className="mr-auto">
        <Nav.Link onClick={() => history.push("/reactflow")}>
          React Flow
        </Nav.Link>
        <Nav.Link onClick={() => history.push("/library2")}>Library 2</Nav.Link>
        <Nav.Link onClick={() => history.push("/library3")}>Library 3</Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default Navigation;
