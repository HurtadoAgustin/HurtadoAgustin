import React from "react";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ContactForm from "./ContactForm";

function Contact(): React.ReactElement {
  return (
    <section id="contact" className="contact">
      <Container>
        <Row>
          <Col size={12} md={6}>

          </Col>
          <Col size={12} md={6}>
            <div>
              <h2>Get In Touch</h2>
              <ContactForm />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Contact;