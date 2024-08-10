import React from "react";

// Context Provider
import { RecipeProvider } from "./Context/RecipeContext.js";

// Browser Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import NavBar from "./Components/NavBar/NavBar.js";
import Home from "./Components/Home/Home.js";
import ScrollToTop from "./Components/ScrollTop/ScrollTop.js";
import RecipeDetails from "./Components/RecipeDetails/RecipeDetails.js";
import Favourite from "./Components/Favorite/Favourite.js";
import Login from "./Components/Authentication/Login.js";
import Signup from "./Components/Authentication/Signup.js";
import Footer from "./Components/Footer/Footer.js";

// Bootstrap CSS
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

const App = () => {
  return (
    <div className="App">
      <RecipeProvider>
        <Router>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes/:id" element={<RecipeDetails />} />
            <Route path="/favourite" element={<Favourite />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
          <Footer />
        </Router>
      </RecipeProvider>
    </div>
  );
};

export default App;
