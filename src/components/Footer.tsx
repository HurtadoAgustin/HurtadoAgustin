import React from "react";
import { Icon } from "@iconify/react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import linksNavbar from "../utils/linksNavbar.json";

function Footer(): React.ReactElement {
  const { socialMedias } = linksNavbar;

  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src="" alt="Logo"/>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="footer-social">
              {
                socialMedias.map(social => (
                  <a key={social.name} href={social.href}>
                    <Icon icon={social.icon} />
                  </a>
                ))
              }
            </div>
            <p>Copyright 2022. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer;
