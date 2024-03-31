exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
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
        {
          recipe_id: 2,
          ingredient:
            "medium apple (about 1/2 cup grated), Honeycrisp or Fuji varieties",
          quantity: "1",
        },
        {
          recipe_id: 2,
          ingredient: "egg",
          quantity: "1",
        },
        {
          recipe_id: 2,
          ingredient: "all purpose flour",
          quantity: "2 tbsp",
        },
        {
          recipe_id: 2,
          ingredient: "baking powder",
          quantity: "1/4 tsp",
        },
        {
          recipe_id: 2,
          ingredient: "ground cinnamon",
          quantity: "1/4 tsp",
        },
        {
          recipe_id: 2,
          ingredient: "oil/butter, to grease pan",
        },
        {
          recipe_id: 3,
          ingredient: "large overripe banana",
          quantity: "1",
        },
        {
          recipe_id: 3,
          ingredient: "old fashioned rolled oats",
          quantity: "1 cup",
        },
        {
          recipe_id: 3,
          ingredient: "ground cinnamon",
          quantity: "½ tsp",
        },
        {
          recipe_id: 3,
          ingredient: "baking powder",
          quantity: "1 tsp",
        },
        {
          recipe_id: 3,
          ingredient: "eggs",
          quantity: "2",
        },
        {
          recipe_id: 3,
          ingredient: "spinach",
          quantity: "1 cup",
        },
        {
          recipe_id: 3,
          ingredient: "oil, mild tasting",
          quantity: "2 tbsp",
        },
        {
          recipe_id: 3,
          ingredient: "vanilla extract",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 4,
          ingredient: "plain whole-milk ricotta cheese",
          quantity: "½ cup",
        },
        {
          recipe_id: 4,
          ingredient: "milk",
          quantity: "½ cup",
        },
        {
          recipe_id: 4,
          ingredient: "eggs",
          quantity: "2",
        },
        {
          recipe_id: 4,
          ingredient:
            "unsalted butter (melted and cooled; plus more for cooking)",
          quantity: "2 tablespoons",
        },
        {
          recipe_id: 4,
          ingredient: "vanilla",
          quantity: "1 teaspoon",
        },
        {
          recipe_id: 4,
          ingredient: "lemon zest",
          quantity: "Zest from 1 lemon",
        },
        {
          recipe_id: 4,
          ingredient:
            "all-purpose flour (or whole-wheat flour; if using whole-wheat, add 2 tbsp more milk)",
          quantity: "1 cup",
        },
        {
          recipe_id: 4,
          ingredient: "sugar",
          quantity: "1 tablespoon",
        },
        {
          recipe_id: 4,
          ingredient: "baking powder",
          quantity: "2 teaspoons",
        },
        {
          recipe_id: 4,
          ingredient: "salt",
          quantity: "¼ teaspoon",
        },
        {
          recipe_id: 4,
          ingredient:
            "add-ins such as blueberries, diced strawberries, diced peaches (optional)",
          quantity: "1 cup",
        },
        {
          recipe_id: 5,
          ingredient: "cooked breakfast sausage (diced)",
          quantity: "8 ounces",
        },
        {
          recipe_id: 5,
          ingredient: "eggs (lightly beaten)",
          quantity: "8",
        },
        {
          recipe_id: 5,
          ingredient: "shredded cheddar cheese",
          quantity: "¾ cup",
        },
        {
          recipe_id: 5,
          ingredient: "diced bell pepper (or minced broccoli)",
          quantity: "½ cup",
        },
        {
          recipe_id: 5,
          ingredient: "all-purpose flour",
          quantity: "¼ cup",
        },
        {
          recipe_id: 5,
          ingredient: "salt",
          quantity: "¼ teaspoon",
        },
        {
          recipe_id: 6,
          ingredient: "milk",
          quantity: "½ cup",
        },
        {
          recipe_id: 6,
          ingredient: "maple syrup",
          quantity: "3 tbsp",
        },
        {
          recipe_id: 6,
          ingredient: "egg",
          quantity: "1",
        },
        {
          recipe_id: 6,
          ingredient: "natural peanut butter",
          quantity: "2 tbsp",
        },
        {
          recipe_id: 6,
          ingredient: "vanilla extract",
          quantity: "½ tsp",
        },
        {
          recipe_id: 6,
          ingredient:
            "finely grated zucchini, do not squeeze out liqurecipe_id",
          quantity: "⅓ cup",
        },
        {
          recipe_id: 6,
          ingredient: "old fashioned rolled oats",
          quantity: "1 cup",
        },
        {
          recipe_id: 6,
          ingredient: "unsweetened cocoa powder",
          quantity: "3 tbsp",
        },
        {
          recipe_id: 6,
          ingredient: "baking powder",
          quantity: "½ tsp",
        },
        {
          recipe_id: 6,
          ingredient: "chocolate chips, plus more for sprinkling on top",
          quantity: "⅓ cup",
        },
        {
          recipe_id: 7,
          ingredient: "all-purpose flour",
          quantity: "1 cup",
        },
        {
          recipe_id: 7,
          ingredient: "sugar",
          quantity: "⅓ cup",
        },
        {
          recipe_id: 7,
          ingredient: "baking powder",
          quantity: "1 teaspoon",
        },
        {
          recipe_id: 7,
          ingredient: "salt",
          quantity: "¼ teaspoon",
        },
        {
          recipe_id: 7,
          ingredient: "milk (or plain whole milk yogurt)",
          quantity: "⅓ cup",
        },
        {
          recipe_id: 7,
          ingredient: "melted butter",
          quantity: "2 tablespoons",
        },
        {
          recipe_id: 7,
          ingredient: "egg, lightly beaten",
          quantity: "1",
        },
        {
          recipe_id: 7,
          ingredient: "pure vanilla extract",
          quantity: "1 teaspoon",
        },
        {
          recipe_id: 7,
          ingredient: "chopped raspberries",
          quantity: "½ cup",
        },
        {
          recipe_id: 7,
          ingredient: "freshly grated lemon peel",
          quantity: "1 tablespoon",
        },
        {
          recipe_id: 7,
          ingredient:
            "Optional Yogurt Frosting: plain whole milk yogurt and powdered sugar",
          quantity: "¼ cup yogurt and 2 tablespoons powdered sugar",
        },
        {
          recipe_id: 7,
          ingredient: "Sprinkles",
          quantity: "optional",
        },

        {
          recipe_id: 8,
          ingredient: "packed finely grated carrots",
          quantity: "1 cup",
        },
        {
          recipe_id: 8,
          ingredient: "shredded cheese",
          quantity: "½ cup",
        },
        {
          recipe_id: 8,
          ingredient: "egg",
          quantity: "1",
        },
        {
          recipe_id: 8,
          ingredient: "flour",
          quantity: "2 tbsp",
        },
        {
          recipe_id: 8,
          ingredient: "onion powder",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 8,
          ingredient: "garlic powder",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 8,
          ingredient: "salt",
          quantity: "¼ tsp (optional)",
        },

        {
          recipe_id: 9,
          ingredient: "whole wheat tortilla (or flatbread)",
          quantity: "1",
        },
        {
          recipe_id: 9,
          ingredient: "deli turkey",
          quantity: "1 ounce",
        },
        {
          recipe_id: 9,
          ingredient: "sliced cheese",
          quantity: "1 ounce",
        },
        {
          recipe_id: 9,
          ingredient: "shredded lettuce",
          quantity: "¼ cup",
        },
        {
          recipe_id: 9,
          ingredient: "mayo (or mustard)",
          quantity: "2 tablespoons",
        },
        {
          recipe_id: 9,
          ingredient:
            "Nutella (or sunflower seed butter if needed to be nut-free)",
          quantity: "2 tablespoons",
        },
        {
          recipe_id: 9,
          ingredient: "thinly sliced strawberries",
          quantity: "1/2 cup",
        },
        {
          recipe_id: 9,
          ingredient: "hummus",
          quantity: "1/4 cup",
        },
        {
          recipe_id: 9,
          ingredient:
            "matchstick slices of cucumber (or shredded lettuce or thinly sliced bell pepper)",
          quantity: "1/4 cup",
        },

        {
          recipe_id: 10,
          ingredient: "broccoli florets",
          quantity: "12 oz",
        },
        {
          recipe_id: 10,
          ingredient: "shredded cheese",
          quantity: "1 cup",
        },
        {
          recipe_id: 10,
          ingredient: "egg",
          quantity: "1",
        },
        {
          recipe_id: 10,
          ingredient: "panko breadcrumbs",
          quantity: "⅔ cup",
        },
        {
          recipe_id: 10,
          ingredient: "garlic powder",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 10,
          ingredient: "onion powder",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 10,
          ingredient: "salt",
          quantity: "½ tsp",
        },

        {
          recipe_id: 11,
          ingredient: "fresh green beans",
          quantity: "1 lb",
        },
        {
          recipe_id: 11,
          ingredient: "olive oil",
          quantity: "1 tbsp",
        },
        {
          recipe_id: 11,
          ingredient: "garlic powder",
          quantity: "1 tsp",
        },
        {
          recipe_id: 11,
          ingredient: "black pepper",
          quantity: "½ tsp",
        },
        {
          recipe_id: 11,
          ingredient: "salt",
          quantity: "to taste",
        },

        {
          recipe_id: 12,
          ingredient: "naan dippers, or any type of naan",
          quantity: "8",
        },
        {
          recipe_id: 12,
          ingredient: "pizza sauce",
          quantity: "½ cup",
        },
        {
          recipe_id: 12,
          ingredient: "mozzarella cheese",
          quantity: "¾ cup",
        },
        {
          recipe_id: 12,
          ingredient: "riced broccoli, or toppings of choice",
          quantity: "2 tbsp",
        },

        {
          recipe_id: 13,
          ingredient: "sweet potatoes",
          quantity: "1 lb",
        },
        {
          recipe_id: 13,
          ingredient: "olive oil",
          quantity: "2 tbsp",
        },
        {
          recipe_id: 13,
          ingredient: "garlic powder",
          quantity: "1 tsp",
        },
        {
          recipe_id: 13,
          ingredient: "black pepper",
          quantity: "½ tsp",
        },
        {
          recipe_id: 13,
          ingredient: "ground cinnamon",
          quantity: "½ tsp",
        },

        {
          recipe_id: 14,
          ingredient: "salmon filets",
          quantity: "3",
        },
        {
          recipe_id: 14,
          ingredient: "olive oil",
          quantity: "1 tbsp",
        },
        {
          recipe_id: 14,
          ingredient: "ground paprika",
          quantity: "1½ tsp",
        },
        {
          recipe_id: 14,
          ingredient: "garlic powder",
          quantity: "1 tsp",
        },
        {
          recipe_id: 14,
          ingredient: "onion powder",
          quantity: "½ tsp",
        },
        {
          recipe_id: 14,
          ingredient: "black pepper",
          quantity: "½ tsp",
        },
        {
          recipe_id: 14,
          ingredient: "salt",
          quantity: "1 tsp",
        },

        {
          recipe_id: 15,
          ingredient: "chicken wings",
          quantity: "16-20",
        },
        {
          recipe_id: 15,
          ingredient: "seasoning blend",
          quantity: "2 tsp",
        },
        {
          recipe_id: 15,
          ingredient: "oil",
          quantity: "1-2 tbsp",
        },
        {
          recipe_id: 15,
          ingredient: "paprika",
          quantity: "½ tsp",
        },
        {
          recipe_id: 15,
          ingredient: "garlic powder",
          quantity: "½ tsp",
        },
        {
          recipe_id: 15,
          ingredient: "onion powder",
          quantity: "½ tsp",
        },
        {
          recipe_id: 15,
          ingredient: "black pepper",
          quantity: "¼ tsp",
        },
        {
          recipe_id: 16, // Assuming this is the ID for the new recipe
          ingredient: "grated carrots",
          quantity: "⅓ cup",
        },
        {
          recipe_id: 16,
          ingredient: "finely chopped broccoli floret heads",
          quantity: "¼ cup",
        },
        {
          recipe_id: 16,
          ingredient: "corn kernels",
          quantity: "¼ cup",
        },
        {
          recipe_id: 16,
          ingredient: "egg",
          quantity: "1",
        },
        {
          recipe_id: 16,
          ingredient: "milk",
          quantity: "½ cup",
        },
        {
          recipe_id: 16,
          ingredient: "mild tasting oil/melted butter",
          quantity: "¼ cup",
        },
        {
          recipe_id: 16,
          ingredient: "shredded cheddar cheese",
          quantity: "½ cup",
        },
        {
          recipe_id: 16,
          ingredient: "all purpose flour",
          quantity: "1 cup",
        },
        {
          recipe_id: 16,
          ingredient: "baking powder",
          quantity: "2 tsp",
        },
        {
          recipe_id: 16,
          ingredient: "salt",
          quantity: "½ tsp",
        },
        {
          recipe_id: 16,
          ingredient: "black pepper",
          quantity: "⅛ tsp",
        },
      ];

      return knex("ingredients").insert(ingredients);
    });
};
