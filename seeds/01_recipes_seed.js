const recipes = [
  {
    recipe_name: "Egg Bake (with Broccoli)",
    description:
      "Transform just a few simple ingredients—including a pile of broccoli—into this protein-packed Egg Bake to share with the kids. It’s an easy breakfast or lunch that stores well and is simple to make ahead.",
    author: "Amy Palanjian",
    cuisine: "American",
    course: "Breakfast",
    servings: 24,
    instructions: JSON.stringify([
      "Preheat the oven to 350 degrees F. Coat an 8×8-inch pan with nonstick cooking spray and line with parchment paper. (The parchment paper makes it easy to slice.)",
      "Mince the broccoli. You can use kitchen scissors to cut off small pieces of florets.",
      "Add the broccoli to a medium bowl with the remaining ingredients. Stir well to make a uniform batter.",
      "Pour into the prepared baking pan and bake for 22-24 minutes, or until the edges are lightly golden brown and the top is firm and set.",
      "Remove from the oven, cool, then remove from the pan to slice into sticks or squares using a serrated knife.",
    ]),
    notes: JSON.stringify([
      "Once cooled, store in an airtight container lined with a paper towel (to absorb excess moisture) in the fridge for up to 5 days. Or freeze in a freezer bag with as much air removed as possible for up to 3 months. Warm in 15-second increments in the microwave.",
      "Use cauliflower instead of broccoli if desired.",
      "Use dairy-free shredded cheese as needed.",
      "Use a cup-for-cup gluten-free flour blend in place of the all-purpose as needed.",
      "Add 1 teaspoon cumin, chili powder, or Italian seasoning for more flavor.",
      "Serve with guacamole, ketchup, sour cream, salsa, or another favorite dip if desired.",
    ]),
    nutrition: JSON.stringify({
      serving_size: "2 sticks",
      calories: 123,
      carbohydrates: "10g",
      protein: "7g",
      fat: "6g",
      saturated_fat: "2g",
      polyunsaturated_fat: "1g",
      monounsaturated_fat: "2g",
      trans_fat: "0.01g",
      cholesterol: "130mg",
      sodium: "295mg",
      potassium: "101mg",
      fiber: "1g",
      sugar: "0.4g",
      vitamin_a: "320IU",
      vitamin_c: "10mg",
      calcium: "105mg",
      iron: "1mg",
    }),

  },
  {
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    description:
      "These apple fritters are the perfect soft-textured fritters for babies. They are naturally sweetened with apples and are made with only five simple ingredients, perfect for a quick morning breakfast or snack!",
    author: "Lily Payen",
    servings: 8,
    instructions: JSON.stringify([
      "Preheat a frying pan over medium heat.",
      "Grate the apple using the largest hole of a grater. You will want to have about 1/2 cup of grated apples.",
      "Add the grated apples to a bowl along with the egg, flour, cinnamon, and baking powder. Mix until combined.",
      "Add 1 tablespoon of butter/oil to the preheated pan. Add one tablespoon of the apple mixture to the pan and press down lightly to form a mini fritter shape.",
      "Cook the fritters for 2-3 minutes per side, or until golden on both sides.",
    ]),
    notes: JSON.stringify([
      "Honeycrisp apples are naturally crisp and sweet and perfect for this recipe. Fuji apples are a close second, but any sweet apple variety will work.",
      "This recipe makes 8-9 mini fritters. Double up the ingredients if you plan to store some for a later time.",
    ]),
    nutrition: JSON.stringify({
      calories: 26.74,
      carbohydrates: "4.7g",
      protein: "0.95g",
      fat: "0.58g",
      saturated_fat: "0.18g",
      polyunsaturated_fat: "0.12g",
      monounsaturated_fat: "0.2g",
      trans_fat: "0.003g",
      cholesterol: "20.46mg",
      sodium: "21.33mg",
      potassium: "34.23mg",
      fiber: "0.63g",
      sugar: "2.39g",
      vitamin_a: "42.17IU",
      vitamin_c: "1.05mg",
      calcium: "12.7mg",
      iron: "0.23mg",
      course: "Breakfast",
    }),
  
  },
];

exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex("recipes")
    .del()
    .then(function () {
      // Inserts seed entries
      return knex("recipes").insert(recipes);
    });
};
