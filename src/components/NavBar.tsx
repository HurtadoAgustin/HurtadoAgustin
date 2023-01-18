import React from "react";
import { Icon } from "@iconify/react";

import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";

import linksNavbar from "../utils/linksNavbar.json";

function NavBar() {
  const { sections, socialMedias } = linksNavbar;

  return (
    <Navbar
      sticky="top"
      expand="lg"
      bg="dark"
      variant="dark"
    >
      <Container>
        <Navbar.Brand href="#banner">
          <img src="" alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {
              sections.map(link => (
                <Nav.Link key={link} href={`#${link}`}>
                  {link[0].toUpperCase() + link.substring(1)}
                </Nav.Link>
              ))
            }
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              {
                socialMedias.map(social => (
                  <a key={social.name} href={social.href}>
                    <Icon icon={social.icon} />
                  </a>
                ))
              }
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
};

export default NavBar;
