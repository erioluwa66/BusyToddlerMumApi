// recipesController.js

const knex = require("knex")(require("../knexfile"));

const getAllRecipes = async (req, res) => {
  try {
    const recipes = await knex("recipes").select("*");
    res.json(recipes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};




// Controller function to get a single recipe by its ID along with its ingredients
const getRecipeById = async (req, res) => {
  const { id } = req.params;
  try {
    // Query the database for the recipe with the specified ID
    const recipe = await knex("recipes").where({ id }).first();
    if (!recipe) {
      return res.status(404).json({ message: "Recipe not found" });
    }
    // Query the database for ingredients related to the recipe
    const ingredients = await knex("ingredients").where({ recipe_id: id });
    recipe.ingredients = ingredients;
    res.json(recipe);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


// Add other controller functions (e.g., getRecipeById, createRecipe, updateRecipe, deleteRecipe)
module.exports = {
  getAllRecipes,
   getRecipeById
};
