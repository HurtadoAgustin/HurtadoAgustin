import React from "react";
import Container from "react-bootstrap/Container";
import Tab from "react-bootstrap/Tab";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import ProjectCard from "./ProjectCard";

import dataJSON from "../utils/data.json";

function Projects() {
  const { projects } = dataJSON;

  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <div>
              <h2>Projects</h2>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nemo aut vel dolorem accusamus perferendis mollitia harum quam quod, quas ipsam porro expedita similique. Incidunt distinctio ducimus ab mollitia, consequuntur in.</p>
              <Tab.Container id="projects-tabs" defaultActiveKey="first">
                <Nav
                  variant="pills"
                  id="pills-tab"
                  className="nav-pills mb-5 justify-content-center align-items-center"
                >
                  {
                    projects.map(project => (
                      <Nav.Item key={project.id}>
                        <Nav.Link eventKey={project.name}>
                          {project.name}
                        </Nav.Link>
                      </Nav.Item>
                    ))
                  }
                </Nav>
                <Tab.Content
                  id="slideInUp"
                  className=""
                >
                  {
                    projects.map(project => (
                      <Tab.Pane
                        key={project.id}
                        eventKey={project.name}
                      >
                        <ProjectCard
                          key={project.id}
                          {...project}
                        />
                      </Tab.Pane>
                    ))
                  }
                </Tab.Content>
              </Tab.Container>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Projects;
