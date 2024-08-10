import React, { useContext } from "react";
import { RecipeContext } from "../../Context/RecipeContext.js";

// Bootstrap
import { InputGroup, Form, Button, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

import "./Input.css";

// Importing filter component
import Filter from "../Filter/Filter.js";

const Input = () => {
  console.log("Input Rended");

  // context data
  const {
    searchQuery,
    setSearchQuery,
    fetchRecipes,
    cuisineType,
    setCuisineType,
    mealType,
    setMealType,
    dietType,
    setDietType,
  } = useContext(RecipeContext);

  // function to handle input change
  const handleInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  // handle search click
  const handleSearchClick = () => {
    fetchRecipes(); // Fetch recipes when search button is clicked
  };

  // handle filter change
  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    if (name === "mealType") setMealType(value);
    if (name === "cuisineType") setCuisineType(value);
    if (name === "dietType") setDietType(value);
  };

  return (
    <Container className="mt-5">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={7}>
          <InputGroup className="mb-2">
            <Form.Control
              type="text"
              value={searchQuery}
              onChange={handleInputChange}
              placeholder="Search for recipes..."
              aria-label="Search Recipes"
              style={{
                outline: "none",
                boxShadow: "none",
                borderColor: "none",
                padding: "10px",
              }}
            />
            <Button
              variant="dark"
              size="lg"
              onClick={handleSearchClick}
              className="button"
            >
              Search
            </Button>
          </InputGroup>
        </Col>
      </Row>
      <Container>
        <Filter
          handleFilterChange={handleFilterChange}
          mealType={mealType}
          cuisineType={cuisineType}
          dietType={dietType}
        />
      </Container>
    </Container>
  );
};

export default Input;
