exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("ingredients")
    .del()
    .then(function () {
      // Inserts seed entries
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
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient:
              "medium apple (about 1/2 cup grated), Honeycrisp or Fuji varieties",
            quantity: "1",
          },
          {
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient: "egg",
            quantity: "1",
          },
          {
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient: "all purpose flour",
            quantity: "2 tbsp",
          },
          {
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient: "baking powder",
            quantity: "1/4 tsp",
          },
          {
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient: "ground cinnamon",
            quantity: "1/4 tsp",
          },
          {
            recipe_name:
              "Cinnamon Apple Fritters served with Strawberries and Yogurt",
            ingredient: "oil/butter, to grease pan",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "large overripe banana",
            quantity: "1",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "old fashioned rolled oats",
            quantity: "1 cup",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "ground cinnamon",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "baking powder",
            quantity: "1 tsp",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "eggs",
            quantity: "2",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "spinach",
            quantity: "1 cup",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "oil, mild tasting",
            quantity: "2 tbsp",
          },
          {
            recipe_name: "Spinach Banana Pancakes",
            ingredient: "vanilla extract",
            quantity: "¼ tsp",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "plain whole-milk ricotta cheese",
            quantity: "½ cup",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "milk",
            quantity: "½ cup",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "eggs",
            quantity: "2",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient:
              "unsalted butter (melted and cooled; plus more for cooking)",
            quantity: "2 tablespoons",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "vanilla",
            quantity: "1 teaspoon",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "lemon zest",
            quantity: "Zest from 1 lemon",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient:
              "all-purpose flour (or whole-wheat flour; if using whole-wheat, add 2 tbsp more milk)",
            quantity: "1 cup",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "sugar",
            quantity: "1 tablespoon",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "baking powder",
            quantity: "2 teaspoons",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient: "salt",
            quantity: "¼ teaspoon",
          },
          {
            recipe_name: "Fluffy Ricotta Pancakes",
            ingredient:
              "add-ins such as blueberries, diced strawberries, diced peaches (optional)",
            quantity: "1 cup",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "cooked breakfast sausage (diced)",
            quantity: "8 ounces",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "eggs (lightly beaten)",
            quantity: "8",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "shredded cheddar cheese",
            quantity: "¾ cup",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "diced bell pepper (or minced broccoli)",
            quantity: "½ cup",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "all-purpose flour",
            quantity: "¼ cup",
          },
          {
            recipe_name: "Easy Sausage Egg Muffins",
            ingredient: "salt",
            quantity: "¼ teaspoon",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "milk",
            quantity: "½ cup",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "maple syrup",
            quantity: "3 tbsp",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "egg",
            quantity: "1",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "natural peanut butter",
            quantity: "2 tbsp",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "vanilla extract",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "finely grated zucchini, do not squeeze out liquid",
            quantity: "⅓ cup",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "old fashioned rolled oats",
            quantity: "1 cup",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "unsweetened cocoa powder",
            quantity: "3 tbsp",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "baking powder",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
            ingredient: "chocolate chips, plus more for sprinkling on top",
            quantity: "⅓ cup",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "all-purpose flour",
            quantity: "1 cup",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "sugar",
            quantity: "⅓ cup",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "baking powder",
            quantity: "1 teaspoon",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "salt",
            quantity: "¼ teaspoon",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "milk (or plain whole milk yogurt)",
            quantity: "⅓ cup",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "melted butter",
            quantity: "2 tablespoons",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "egg, lightly beaten",
            quantity: "1",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "pure vanilla extract",
            quantity: "1 teaspoon",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "chopped raspberries",
            quantity: "½ cup",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "freshly grated lemon peel",
            quantity: "1 tablespoon",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient:
              "Optional Yogurt Frosting: plain whole milk yogurt and powdered sugar",
            quantity: "¼ cup yogurt and 2 tablespoons powdered sugar",
          },
          {
            recipe_name: "Baked Raspberry Donuts",
            ingredient: "Sprinkles",
            quantity: "optional",
          },
    
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "packed finely grated carrots",
            quantity: "1 cup",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "shredded cheese",
            quantity: "½ cup",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "egg",
            quantity: "1",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "flour",
            quantity: "2 tbsp",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "onion powder",
            quantity: "¼ tsp",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "garlic powder",
            quantity: "¼ tsp",
          },
          {
            recipe_name: "Cheesy Carrot Fritters",
            ingredient: "salt",
            quantity: "¼ tsp (optional)",
          },
      
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "whole wheat tortilla (or flatbread)",
            quantity: "1",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "deli turkey",
            quantity: "1 ounce",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "sliced cheese",
            quantity: "1 ounce",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "shredded lettuce",
            quantity: "¼ cup",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "mayo (or mustard)",
            quantity: "2 tablespoons",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient:
              "Nutella (or sunflower seed butter if needed to be nut-free)",
            quantity: "2 tablespoons",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "thinly sliced strawberries",
            quantity: "1/2 cup",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient: "hummus",
            quantity: "1/4 cup",
          },
          {
            recipe_name: "Easy Pinwheel Sandwiches",
            ingredient:
              "matchstick slices of cucumber (or shredded lettuce or thinly sliced bell pepper)",
            quantity: "1/4 cup",
          },
      
          {
            recipe_name: "Broccoli Tots",
            ingredient: "broccoli florets",
            quantity: "12 oz",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "shredded cheese",
            quantity: "1 cup",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "egg",
            quantity: "1",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "panko breadcrumbs",
            quantity: "⅔ cup",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "garlic powder",
            quantity: "¼ tsp",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "onion powder",
            quantity: "¼ tsp",
          },
          {
            recipe_name: "Broccoli Tots",
            ingredient: "salt",
            quantity: "½ tsp",
          },
    
          {
            recipe_name: "Air Fryer Green Beans",
            ingredient: "fresh green beans",
            quantity: "1 lb",
          },
          {
            recipe_name: "Air Fryer Green Beans",
            ingredient: "olive oil",
            quantity: "1 tbsp",
          },
          {
            recipe_name: "Air Fryer Green Beans",
            ingredient: "garlic powder",
            quantity: "1 tsp",
          },
          {
            recipe_name: "Air Fryer Green Beans",
            ingredient: "black pepper",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Air Fryer Green Beans",
            ingredient: "salt",
            quantity: "to taste",
          },
    
          {
            recipe_name: "Air Fryer Naan Pizza",
            ingredient: "naan dippers, or any type of naan",
            quantity: "8",
          },
          {
            recipe_name: "Air Fryer Naan Pizza",
            ingredient: "pizza sauce",
            quantity: "½ cup",
          },
          {
            recipe_name: "Air Fryer Naan Pizza",
            ingredient: "mozzarella cheese",
            quantity: "¾ cup",
          },
          {
            recipe_name: "Air Fryer Naan Pizza",
            ingredient: "riced broccoli, or toppings of choice",
            quantity: "2 tbsp",
          },
      
          {
            recipe_name: "Air Fryer Sweet Potatoes",
            ingredient: "sweet potatoes",
            quantity: "1 lb",
          },
          {
            recipe_name: "Air Fryer Sweet Potatoes",
            ingredient: "olive oil",
            quantity: "2 tbsp",
          },
          {
            recipe_name: "Air Fryer Sweet Potatoes",
            ingredient: "garlic powder",
            quantity: "1 tsp",
          },
          {
            recipe_name: "Air Fryer Sweet Potatoes",
            ingredient: "black pepper",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Air Fryer Sweet Potatoes",
            ingredient: "ground cinnamon",
            quantity: "½ tsp",
          },
       
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "chicken wings",
            quantity: "16-20",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "seasoning blend",
            quantity: "2 tsp",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "oil",
            quantity: "1-2 tbsp",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "paprika",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "garlic powder",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "onion powder",
            quantity: "½ tsp",
          },
          {
            recipe_name: "Air Fryer Chicken Wings",
            ingredient: "black pepper",
            quantity: "¼ tsp",
          },
        ]
     
           return knex("ingredients").insert(ingredients);
    });
};