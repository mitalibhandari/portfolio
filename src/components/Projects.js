import React from "react";
import { Container, Row, Col, ListGroup, Badge } from "react-bootstrap";
import { projects } from "../constants/index";
import "animate.css";
import TrackVisibility from "react-on-screen";

const ProjectCard = ({ title, description, imgUrl, gitUrl, tags }) => {
  return (
    <Col sm={6} md={4}>
      <ListGroup className="proj-listgroup">
        <ListGroup.Item variant="flush">
          <h4 class="my-2">
            {title}
            <Badge bg="light" text="dark">
              <a style={{ color: "black" }} href={gitUrl}>
                <i className="fa-brands fa-github fa-2x"></i>
              </a>
            </Badge>
          </h4>
          <img
            className="proj-img"
            src={imgUrl}
            alt=""
            height={280}
            width={350}
            class="my-2"
          />
          <span>{description}</span>
          <div className="tags">
            {tags.map((tag) => (
              <p key={tag.name} style={{ color: `${tag.color}` }}>
                #{tag.name}
              </p>
            ))}
          </div>
        </ListGroup.Item>
      </ListGroup>
    </Col>
  );
};

function Projects() {
  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    Following projects showcases my skills and experience
                    through real-world examples of my work. Each project is
                    briefly described with links to code repositories in it. It
                    reflects my ability to solve complex problems, work with
                    different technologies, and manage projects effectively.
                  </p>
                </div>
              )}
            </TrackVisibility>
            <Row>
              {projects.map((project, index) => {
                return <ProjectCard key={index} {...project} />;
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Projects;
