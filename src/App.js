import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Recipe from "./Components/Recipe";
import SingleRecipe from "./Components/SingleRecipe";

function App() {
  const [recipe, setRecipe] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <Nav className="nav-bar" />
        <Routes>
          <Route
            path="/"
            element={<Recipe recipe={recipe} setRecipe={setRecipe} />}
          />
          <Route
            path="/:idMeal"
            element={<SingleRecipe recipe={recipe} setRecipe={setRecipe} />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
