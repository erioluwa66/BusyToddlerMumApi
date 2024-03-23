const ingredients = [
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "minced broccoli",
    quantity: "3 cups",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "eggs (large)",
    quantity: "18",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "all purpose flour",
    quantity: "1.5 cups",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "shredded cheddar cheese (or Parmesan)",
    quantity: "1.5 cups",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "baking powder",
    quantity: "3 teaspoons",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "salt",
    quantity: "1.5 teaspoons",
  },
  {
    recipe_name: "Egg Bake (with Broccoli)",
    ingredient: "onion powder",
    quantity: "1.5 teaspoons",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient:
      "medium apple (about 1/2 cup grated), Honeycrisp or Fuji varieties",
    quantity: "1",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient: "egg",
    quantity: "1",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient: "all purpose flour",
    quantity: "2 tbsp",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient: "baking powder",
    quantity: "1/4 tsp",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient: "ground cinnamon",
    quantity: "1/4 tsp",
  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    ingredient: "oil/butter, to grease pan",
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("ingredients").insert(ingredients);
    });
};
