import React, { createContext, useState, useCallback } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // recipe data state
  const [searchQuery, setSearchQuery] = useState(""); // search query state
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state to handle API errors

  // Function to fetch recipes based on searchQuery
  const fetchRecipes = useCallback(() => {
    if (searchQuery.trim() === "") return; // Only fetch if search query is not empty

    setLoading(true);
    setError(null);

    fetch(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=196aada4&app_key=%20df03f33bc02a0695a3c5c34e6c1953b5`
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Extract recipes from hits
        const fetchedRecipes = data.hits.map((hit) => hit.recipe);
        setRecipes(fetchedRecipes); // Set recipe data in state
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [searchQuery]); // Dependency array for fetchRecipes

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchQuery,
        setSearchQuery,
        fetchRecipes,
        loading,
        error,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
