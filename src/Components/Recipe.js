import React, { useContext } from "react";

// Context
import { RecipeContext } from "../Context/RecipeContext.js";

// Bootstrap
import { Spinner, Alert } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function Recipe() {
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

  return (
    <div>
      {/* Recipe page here --> After the use clicks on Explore Button from Card */}
    </div>
  );
}

export default Recipe;
