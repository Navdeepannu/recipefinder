import React, { useState } from "react";
import { Link } from "react-router-dom";
import background from "./background.jpg";

// Bootstrap
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Alert from "react-bootstrap/Alert";
import "bootstrap/dist/css/bootstrap.min.css";

function Signup() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [showAlert, setShowAlert] = useState(false);

  // Validation functions
  const validateEmail = (email) => {
    // Simple email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  // Validate passowrd
  const validatePassword = () => {
    // password length greater then 6
    if (password.length < 6) {
      // set error message
      setErrors((prevErrors) => ({
        ...prevErrors,
        password: "Password must be at least 6 characters long.",
      }));
      return false;
    }
    // password and confirm password match
    if (password !== confirmPassword) {
      // set error message
      setErrors((prevErrors) => ({
        ...prevErrors,
        confirmPassword: "Passwords do not match.",
      }));
      return false;
    }
    return true;
  };

  const validateForm = () => {
    const newErrors = {};
    if (!firstName) newErrors.firstName = "First name is required.";
    if (!lastName) newErrors.lastName = "Last name is required.";
    if (!email) newErrors.email = "Email is required.";
    else if (!validateEmail(email)) newErrors.email = "Invalid email format.";
    if (!password) newErrors.password = "Password is required.";
    if (!confirmPassword)
      newErrors.confirmPassword = "Please confirm your password.";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0 && validatePassword();
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Submit the form data
      setShowAlert(true);

      // Reset form fields
      setFirstName("");
      setLastName("");
      setEmail("");
      setPassword("");
      setConfirmPassword("");
      setErrors({});

      console.log("Submitted successfully");
      console.log("First name:", firstName);
      console.log("Last name:", lastName);
      console.log("Email:", email);
      console.log("Password:", password);
      console.log("Confirm password:", confirmPassword);
    }
  };

  return (
    <Container
      fluid
      className="d-flex justify-content-center align-items-center min-vh-100"
      style={{
        backgroundImage: `url(${background})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
      }}
    >
      <div
        className="p-5 rounded-4"
        style={{
          backgroundColor: "#C2D3DD",
          color: "#333",
          opacity: 0.9,
          maxWidth: "400px",
          width: "100%",
        }}
      >
        {showAlert && (
          <Alert
            variant="success"
            onClose={() => setShowAlert(false)}
            dismissible
          >
            Signup successful! Please login.
          </Alert>
        )}
        <Form onSubmit={handleSubmit}>
          <Form.Floating className="mb-3">
            <Form.Control
              id="firstName"
              type="text"
              placeholder="John"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              isInvalid={!!errors.firstName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.firstName}
            </Form.Control.Feedback>
            <label htmlFor="firstName">First Name</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="lastName"
              type="text"
              placeholder="Doe"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              isInvalid={!!errors.lastName}
            />
            <Form.Control.Feedback type="invalid">
              {errors.lastName}
            </Form.Control.Feedback>
            <label htmlFor="lastName">Last Name</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="email"
              type="email"
              placeholder="example@gmail.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              isInvalid={!!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
            <label htmlFor="email">Email Address</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="passwordField"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              isInvalid={!!errors.password}
            />
            <Form.Control.Feedback type="invalid">
              {errors.password}
            </Form.Control.Feedback>
            <label htmlFor="passwordField">Password</label>
          </Form.Floating>

          <Form.Floating className="mb-3">
            <Form.Control
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              isInvalid={!!errors.confirmPassword}
            />
            <Form.Control.Feedback type="invalid">
              {errors.confirmPassword}
            </Form.Control.Feedback>
            <label htmlFor="confirmPassword">Confirm Password</label>
          </Form.Floating>

          <Form.Label>
            <>
              Already have an account? <Link to="/login">Login here</Link>
            </>
          </Form.Label>
          <Button variant="danger" type="submit" className="w-100 mt-2">
            Create Account
          </Button>
        </Form>
      </div>
    </Container>
  );
}

export default Signup;
