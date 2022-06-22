import React from "react";
import { Navbar, Container } from "react-bootstrap";
import logo from "../../Assets/logo.png";
const NavBar = () => {
  return (
    <Navbar bg="light" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src={logo} height={50} alt="" />
        </Navbar.Brand>
      </Container>
    </Navbar>
  );
};

export default NavBar;
