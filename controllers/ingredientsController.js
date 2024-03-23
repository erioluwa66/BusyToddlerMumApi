const knex = require("knex")(require("../knexfile"));

const getIngredientsByRecipeId = async (req, res) => {
  const { recipeId } = req.params;
  try {
    const ingredients = await knex("ingredients")
      .select("ingredients.*")
      .join("recipes", "ingredients.recipe_name", "=", "recipes.recipe_name")
      .where("recipes.id", recipeId);
    res.json(ingredients);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getIngredientsByRecipeId,
};
