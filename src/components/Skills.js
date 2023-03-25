import { Container, Row, Col } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { responsive, skills } from "../constants/index";

function Skills() {
  return (
    <section className="skills" id="skills">
      <Container>
        <Row>
          <Col>
            <div className="skill-bx">
              <h2>Technical Skills</h2>
              <p>
                I'm a skilled Full Stack software developer with experience in
                Python and JavaScript, and expertise in frameworks like Django,
                React, and Node.js. I'm a quick learner and an efficient problem
                solver. I am passionate about creating efficient, scalable, and
                user-friendly solutions that solve real-world problems.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
                autoPlay={true}
              >
                {skills.map((skill) => (
                  <div key={skill.id} className="item">
                    <img src={skill.image} alt="img" />
                    <h5>{skill.name}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Skills;
