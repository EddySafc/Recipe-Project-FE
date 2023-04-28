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

export const getSavedRecipes = () => {
  return axios
    .get(`//192.168.1.25:9090/api/recipes`)
    .then((recipes) => {
      return recipes;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveRecipe = (recipe, recipeId, recipePic) => {
  console.log(recipe, recipeId, recipePic);
  return axios
    .post(`//192.168.1.25:9090/api/recipes`, {
      body: recipe,
      recipe_id: recipeId,
      recipe_pic: recipePic,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShoppingList = () => {
  return axios
    .get(`//192.168.1.25:9090/api/shopping_list`)
    .then((ingredients) => {
      return ingredients;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveIngredients = (ingredients, measure) => {
  return axios
    .post(`//192.168.1.25:9090/api/shopping_list`, {
      body: ingredients,
      measure_body: measure,
    })
    .catch((err) => {
      console.log(err);
    });
};
