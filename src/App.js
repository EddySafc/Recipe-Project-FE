import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import Recipe from "./Components/Recipe";
import SingleRecipe from "./Components/SingleRecipe";
import SavedRecipes from "./Components/SavedRecipes";
import ShoppingList from "./Components/ShoppingList";

function App() {
  const [recipe, setRecipe] = useState([]);
  const [savedRecipes, setSavedRecipes] = useState([]);
  const [saveButton, setSaveButton] = useState(false);
  const [shoppingList, setShoppingList] = useState([]);
  return (
    <BrowserRouter>
      <div className="App">
        <section className="header-nav">
          <Header />
          <Nav className="nav-bar" />
        </section>
        <Routes>
          <Route
            path="/"
            element={
              <Recipe
                savedRecipes={savedRecipes}
                setSavedRecipes={setSavedRecipes}
                recipe={recipe}
                setRecipe={setRecipe}
              />
            }
          />
          <Route
            path="/saved-recipes"
            element={
              <SavedRecipes
                savedRecipes={savedRecipes}
                setSavedRecipes={setSavedRecipes}
              />
            }
          />
          <Route
            path="/shopping-list"
            element={
              <ShoppingList
                shoppingList={shoppingList}
                setShoppingList={setShoppingList}
              />
            }
          />
          <Route
            path="/:idMeal"
            element={
              <SingleRecipe
                savedRecipes={savedRecipes}
                setSavedRecipes={setSavedRecipes}
                recipe={recipe}
                setRecipe={setRecipe}
                saveButton={saveButton}
                setSaveButton={setSaveButton}
              />
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
