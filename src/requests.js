import axios from "axios";
export const getRandomRecipe = () => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/random.php`)
    .then((recipe) => {
      return recipe.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getRecipeByName = (mealName) => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    .then((recipe) => {
      return recipe.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const getRecipeById = (mealId) => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`)
    .then((recipe) => {
      return recipe.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
export const listAllCategories = () => {
  return axios
    .get(`https://www.themealdb.com/api/json/v1/1/categories.php`)
    .then((categories) => {
      return categories.data;
    })
    .catch((err) => {
      console.log(err);
    });
};
