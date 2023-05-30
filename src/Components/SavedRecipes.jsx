import { useEffect } from "react";
import { getSavedRecipes } from "../requests";
import { Link } from "react-router-dom";

const SavedRecipes = ({ savedRecipes, setSavedRecipes }) => {
  useEffect(() => {
    getSavedRecipes().then((recipes) => {
      console.log("saved recipes:", savedRecipes);
      setSavedRecipes(recipes.data.result);
    });
  }, [setSavedRecipes]);
  return (
    <section>
      <h1>Your Saved Recipes:</h1>
      <ul className="multi-all-meals">
        {savedRecipes.map((recipe) => {
          return (
            <li key={recipe.recipe_id} className="multi-meal-card">
              <p>{recipe.recipe_name}</p>
              <img
                className="multi-meal-image"
                alt="no visual for this recipe"
                src={recipe.recipe_pic}
              ></img>
              <p>
                <Link id="card-link" to={`/${recipe.recipe_id}`}>
                  See Further Details
                </Link>
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default SavedRecipes;
