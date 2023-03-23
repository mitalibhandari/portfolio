import React, { useRef, useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import emailjs from "@emailjs/browser";
import contactImg from "../assets/img/contact-img.svg";

function Contact() {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);

  const onFormUpdate = (category, value) => {
    setFormDetails({
      ...formDetails,
      [category]: value,
    });
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qqolnkw",
        "template_hb4vczk",
        form.current,
        "KrTQ9wINqsVNyc2da"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section className="contact" id="connect">
      <Row className="justify-content-md-center">
        <h2>Get In Touch</h2>
        <Col size={12} md={6}>
          <img src={contactImg} alt="Contact Us"></img>
        </Col>

        <Col md={3} className="justify-content-md-center">
          <Form ref={form} onSubmit={sendEmail}>
            <Form.Group controlId="firstName">
              <Form.Control
                required
                name="firstName"
                type="text"
                placeholder="First Name"
                value={formDetails.firstName}
                onChange={(e) => onFormUpdate("firstName", e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="lastName">
              <Form.Control
                required
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formDetails.lastName}
                onChange={(e) => onFormUpdate("lastName", e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="email">
              <Form.Control
                required
                name="email"
                type="email"
                placeholder="Email Address"
                value={formDetails.email}
                onChange={(e) => onFormUpdate("email", e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Form.Group controlId="message">
              <Form.Control
                as="textarea"
                name="message"
                value={formDetails.message}
                placeholder="Message"
                onChange={(e) => onFormUpdate("message", e.target.value)}
              ></Form.Control>
            </Form.Group>

            <Button type="submit">
              <span>Send</span>
            </Button>
          </Form>
        </Col>
      </Row>
    </section>
  );
}

export default Contact;
