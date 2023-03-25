import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col className="text-center py=3">
            <p>Copyright &copy; Mitali Bhandari</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
