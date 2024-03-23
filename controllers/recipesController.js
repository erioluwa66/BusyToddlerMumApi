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

// Add other controller functions (e.g., getRecipeById, createRecipe, updateRecipe, deleteRecipe)
module.exports = {
  getAllRecipes,
};
