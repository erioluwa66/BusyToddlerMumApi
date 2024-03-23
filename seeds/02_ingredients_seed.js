const ingredients = [
  {
    recipe_id: 1,
    ingredient: "minced broccoli",
    quantity: "3 cups",
  },
  {
    recipe_id: 1,
    ingredient: "eggs (large)",
    quantity: "18",
  },
  {
    recipe_id: 1,
    ingredient: "all purpose flour",
    quantity: "1.5 cups",
  },
  {
    recipe_id: 1,
    ingredient: "shredded cheddar cheese (or Parmesan)",
    quantity: "1.5 cups",
  },
  {
    recipe_id: 1,
    ingredient: "baking powder",
    quantity: "3 teaspoons",
  },
  {
    recipe_id: 1,
    ingredient: "salt",
    quantity: "1.5 teaspoons",
  },
  {
    recipe_id: 1,
    ingredient: "onion powder",
    quantity: "1.5 teaspoons",
  },
  // Add more ingredients here for other recipes
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
