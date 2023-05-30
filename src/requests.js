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
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/recipes`)
    .then((recipes) => {
      console.log("get recipes:", recipes);
      return recipes;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveRecipe = (recipeId, recipe, recipePic) => {
  console.log("axios request:", recipeId, recipe, recipePic);
  return axios
    .post(`https://calm-gold-angelfish-wig.cyclic.app/api/recipes`, {
      id: parseInt(recipeId),
      body: recipe,
      pic: recipePic,
    })
    .catch((err) => {
      console.log(err);
    });
};

export const getShoppingList = () => {
  return axios
    .get(`https://calm-gold-angelfish-wig.cyclic.app/api/shopping_list`)
    .then((ingredients) => {
      return ingredients;
    })
    .catch((err) => {
      console.log(err);
    });
};

export const saveIngredients = (ingredients, measure) => {
  return axios
    .post(`https://calm-gold-angelfish-wig.cyclic.app/api/shopping_list`, {
      body: ingredients,
      measure_body: measure,
    })
    .catch((err) => {
      console.log(err);
    });
};

//`//192.168.1.25:9090/api/shopping_list`
