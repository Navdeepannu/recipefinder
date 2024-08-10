import React, { useContext } from "react";
import { RecipeContext } from "../../Context/RecipeContext.js";
import { FaHeart } from "react-icons/fa";
import {
  Container,
  Row,
  Col,
  Card as BootstrapCard,
  Button
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const Favorites = () => {
  const { favorites, addToFavorites } = useContext(RecipeContext);

  // Conditional rendering
  if (favorites.length === 0) {
    return <p className="text-center mt-4">No favorite recipes found.</p>;
  }

  return (
    <Container className="mt-4 custom-container">
      <Row className="justify-content-center">
        {favorites.map((recipe) => (
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
                    onClick={() => {
                      window.open(recipe.url, "_blank", "noopener,noreferrer");
                    }}
                  >
                    Source
                  </Button>
                  <Button
                    variant="link"
                    className="rounded-5 ms-2 favorite-button"
                    onClick={() => addToFavorites(recipe)}
                    style={{ color: "red" }} // Heart color remains red for unfavorite action
                  >
                    <FaHeart />
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

export default Favorites;
