import React, { useContext } from "react";
import { RecipeContext } from "../../Context/RecipeContext.js";
import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart } from "react-icons/fa";
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
import './Card.css';

const Card = () => {
  const { recipes, loading, error, addToFavorites } = useContext(RecipeContext);

  if (loading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="danger" role="status" className="mt-5" />
      </div>
    );
  if (error)
    return (
      <Alert variant="danger" className="mt-5">
        Error: {error}
      </Alert>
    );
  if (recipes.length === 0)
    return <p className="text-center mt-2">No recipes found.</p>;

  return (
    <Container className="mt-4 custom-container">
      <Row className="justify-content-center">
        {recipes.map((recipe) => (
          <Col xs={12} md={6} lg={4} xl={3} key={recipe.uri} className="mb-4 custom-column">
            <BootstrapCard>
              <BootstrapCard.Img variant="top" src={recipe.image} alt={recipe.label} />
              <BootstrapCard.Body>
                <BootstrapCard.Title>{recipe.label}</BootstrapCard.Title>
                <BootstrapCard.Subtitle className="mb-2 mt-2 text-muted">
                  {recipe.cuisineType.join(", ").toUpperCase()}
                </BootstrapCard.Subtitle>
                <BootstrapCard.Text>
                  <Button
                    variant="dark"
                    className="rounded-5 me-2 custom-button"
                    onClick={(e) => {
                      e.preventDefault();
                      window.open(recipe.url, "_blank", "noopener,noreferrer");
                    }}
                  >
                    Source
                  </Button>
                  <Link to={`/recipes/${encodeURIComponent(recipe.uri)}`}>
                    <Button variant="outline-dark" className="rounded-5 custom-outline-button">
                      Details
                    </Button>
                  </Link>
                  <Button
                    variant="link"
                    className="rounded-5 ms-2 favorite-button"
                    onClick={() => addToFavorites(recipe)}
                    style={{ color: recipe.isFavorite ? "red" : "grey" }}
                  >
                    {recipe.isFavorite ? <FaHeart /> : <FaRegHeart />}
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
