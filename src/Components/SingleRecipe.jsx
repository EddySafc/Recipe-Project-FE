import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  getRecipeById,
  saveRecipe,
  getSavedRecipes,
  saveIngredients,
} from "../requests";

const SingleRecipe = ({ recipe, setRecipe, savedRecipes, setSavedRecipes }) => {
  const { idMeal } = useParams();
  const [buttonCount, setButtonCount] = useState(0);

  useEffect(() => {
    getRecipeById(idMeal).then((result) => {
      setRecipe(result.meals);
    });
    getSavedRecipes().then((recipes) => {
      setSavedRecipes(recipes.data.result);
    });
  }, [idMeal, setRecipe, setSavedRecipes, buttonCount]);

  console.log(buttonCount);
  const handleSaveIngredientsClick = () => {
    recipe.map((meal) => {
      return (
        meal.strIngredient1 !== ""
          ? saveIngredients(meal.strIngredient1, meal.strMeasure1)
          : null,
        meal.strIngredient2 !== ""
          ? saveIngredients(meal.strIngredient2, meal.strMeasure2)
          : null,
        meal.strIngredient3 !== ""
          ? saveIngredients(meal.strIngredient3, meal.strMeasure3)
          : null,
        meal.strIngredient4 !== ""
          ? saveIngredients(meal.strIngredient4, meal.strMeasure4)
          : null,
        meal.strIngredient5 !== ""
          ? saveIngredients(meal.strIngredient5, meal.strMeasure5)
          : null,
        meal.strIngredient6 !== ""
          ? saveIngredients(meal.strIngredient6, meal.strMeasure6)
          : null,
        meal.strIngredient7 !== ""
          ? saveIngredients(meal.strIngredient7, meal.strMeasure7)
          : null,
        meal.strIngredient8 !== ""
          ? saveIngredients(meal.strIngredient8, meal.strMeasure8)
          : null,
        meal.strIngredient9 !== ""
          ? saveIngredients(meal.strIngredient9, meal.strMeasure9)
          : null,
        meal.strIngredient10 !== ""
          ? saveIngredients(meal.strIngredient10, meal.strMeasure10)
          : null,
        meal.strIngredient11 !== ""
          ? saveIngredients(meal.strIngredient11, meal.strMeasure11)
          : null,
        meal.strIngredient12 !== ""
          ? saveIngredients(meal.strIngredient12, meal.strMeasure12)
          : null
      );
    });
  };

  // const IdArray = [];
  // savedRecipes.forEach((meal) => {
  //   IdArray.push(Number(meal.recipe_id));
  // });

  // const IdArray = savedRecipes.map((meal) => {
  //   return Number(meal.recipe_id);
  // });

  // if (recipe.length > 0) {
  //   console.log(
  //     IdArray,
  //     Number(recipe[0].idMeal),
  //     IdArray.includes(Number(recipe[0].idMeal))
  //   );
  // }

  if (buttonCount > 0) {
    return (
      <section>
        <ul className="all-meals">
          {recipe.map((meal) => {
            return (
              <li key={meal.idMeal} className="meal-card">
                <button
                  onClick={() => {
                    console.log(
                      "button click:",
                      meal.strMeal,
                      meal.idMeal,
                      meal.strMealThumb
                    );
                    saveRecipe(meal.idMeal, meal.strMeal, meal.strMealThumb);
                    setButtonCount(buttonCount + 1);
                  }}
                  disabled={true}
                >
                  Save Recipe
                </button>

                <h2>{meal.strMeal}</h2>
                <p>Area: {meal.strArea}</p>
                <p>Category: {meal.strCategory}</p>
                <p>{meal.mealstrCategory}</p>
                <img
                  className="meal-image"
                  alt="no visual for this recipe"
                  src={meal.strMealThumb}
                ></img>
                <p className="meal-instructions">{meal.strInstructions}</p>
                <ul className="ingredients-list">
                  <h3>Ingredients:</h3>
                  {meal.strIngredient1 !== "" ? (
                    <li>
                      {meal.strIngredient1} : {meal.strMeasure1}
                    </li>
                  ) : null}
                  {meal.strIngredient2 !== "" ? (
                    <li>
                      {meal.strIngredient2} : {meal.strMeasure2}
                    </li>
                  ) : null}
                  {meal.strIngredient3 !== "" ? (
                    <li>
                      {meal.strIngredient3} : {meal.strMeasure3}
                    </li>
                  ) : null}
                  {meal.strIngredient4 !== "" ? (
                    <li>
                      {meal.strIngredient4} : {meal.strMeasure4}
                    </li>
                  ) : null}
                  {meal.strIngredient5 !== "" ? (
                    <li>
                      {meal.strIngredient5} : {meal.strMeasure5}
                    </li>
                  ) : null}
                  {meal.strIngredient6 !== "" ? (
                    <li>
                      {meal.strIngredient6} : {meal.strMeasure6}
                    </li>
                  ) : null}
                  {meal.strIngredient7 !== "" ? (
                    <li>
                      {meal.strIngredient7} : {meal.strMeasure7}
                    </li>
                  ) : null}
                  {meal.strIngredient8 !== "" ? (
                    <li>
                      {meal.strIngredient8} : {meal.strMeasure8}
                    </li>
                  ) : null}
                  {meal.strIngredient9 !== "" ? (
                    <li>
                      {meal.strIngredient9} : {meal.strMeasure9}
                    </li>
                  ) : null}
                  {meal.strIngredient10 !== "" ? (
                    <li>
                      {meal.strIngredient10} : {meal.strMeasure10}
                    </li>
                  ) : null}
                  {meal.strIngredient11 !== "" ? (
                    <li>
                      {meal.strIngredient11} : {meal.strMeasure11}
                    </li>
                  ) : null}
                  {meal.strIngredient12 !== "" ? (
                    <li>
                      {meal.strIngredient12} : {meal.strMeasure12}
                    </li>
                  ) : null}
                  {meal.strIngredient13 !== "" ? (
                    <li>
                      {meal.strIngredient13} : {meal.strMeasure13}
                    </li>
                  ) : null}
                  {meal.strIngredient14 !== "" ? (
                    <li>
                      {meal.strIngredient14} : {meal.strMeasure14}
                    </li>
                  ) : null}
                  {meal.strIngredient15 !== "" ? (
                    <li>
                      {meal.strIngredient15} : {meal.strMeasure15}
                    </li>
                  ) : null}
                  {meal.strIngredient16 !== "" ? (
                    <li>
                      {meal.strIngredient16} : {meal.strMeasure16}
                    </li>
                  ) : null}
                  {meal.strIngredient17 !== "" ? (
                    <li>
                      {meal.strIngredient17} : {meal.strMeasure17}
                    </li>
                  ) : null}
                  {meal.strIngredient18 !== "" ? (
                    <li>
                      {meal.strIngredient18} : {meal.strMeasure18}
                    </li>
                  ) : null}
                </ul>
                {/* <button onClick={handleSaveIngredientsClick}>
                  Add Recipe Ingredients to shopping list
                </button> */}
              </li>
            );
          })}
        </ul>
      </section>
    );
  } else
    return (
      <section>
        <ul className="all-meals">
          {recipe.map((meal) => {
            return (
              <li key={meal.idMeal} className="meal-card">
                <button
                  onClick={() => {
                    saveRecipe(meal.idMeal, meal.strMeal, meal.strMealThumb);
                    setButtonCount(buttonCount + 1);
                  }}
                  disabled={savedRecipes
                    .map((meal) => {
                      return Number(meal.recipe_id);
                    })
                    .includes(Number(recipe[0].idMeal))}
                >
                  Save Recipe
                </button>

                <h2>{meal.strMeal}</h2>
                <p>Area: {meal.strArea}</p>
                <p>Category: {meal.strCategory}</p>
                <p>{meal.mealstrCategory}</p>
                <img
                  className="meal-image"
                  alt="no visual for this recipe"
                  src={meal.strMealThumb}
                ></img>
                <p className="meal-instructions">{meal.strInstructions}</p>
                <ul className="ingredients-list">
                  <h3>Ingredients:</h3>
                  {meal.strIngredient1 !== "" ? (
                    <li>
                      {meal.strIngredient1} : {meal.strMeasure1}
                    </li>
                  ) : null}
                  {meal.strIngredient2 !== "" ? (
                    <li>
                      {meal.strIngredient2} : {meal.strMeasure2}
                    </li>
                  ) : null}
                  {meal.strIngredient3 !== "" ? (
                    <li>
                      {meal.strIngredient3} : {meal.strMeasure3}
                    </li>
                  ) : null}
                  {meal.strIngredient4 !== "" ? (
                    <li>
                      {meal.strIngredient4} : {meal.strMeasure4}
                    </li>
                  ) : null}
                  {meal.strIngredient5 !== "" ? (
                    <li>
                      {meal.strIngredient5} : {meal.strMeasure5}
                    </li>
                  ) : null}
                  {meal.strIngredient6 !== "" ? (
                    <li>
                      {meal.strIngredient6} : {meal.strMeasure6}
                    </li>
                  ) : null}
                  {meal.strIngredient7 !== "" ? (
                    <li>
                      {meal.strIngredient7} : {meal.strMeasure7}
                    </li>
                  ) : null}
                  {meal.strIngredient8 !== "" ? (
                    <li>
                      {meal.strIngredient8} : {meal.strMeasure8}
                    </li>
                  ) : null}
                  {meal.strIngredient9 !== "" ? (
                    <li>
                      {meal.strIngredient9} : {meal.strMeasure9}
                    </li>
                  ) : null}
                  {meal.strIngredient10 !== "" ? (
                    <li>
                      {meal.strIngredient10} : {meal.strMeasure10}
                    </li>
                  ) : null}
                  {meal.strIngredient11 !== "" ? (
                    <li>
                      {meal.strIngredient11} : {meal.strMeasure11}
                    </li>
                  ) : null}
                  {meal.strIngredient12 !== "" ? (
                    <li>
                      {meal.strIngredient12} : {meal.strMeasure12}
                    </li>
                  ) : null}
                  {meal.strIngredient13 !== "" ? (
                    <li>
                      {meal.strIngredient13} : {meal.strMeasure13}
                    </li>
                  ) : null}
                  {meal.strIngredient14 !== "" ? (
                    <li>
                      {meal.strIngredient14} : {meal.strMeasure14}
                    </li>
                  ) : null}
                  {meal.strIngredient15 !== "" ? (
                    <li>
                      {meal.strIngredient15} : {meal.strMeasure15}
                    </li>
                  ) : null}
                  {meal.strIngredient16 !== "" ? (
                    <li>
                      {meal.strIngredient16} : {meal.strMeasure16}
                    </li>
                  ) : null}
                  {meal.strIngredient17 !== "" ? (
                    <li>
                      {meal.strIngredient17} : {meal.strMeasure17}
                    </li>
                  ) : null}
                  {meal.strIngredient18 !== "" ? (
                    <li>
                      {meal.strIngredient18} : {meal.strMeasure18}
                    </li>
                  ) : null}
                </ul>
                {/* <button onClick={handleSaveIngredientsClick}>
                Add Recipe Ingredients to shopping list
              </button> */}
              </li>
            );
          })}
        </ul>
      </section>
    );
};

export default SingleRecipe;
