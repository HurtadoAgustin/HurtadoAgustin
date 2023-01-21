import React from "react";
import Carousel from "react-multi-carousel";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import SkillCard from "./SkillCard";

import dataJSON from "../utils/data.json";
import carouselConfig from "../utils/carouselConfig.json";

function Skills(): React.ReactElement {
  const { techs } = dataJSON;

  return (
    <section id="skills" className="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx wow zoomIn">
              <h2>Skills section</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. <br/><br/> Perspiciatis laudantium aliquam eos, soluta a debitis numquam? At voluptatibus quia suscipit laboriosam veniam aut quidem. Voluptates atque esse corrupti fugiat quia!</p>
              <Carousel
                responsive={carouselConfig}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                {
                  techs.map(tech => (
                    <SkillCard
                      key={tech.id}
                      {...tech}
                    />
                  ))
                }
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Skills;
