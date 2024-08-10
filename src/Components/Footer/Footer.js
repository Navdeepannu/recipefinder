import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Nav, Alert } from "react-bootstrap";
import "./Footer.css"; // Import custom styles for the footer

const Footer = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [alert, setAlert] = useState({ show: false, variant: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (email.trim().length > 0 && message.trim().length > 0) {
      setAlert({
        show: true,
        variant: "success",
        message: "Form submitted successfully!",
      });

      // Reset form fields after submission
      setEmail("");
      setMessage("");
    } else {
      setAlert({
        show: true,
        variant: "danger",
        message: "Please fill in both the email and message fields.",
      });
    }

    // Hide alert after a few seconds
    setTimeout(() => setAlert({ show: false, variant: "", message: "" }), 3000);
  };

  return (
    <footer className="footer bg-dark text-white py-4">
      <Container>
        <Row>
          <Col md={4}>
            <h1>Recipe Finder React App</h1>
            <p>Discover a world of recipes at your fingertips.</p>
          </Col>
          <Col md={5}>
            <h5>Contact Us</h5>
            {alert.show && (
              <Alert
                variant={alert.variant}
                onClose={() =>
                  setAlert({ show: false, variant: "", message: "" })
                }
                dismissible
              >
                {alert.message}
              </Alert>
            )}
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="formEmail" className="mb-2">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="mb-2"
                />
              </Form.Group>
              <Form.Group controlId="formMessage" className="mb-2">
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Your message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Col>
          <Col md={3}>
            <h5>Follow Us</h5>
            <Nav className="flex-column">
              <Nav.Link
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                GitHub
              </Nav.Link>
              <Nav.Link
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Twitter
              </Nav.Link>
              <Nav.Link
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white"
              >
                Instagram
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
