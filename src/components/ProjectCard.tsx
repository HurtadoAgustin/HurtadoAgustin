import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import { Project } from "../react-app-env";

function ProjectCard(project: Project): React.ReactElement {
  return (
    <Row>
      <Col sm={6} md={8}>
        <div className="proj-img">
          <img src={project.image} alt={`Preview of ${project.name}`}/>
        </div>
      </Col>
      <Col sm={6} md={4}>
        <div className="proj-txt">
          <h4>{project.name}</h4>
          <span>{project.description.english}</span>
        </div>
      </Col>
    </Row>
  )
}

export default ProjectCard;
