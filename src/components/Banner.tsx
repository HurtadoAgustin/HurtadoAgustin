import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import useRotateText from "../hooks/useRotateText";

function Banner(): React.ReactElement {
  const toRotate = ["Web Developer", "Web Designer", "Full-Stack Developer"];
  const title = useRotateText(toRotate);

  return (
    <section className="banner" id="banner">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={7} xl={7}>
            <div>
              <span className="tagline">Welcome to my Portfolio</span>
              <h1>
                Hi! I'm Agustín,
              </h1>
              <span className="title-rotate">
                <h2>I'm {title}</h2>
              </span>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officia, qui quas porro odio quis neque vero eum error quibusdam iure. Consectetur iste et quos harum iure, quis nesciunt. Porro, nihil!</p>
            </div>
          </Col>
          <Col xs={12} md={5} xl={5}>
            <div className="">
              <img src="" alt="Banner" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
};

export default Banner;
