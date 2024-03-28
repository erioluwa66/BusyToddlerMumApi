const router = require("express").Router();
const ingredientsController = require("../controllers/ingredientsController");
const recipesController = require("../controllers/recipesController");


router
    .route("/recipes").
    get(recipesController.getAllRecipes);

router
  .route("/ingredients/:recipeId")
  .get(ingredientsController.getIngredientsByRecipeId);

router
  .route("/recipes/:id")
  .get(recipesController.getRecipeById);




module.exports = router;
