// Context
import React, { useContext } from "react";
import { RecipeContext } from "../Context/RecipeContext.js";

// Bootstrap
import {
  Card as BootstrapCard,
  Spinner,
  Alert,
  Container,
  Row,
  Col,
  Button,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Card = () => {
  // Context data
  const { recipes, loading, error } = useContext(RecipeContext);

  // Conditional rendering
  if (loading)
    return (
      <Spinner animation="border" variant="primary" className="mt-5 ml-5" />
    );
  if (error)
    return (
      <Alert variant="danger" className="mt-5">
        Error: {error}
      </Alert>
    );
  if (recipes.length === 0)
    return <p className="text-center mt-2">No recipes found.</p>;

  const handleClick = () => {
    // Redirect to recipe page, when clicked
  };

  // Render recipes in Card format
  return (
    <Container className="mt-4">
      <Row className="justify-content-center">
        {/* Mapping through the recipes array and render each recipe in Card format */}
        {recipes.map((recipe) => (
          // uri is the unique identifier for each recipe
          <Col xs={12} md={6} lg={4} xl={3} key={recipe.uri} className="mb-4">
            <BootstrapCard>
              <BootstrapCard.Img
                variant="top"
                src={recipe.image}
                alt={recipe.label}
              />
              <BootstrapCard.Body>
                {/* Recipe label */}
                <BootstrapCard.Title>{recipe.label}</BootstrapCard.Title>
                {/* Recipe cuisine type */}
                <BootstrapCard.Subtitle className="mb-2 text-muted">
                  {recipe.cuisineType.join(", ").toUpperCase()}
                </BootstrapCard.Subtitle>
                <BootstrapCard.Text>
                  {/* Recipe Source URL button*/}
                  <Button
                    variant="dark"
                    className="rounded-5 me-2"
                    onClick={() =>
                      window.open(recipe.url, "_blank", "noopener,noreferrer")
                    }
                  >
                    Source
                  </Button>

                  {/* Recipe Explore button --> Redirect to recipe page */}
                  <Button
                    variant="outline-dark"
                    className="rounded-5"
                    onClick={handleClick}
                  >
                    Explore
                  </Button>
                </BootstrapCard.Text>
              </BootstrapCard.Body>
            </BootstrapCard>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Card;
