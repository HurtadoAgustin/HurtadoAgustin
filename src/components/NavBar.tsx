import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";

function NavBar() {
  const navLinks = ["skills", "proyects", "contact"];

  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Link to="/" className="text-decoration-none">
          <Navbar.Brand>Hurtado Agustín</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
          <Nav className="me-auto d-flex flex-row">
            {
              navLinks.map(link => (
                <Link to={`/${link}`} className="link-info text-decoration-none p-2">
                  {link[0].toUpperCase() + link.substring(1)}
                </Link>
              ))
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
