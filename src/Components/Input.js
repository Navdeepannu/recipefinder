// src/components/Input.js
import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext.js"; // Corrected import path

// Bootstrap
import { InputGroup, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Input = () => {
  const { searchQuery, setSearchQuery, fetchRecipes } =
    useContext(RecipeContext);

  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchClick = () => {
    fetchRecipes(); // Fetch recipes when search button is clicked
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <InputGroup className="mb-3">
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for recipes..."
              aria-label="Search Recipes"
            />
            <Button variant="dark" onClick={handleSearchClick}>
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
    </Container>
  );
};

export default Input;
