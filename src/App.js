import React from "react";

// Context Provider
import { RecipeProvider } from "./Context/RecipeContext.js";

// Components
import Input from "./Components/Input.js";
import Header from "./Components/Header.js";
import Card from "./Components/Card.js";
import ScrollToTop from "./Components/ScrollTop.js";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <RecipeProvider>
      <div>
        <Header />
        <Input /> 
        <Card />
        <ScrollToTop />
      </div>
    </RecipeProvider>
  );
};

export default App;
