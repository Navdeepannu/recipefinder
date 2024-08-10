import React from "react";
import { Container, Form, Row, Col, Accordion } from "react-bootstrap";

import "./Filter.css";

const Filter = ({ handleFilterChange, cuisineType, mealType, dietType }) => {
  return (
    <Container className="custom-container">
      <Row className="justify-content-center">
        <Col xs={12} md={8} lg={6}>
          <Accordion
            defaultActiveKey="0"
            className="no-focus-outline-accordion"
          >
            <Accordion.Item eventKey="0">
              <Accordion.Header>Filter Options</Accordion.Header>
              <Accordion.Body>
                <Form>
                  <Row className="mb-3 justify-content-center">
                    <Col className="d-flex" md={4}>
                      <Form.Group controlId="mealType">
                        <Form.Label>Meal Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="mealType"
                          value={mealType}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any</option>
                          <option value="breakfast">Breakfast</option>
                          <option value="lunch">Lunch</option>
                          <option value="dinner">Dinner</option>
                          <option value="snack">Snack</option>
                          <option value="teatime">Teatime</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col className="d-flex" md={4}>
                      <Form.Group controlId="cuisineType">
                        <Form.Label>Cuisine Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="cuisineType"
                          value={cuisineType}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any</option>
                          <option value="Indian">Indian</option>
                          <option value="American">American</option>
                          <option value="Asian">Asian</option>
                          <option value="Italian">Italian</option>
                          <option value="Mexican">Mexican</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                    <Col md={4} className="d-flex">
                      <Form.Group controlId="dietType">
                        <Form.Label>Diet Type</Form.Label>
                        <Form.Control
                          as="select"
                          name="dietType"
                          value={dietType}
                          onChange={handleFilterChange}
                        >
                          <option value="">Any</option>
                          <option value="balanced">Balanced</option>
                          <option value="high-protein">High-Protein</option>
                          <option value="low-fat">Low-Fat</option>
                          <option value="low-carb">Low-Carb</option>
                        </Form.Control>
                      </Form.Group>
                    </Col>
                  </Row>
                </Form>
              </Accordion.Body>
            </Accordion.Item>
          </Accordion>
        </Col>
      </Row>
    </Container>
  );
};

export default Filter;
