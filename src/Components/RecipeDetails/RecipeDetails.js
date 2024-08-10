import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Spinner, Button } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";
import { RecipeContext } from "../../Context/RecipeContext.js";

import "./RecipeStyle.css";
import "bootstrap/dist/css/bootstrap.min.css";

const RecipeDetails = () => {
  const { id } = useParams();
  const { recipes } = useContext(RecipeContext);
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    const selectedRecipe = recipes.find((recipe) => recipe.uri === id);
    setRecipe(selectedRecipe);
  }, [id, recipes]);

  if (!recipe)
    return (
      <div className="d-flex justify-content-center mt-5">
        <Spinner
          animation="grow"
          variant="primary"
          role="status"
          className="mt-5"
        />
      </div>
    );

  // Assume an average serving size
  const servingSize = 150; // grams
  const totalWeight = recipe.totalWeight; // grams
  const servings = (totalWeight / servingSize).toFixed(0);

  return (
    <Container className="mt-5 mb-5">
      <Row className="justify-content-center">
        <Col xs={12} md={6}>
          <h1>{recipe.label}</h1>
          <img
            src={recipe.image}
            alt={recipe.label}
            className="img-fluid rounded-5"
          />
          <h3 className="mt-3">Ingredients</h3>
          <ul>
            {recipe.ingredientLines.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          <h5 className="mt-3">
            Click the button below to view full recipe for {recipe.label} :
          </h5>
          <Button
            variant="danger"
            className="rounded-3 source-btn mb-3"
            onClick={(e) => {
              e.preventDefault(); // Prevent default link behavior
              window.open(recipe.url, "_blank", "noopener,noreferrer");
            }}
          >
            Source
          </Button>
        </Col>

        <Col xs={12} md={6}>
          <div className="nutrition-label">
            <h3>Nutrition Label</h3>
            <hr />
            <div className="head-nutrients">
              <p>{Math.round(recipe.calories)} CALORIES / SERVING</p>
              <p>
                {((Math.round(recipe.calories) / 2000) * 100).toFixed(0)}% DAILY
                VALUE
              </p>
              <p>{servings} SERVINGS</p>
            </div>

            <hr />
            <Accordion defaultActiveKey="0">
              <Accordion.Item eventKey="1">
                <Accordion.Header>Health Labels</Accordion.Header>
                <Accordion.Body>
                  <ul>
                    {recipe.healthLabels.map((label, index) => (
                      <li key={index}>{label}</li>
                    ))}
                  </ul>
                </Accordion.Body>
              </Accordion.Item>
            </Accordion>

            <hr />
            <ul>
              <li>
                Fat:{" "}
                {recipe.totalNutrients.FAT
                  ? `${Math.round(recipe.totalNutrients.FAT.quantity)} ${
                      recipe.totalNutrients.FAT.unit
                    }`
                  : "N/A"}
                <ul>
                  <li>
                    Saturated Fat:{" "}
                    {recipe.totalNutrients.FASAT
                      ? `${Math.round(recipe.totalNutrients.FASAT.quantity)} ${
                          recipe.totalNutrients.FASAT.unit
                        }`
                      : "N/A"}
                  </li>
                  <li>
                    Trans Fat:{" "}
                    {recipe.totalNutrients.FATRN
                      ? `${Math.round(recipe.totalNutrients.FATRN.quantity)} ${
                          recipe.totalNutrients.FATRN.unit
                        }`
                      : "N/A"}
                  </li>
                </ul>
              </li>
              <li>
                Carbs:{" "}
                {recipe.totalNutrients.CHOCDF
                  ? `${Math.round(recipe.totalNutrients.CHOCDF.quantity)} ${
                      recipe.totalNutrients.CHOCDF.unit
                    }`
                  : "N/A"}
                <ul>
                  <li>
                    Fiber:{" "}
                    {recipe.totalNutrients.FIBTG
                      ? `${Math.round(recipe.totalNutrients.FIBTG.quantity)} ${
                          recipe.totalNutrients.FIBTG.unit
                        }`
                      : "N/A"}
                  </li>
                  <li>
                    Sugars:{" "}
                    {recipe.totalNutrients.SUGAR
                      ? `${Math.round(recipe.totalNutrients.SUGAR.quantity)} ${
                          recipe.totalNutrients.SUGAR.unit
                        }`
                      : "N/A"}
                  </li>
                </ul>
              </li>
              <li>
                Protein:{" "}
                {recipe.totalNutrients.PROCNT
                  ? `${Math.round(recipe.totalNutrients.PROCNT.quantity)} ${
                      recipe.totalNutrients.PROCNT.unit
                    }`
                  : "N/A"}
              </li>
              <li>
                Cholesterol:{" "}
                {recipe.totalNutrients.CHOLE
                  ? `${Math.round(recipe.totalNutrients.CHOLE.quantity)} ${
                      recipe.totalNutrients.CHOLE.unit
                    }`
                  : "N/A"}
              </li>
              <li>
                Sodium:{" "}
                {recipe.totalNutrients.NA
                  ? `${Math.round(recipe.totalNutrients.NA.quantity)} ${
                      recipe.totalNutrients.NA.unit
                    }`
                  : "N/A"}
              </li>
              <li>
                Vitamins & Minerals:
                <ul>
                  <li>
                    Vitamin D:{" "}
                    {recipe.totalNutrients.VITD
                      ? `${Math.round(recipe.totalNutrients.VITD.quantity)} ${
                          recipe.totalNutrients.VITD.unit
                        }`
                      : "N/A"}
                  </li>
                  <li>
                    Calcium:{" "}
                    {recipe.totalNutrients.CA
                      ? `${Math.round(recipe.totalNutrients.CA.quantity)} ${
                          recipe.totalNutrients.CA.unit
                        }`
                      : "N/A"}
                  </li>
                  <li>
                    Iron:{" "}
                    {recipe.totalNutrients.FE
                      ? `${Math.round(recipe.totalNutrients.FE.quantity)} ${
                          recipe.totalNutrients.FE.unit
                        }`
                      : "N/A"}
                  </li>
                  <li>
                    Potassium:{" "}
                    {recipe.totalNutrients.K
                      ? `${Math.round(recipe.totalNutrients.K.quantity)} ${
                          recipe.totalNutrients.K.unit
                        }`
                      : "N/A"}
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default RecipeDetails;
