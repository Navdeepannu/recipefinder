import React, { createContext, useState, useCallback } from "react";

export const RecipeContext = createContext();

export const RecipeProvider = ({ children }) => {
  const [recipes, setRecipes] = useState([]); // recipe data state
  const [searchQuery, setSearchQuery] = useState(""); // search query state
  const [loading, setLoading] = useState(false); // loading state
  const [error, setError] = useState(null); // error state to handle API errors

  // Filer state
  const [cuisineType, setCuisineType] = useState("");
  const [mealType, setMealType] = useState("");
  const [dietType, setDietType] = useState("");

  // favourites
  const [favorites, setFavorites] = useState([]);

  // Function to fetch recipes based on searchQuery
  const fetchRecipes = useCallback(() => {
    if (searchQuery.trim() === "") return; // Only fetch if search query is not empty

    setLoading(true);
    setError(null);

    // building parameters for API call
    let query = `https://api.edamam.com/api/recipes/v2?type=public&q=${searchQuery}&app_id=196aada4&app_key=%20df03f33bc02a0695a3c5c34e6c1953b5`;
    if (cuisineType) query += `&cuisineType=${cuisineType}`;
    if (mealType) query += `&mealType=${mealType}`;
    if (dietType) query += `&diet=${dietType}`;

    // API call
    fetch(query)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        // Extract recipes from hits
        const fetchedRecipes = data.hits.map((hit) => ({
          ...hit.recipe,
          isFavorite: favorites.some((fav) => fav.uri === hit.recipe.uri), // Check if recipe is favorite
        }));
        setRecipes(fetchedRecipes); // Set recipe data in state
      })
      .catch((error) => setError(error.message))
      .finally(() => setLoading(false));
  }, [searchQuery, mealType, cuisineType, dietType, favorites]); // Dependency array for fetchRecipes

  // Function to add a recipe to favorites
  const addToFavorites = (recipe) => {
    setFavorites((prevFavorites) => {
      const isAlreadyFavorite = prevFavorites.some(
        (fav) => fav.uri === recipe.uri
      );

      const updatedFavorites = isAlreadyFavorite
        ? prevFavorites.filter((fav) => fav.uri !== recipe.uri)
        : [...prevFavorites, recipe];

      // Update recipes with the new favorite status
      setRecipes((prevRecipes) =>
        prevRecipes.map((rec) =>
          rec.uri === recipe.uri ? { ...rec, isFavorite: !isAlreadyFavorite } : rec
        )
      );
      return updatedFavorites;
    });
  };

  return (
    <RecipeContext.Provider
      value={{
        recipes,
        searchQuery,
        setSearchQuery,
        fetchRecipes,
        addToFavorites,
        favorites,
        loading,
        error,
        cuisineType,
        setCuisineType,
        mealType,
        setMealType,
        dietType,
        setDietType,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};
