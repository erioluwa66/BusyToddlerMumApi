const recipes = [
  {
    id: 1,
    recipe_name: "Egg Bake (with Broccoli)",
    description:
      "Transform just a few simple ingredients—including a pile of broccoli—into this protein-packed Egg Bake to share with the kids. It’s an easy breakfast or lunch that stores well and is simple to make ahead.",
    author: "Amy Palanjian",
    cuisine: "American",
    course: "Breakfast",
    servings: 24,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2022/11/egg-bake-on-blue-plate.jpg",
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
    id: 2,
    recipe_name: "Cinnamon Apple Fritters served with Strawberries and Yogurt",
    description:
      "These apple fritters are the perfect soft-textured fritters for babies. They are naturally sweetened with apples and are made with only five simple ingredients, perfect for a quick morning breakfast or snack!",
    author: "Lily Payen",
    servings: 8,
    cuisine: "American",
    course: "Breakfast",
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2023/05/Fritters-for-babies.jpg",
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
    }),
  },
  {
    id: 3,
    recipe_name: "Spinach Banana Pancakes",
    description:
      "These spinach banana pancakes are perfect for baby-led weaning! The bright green color makes them a fun treat your little ones are sure to love!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Breakfast",
    servings: 12,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2021/10/IMG_5725-1.jpg",
    instructions: JSON.stringify([
      "Preheat a frying pan on low heat and add in a little butter/oil.",
      "Blend all of the ingredients together until smooth.",
      "Spoon out tablespoon amounts of batter and form small circles on a greased pan to cook.",
      "Once bubbles begin to form, flip over the pancakes and cook for a couple of minutes on the other side.",
    ]),
    notes: JSON.stringify([
      "Low heat is very important in this recipe! These pancakes can burn easily if the heat is too high, so make sure to cook on low heat but make sure that your pan is preheated before adding the batter. If your pancakes are browning too quickly and aren’t cooked through in the middle, this is a sign that your heat is too high.",
      "I love using this nutribullet blender to blend the ingredients into a smooth batter!",
      "Use a very light layer of oil when greasing the pan, wiping away any excess. This helps the pancakes to get that smooth, brown color.",
      "If you want your pancakes to have a brighter green color, add in a few more leaves of spinach.",
    ]),
    nutrition: JSON.stringify({
      calories: 67.98,
      carbohydrates: "7.47g",
      protein: "2.01g",
      fat: "3.52g",
      saturated_fat: "0.49g",
      polyunsaturated_fat: "0.96g",
      monounsaturated_fat: "1.88g",
      trans_fat: "0.01g",
      cholesterol: "27.28mg",
      sodium: "48.26mg",
      potassium: "89.63mg",
      fiber: "1.08g",
      sugar: "1.5g",
      vitamin_a: "281.52IU",
      vitamin_c: "1.69mg",
      calcium: "31.09mg",
      iron: "0.56mg",
    }),
  },
  {
    id: 4,
    recipe_name: "Fluffy Ricotta Pancakes",
    description:
      "With the most delicious fresh lemon flavor and a distinctly fluffy texture, these Ricotta Pancakes are a perfect family breakfast to share—on a holiday or any day.",
    author: "Amy Palanjian",
    cuisine: "American",
    course: "Breakfast",
    servings: 4,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2023/02/Ricotta-Pancakes-8-horiz.jpg",
    instructions: JSON.stringify([
      "Add the ricotta, milk, eggs, butter, and vanilla to a medium bowl. Whisk to combine into a smooth mixture.",
      "Add the flour, sugar, baking powder, and salt. Add the lemon zest. Whisk gently to combine.",
      "Add desired add-ins if using. (You can add 1 cup to the whole batch, or use a few pieces of any of them as you make each pancake. Just add the fruit or chocolate chips to the top of the batter after you add it to the pan in Step 5.)",
      "Heat a large nonstick skillet over medium heat. Melt a little butter and swirl to coat the pan.",
      "Spoon out about ¼ cup batter per pancake for regular-size pancakes or 2 tablespoons batter for mini pancakes. Cook for 3-4 minutes, or until you see bubbles start to form on the surface and the edges are set.",
      "Flip over with a spatula and cook for an additional 3 minutes. Serve or place into a 200-degree-F oven on a baking sheet while you finish making the rest of the batch. Add a little more butter as needed to keep the pancakes from sticking.",
      "Serve warm with maple syrup and additional fruit as desired.",
    ]),
    notes: JSON.stringify([
      "Store for 3-5 days in the fridge in an airtight container. Warm for 15-30 seconds on a heat-safe plate in the microwave. Or freeze between layers of parchment paper (or in a single layer) in a freezer bag.",
      "If using whole wheat flour, you may need 1-2 additional tablespoons milk since it absorbs liquids more readily.",
      "Gluten-free: Use a 1:1 style of gluten-free flour.",
      "Dairy-free: Use nondairy Greek-style yogurt and nondairy milk.",
      "Look for ricotta cheese near the sour cream in your supermarket. Full-fat or whole milk ricotta cheese is best here.",
    ]),
    nutrition: JSON.stringify({
      calories: 297,
      carbohydrates: "30g",
      protein: "12g",
      fat: "15g",
      saturated_fat: "8g",
      polyunsaturated_fat: "1g",
      monounsaturated_fat: "4g",
      trans_fat: "0.2g",
      cholesterol: "122mg",
      sodium: "435mg",
      potassium: "137mg",
      fiber: "1g",
      sugar: "4g",
      vitamin_a: "524IU",
      calcium: "251mg",
      iron: "2mg",
    }),
  },
  {
    id: 5,
    recipe_name: "Easy Sausage Egg Muffins",
    description:
      "Whether as a make-ahead breakfast option or a holiday breakfast or brunch to feed a crowd, these Sausage Egg Muffins are such an easy—and yummy—option.",
    author: "Amy Palanjian",
    cuisine: "Mexican",
    course: "Breakfast",
    servings: 12,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2023/10/Sausage-Egg-Muffins-9-horiz.jpg",
    instructions: JSON.stringify([
      "Preheat the oven to 375 degrees F and grease a standard muffin tin very well with nonstick spray.",
      "Add all of the ingredients to a medium bowl and stir well to combine.",
      "Divide among the prepared mini muffin tin, using about ¼ cup batter in each cup.",
      "Bake for 14-16 minutes or until the edges are golden brown and the tops are firm.",
      "Place the muffin tin on a wire rack and let muffins cool in the tin for 5-10 minutes. As they cool, they will start to pull away from the sides of the pan slightly. Use a paring knife around the edges to gently loosen and remove the muffins from the pan.",
      "Serve warm.",
    ]),
    notes: JSON.stringify([
      "Store in an airtight container for up to 5 days. Warm for 15 seconds in the microwave if desired.",
      "Be sure to grease your muffin tin really well to avoid sticking.",
      "To use frozen spinach, let it thaw and squeeze out any moisture. Use ¼ cup and break it up.",
      "Gluten-free: Use the cornmeal or a cup for cup gluten-free flour.",
      "Dairy-free: Omit the cheese. You could add another cup of spinach or another veggie like corn or cooked roasted butternut squash.",
      "You can omit the added salt if desired.",
      "Run a paring knife around the edges of the muffins to help loosen if needed.",
      "Cut into smaller pieces for older babies or one year olds as needed.",
    ]),
    nutrition: JSON.stringify({
      calories: 98,
      carbohydrates: "6g",
      protein: "6g",
      fat: "6g",
      saturated_fat: "3g",
      polyunsaturated_fat: "1g",
      monounsaturated_fat: "2g",
      trans_fat: "1g",
      cholesterol: "92mg",
      sodium: "181mg",
      potassium: "106mg",
      fiber: "1g",
      sugar: "1g",
      vitamin_a: "709IU",
      vitamin_c: "2mg",
      calcium: "88mg",
      iron: "1mg",
    }),
  },
  {
    id: 6,
    recipe_name: "Chocolate Baked Oatmeal (With Zucchini)",
    description:
      "This chocolate baked oatmeal is the perfect sweet treat. Made with rolled oats, cocoa powder, and sweetened with maple syrup, it has the perfect gooey texture and is rich chocolate flavor, perfect for any time of day!",
    author: "Lily Payen",
    cuisine: "Unknown",
    course: "Unknown",
    servings: 8,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2024/02/Chocolate-baked-oatmeal.jpg",
    instructions: JSON.stringify([
      "Preheat the oven to 350 degrees F (180 degrees C).",
      "To a bowl, add in the milk, egg, peanut butter, maple syrup, and vanilla and whisk until well combined.",
      "To the same bowl, add in the oats, cocoa powder, and baking powder and mix until combined. If some of the cocoa powder is settling to the top, continue mixing until it is well incorporated.",
      "Add in the finely grated zucchini (no need to squeeze out the moisture!) and chocolate chips and mix until it is combined.",
      "Pour this mixture into a 9-inch by 5-inch parchment paper-lined loaf pan. Use a spoon or spatula to mixture the oats evenly into the pan so that no oats are settling to the top. The mixture will seem very liquidy but will firm up during the baking process. Sprinkle extra chocolate chips on top.",
      "Bake for 30 minutes, or until the edges are golden brown and the top begins to form a brownie-like crust. Allow it to cool completely before slicing and serving.",
    ]),
    notes: JSON.stringify([
      "I like to use the smallest hole of a box grater to grate the zucchini. This ensures that it mixes seamlessly into the mixture and that there are no large chunks of zucchini in the oatmeal bake.",
      "I used a 9 by 5 loaf pan for this recipe. Feel free to double the ingredients to make enough to fill a brownie pan! Line the pan with parchment paper to make the baked oats easier to remove and serve, or grease the pan well with cooking spray or butter.",
      "Add in extra add-ins for more texture and taste! Crushed nuts are a great mix-in option for added texture!",
    ]),
    nutrition: JSON.stringify({
      calories: 143,
      carbohydrates: "20g",
      protein: "4g",
      fat: "6g",
      saturated_fat: "2g",
      polyunsaturated_fat: "1g",
      monounsaturated_fat: "2g",
      trans_fat: "0.003g",
      cholesterol: "22mg",
      sodium: "43mg",
      potassium: "170mg",
      fiber: "2g",
      sugar: "10g",
      vitamin_a: "65IU",
      vitamin_c: "1mg",
      calcium: "61mg",
      iron: "1mg",
    }),
  },
  {
    id: 7,
    recipe_name: "Baked Raspberry Donuts",
    description:
      "These bright and fresh baked donuts have the texture of a cake donut, but with a zing of fresh fruit.",
    author: "Amy Palanjian",
    cuisine: "American",
    course: "Breakfast",
    servings: 6,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2016/02/raspberry-donut-on-white-plate-with-berries.jpg",
    instructions: JSON.stringify([
      "Preheat the oven to 350 degrees F and coat a donut pan with nonstick spray.",
      "Add the flour, sugar, baking powder, and salt to a medium bowl and stir to combine.",
      "Add the yogurt, butter, egg, and vanilla extract. Stir gently. Fold in the raspberries and lemon peel and stir gently to just combine. (This batter is thick and it may look too thick, but keep gently stirring to bring it together.",
      "Portion out into the donut pan, dividing the batter among each of the 6 rounds and spreading so the batter is somewhat evenly distributed.",
      "Bake for 14-16 minutes or until a cake tester inserted into the center comes out cleanly.",
      "Remove from the oven and let cool in the pan for 2 minutes. Run a paring knife around the edges of each doughnut and carefully flip onto a wire rack to cool fully.",
      "Optional frosting: Stir together the yogurt and powdered sugar in a bowl. Spoon into a zip-top plastic bag. Seal and cut off one of the bottom corners to make a piping bag. Drizzle over the donuts and add sprinkles.",
    ]),
    notes: JSON.stringify([
      "Store doughnuts in an airtight container for up to 24 hours at room temperature. (They are slightly crispy around the edges soon after baking, they soften as they sit in the container.)",
      "Use a fine microplane to zest the lemon, avoiding the white part if possible.",
      "I cut the raspberries up with a pair of kitchen shears.",
      "These donuts are not crazy sweet, but they have a nice flavor with the optional icing.",
      "To make these with a mini muffin pan, follow the instructions and use 1 tablespoon batter in each cup. Bake for 12-14 minutes. Will make 15 mini muffins.",
      "Egg-free: Omit the egg and use ½ cup milk total. Use 1 teaspoon baking soda in place of the baking powder. (There’s a slight chance that the baking soda may react with the raspberries and cause them to look a little dark. The batch I tested looked good though!)",
      "Dairy-free: Use your favorite plain nondairy milk.",
      "Gluten-free: Use cup-for-cup gluten-free flour in place of the all purpose.",
    ]),
    nutrition: JSON.stringify({
      calories: 177,
      carbohydrates: "29g",
      protein: "4g",
      fat: "5g",
      saturated_fat: "3g",
      polyunsaturated_fat: "1g",
      monounsaturated_fat: "1g",
      trans_fat: "1g",
      cholesterol: "39mg",
      sodium: "217mg",
      potassium: "67mg",
      fiber: "1g",
      sugar: "12g",
      vitamin_a: "170IU",
      vitamin_c: "4mg",
      calcium: "64mg",
      iron: "1mg",
    }),
  },
  {
    id: 8,
    recipe_name: "Cheesy Carrot Fritters",
    description:
      "These carrot fritters come together with a few simple ingredients and are perfect to serve up for a quick lunch! They're great served on their own or with your favorite dip!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Lunch",
    servings: 12,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2023/08/Carrot-fritters-served-with-strawberries-and-broccoli.jpg",
    instructions: JSON.stringify([
      "Use the smallest size hole of a box grater to finely grate the carrots. Grating the carrots finely ensures that they cook through fully in a short amount of time.",
      "Add the cheese, egg, flour, and spices to the bowl with the grated carrots. Mix well until combined.",
      "Heat 1 tablespoon of butter on a frying pan on medium-low heat.",
      "Scoop out tablespoon-sized portions of the carrot mixture onto the pan and press down to shape the portions into small fritters.",
      "Cook the fritters until golden, about 2 – 3 minutes per side. Transfer them to a paper towel-lined plate to cool. They may seem flimsy at first but will firm up slightly as they cool.",
    ]),
    notes: JSON.stringify([
      "Make sure to use the smallest size hole of a box grater to finely grate the carrots for a smoother-textured fritter.",
      "I loved to use 4-cheese Mexican blend cheese for these fritters, but any grated cheese will work well here. Mozzarella cheese is a great low-sodium cheese option for babies and dairy-free shreds work as well.",
    ]),
    nutrition: JSON.stringify({
      calories: 27.88,
      carbohydrates: "2.04g",
      protein: "1.71g",
      fat: "1.42g",
      saturated_fat: "0.73g",
      polyunsaturated_fat: "0.12g",
      monounsaturated_fat: "0.44g",
      trans_fat: "0.002g",
      cholesterol: "17.33mg",
      sodium: "91.33mg",
      potassium: "36.39mg",
      fiber: "0.36g",
      sugar: "0.58g",
      vitamin_a: "1522.28IU",
      vitamin_c: "0.29mg",
      calcium: "29.46mg",
      iron: "0.24mg",
    }),
  },
  {
    id: 9,
    recipe_name: "Easy Pinwheel Sandwiches",
    description:
      "Change up the usual sandwich lunch for these easy and fun pinwheel sandwiches. With easy options for the filling to please a variety of eaters, this is a great kids lunch for home or at school. (And yummy for adults, too!)",
    author: "Unknown",
    cuisine: "American",
    course: "Lunch",
    servings: 1,
    image:
      "https://www.yummytoddlerfood.com/wp-content/uploads/2023/05/Pinwheel-Sandwiches-5-horiz.jpg",
    instructions: JSON.stringify([
      "Place wrap on a cutting board. If not at room temperature, warm for 5-10 seconds in the microwave so it's pliable and easy to roll.",
      "Spread on any condiments, nut butters, or hummus.",
      "Top with the fruit, veggies, and/or protein.",
      "Starting at one side, roll up, keeping the tortilla as tight as possible.",
      "Use a serrated knife to cut into rounds or just in half, depending on your preference.",
    ]),
    notes: JSON.stringify([
      "Use tortillas labeled 'soft' for easiest eating.",
      "Wraps at room temperature or very slightly warmed will be easier to roll than cold ones.",
      "Roll each as tightly as you can to help them hold together.",
      "Put a little of your condiment or sticky ingredient (like peanut butter or hummus) on the edges of the wrap to help it hold together.",
      "Slice using a serrated knife.",
      "Pair with fruit or veggies or simple sides—as well as water or milk as you like.",
    ]),
    nutrition: JSON.stringify({
      calories: 426,
      carbohydrates: "56g",
      protein: "13g",
      fat: "20g",
      saturated_fat: "5g",
      sodium: "434mg",
      potassium: "630mg",
      fiber: "8g",
      sugar: "19g",
      vitamin_a: "76IU",
      vitamin_c: "10mg",
      calcium: "101mg",
      iron: "2mg",
    }),
  },
  {
    id: 10,
    recipe_name: "Broccoli Tots",
    description:
      "These broccoli tots are a fun way to serve up some broccoli. They are a great way of incorporating more veggies into your little one’s meals!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Lunch",
    servings: 28,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2023/03/Broccoli-tots-served-with-corn.jpg",
    instructions: JSON.stringify([
      "Preheat the oven to 375 degrees F (190 degrees C).",
      "Add broccoli florets to a microwave-safe bowl with 2 tablespoons of water and microwave on high for 3-5 minutes, or until the broccoli is soft and fork-tender. You may also boil the broccoli in a small pot of boiling water for 3 minutes. Drain and finely chop into small pieces. I used kitchen scissors to finely chop the florets, but you may also use a food processor.",
      "Add the breadcrumbs, shredded cheese, egg, onion powder, garlic powder, and salt to the bowl with the broccoli. Mix until well combined.",
      "Scoop out tablespoon-sized portions of the mixture and shape them into a tot shape. Place the tots on a parchment paper-lined baking pan.",
      "Bake the tots for about 20-25 minutes, or until the edges begin to slightly brown. Shake the pan halfway through for even browning.",
    ]),
    notes: JSON.stringify([
      "I used kitchen scissors to chop up the florets, but you can also use a food processor or blender to get smaller pieces. I left some chunks in for some added texture, but feel free to chop them up smaller for a more “tot-like” texture.",
      "I used cheddar cheese in this recipe for added flavor. Mozzarella cheese is a good low-sodium alternative if you are preparing these tots for a baby.",
    ]),
    nutrition: JSON.stringify({
      calories: 24.17,
      carbohydrates: "1.97g",
      protein: "1.62g",
      fat: "1.16g",
      saturated_fat: "0.61g",
      polyunsaturated_fat: "0.1g",
      monounsaturated_fat: "0.34g",
      trans_fat: "0.001g",
      cholesterol: "9.01mg",
      sodium: "41.81mg",
      potassium: "46.9mg",
      fiber: "0.39g",
      sugar: "0.34g",
      vitamin_a: "111.22IU",
      vitamin_c: "10.84mg",
      calcium: "29.49mg",
      iron: "0.2mg",
    }),
  },
  {
    id: 11,
    recipe_name: "Air Fryer Green Beans",
    description:
      "These air fryer green beans are easy to make for a quick dinner side dish! In less than 10 minutes, you’ll have them prepped and ready to serve!",
    author: "Lily Payen",
    cuisine: "English",
    course: "snacks",
    servings: 4,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2021/10/IMG_8274.jpg",
    instructions: JSON.stringify([
      "Wash the green beans and pat dry.",
      "Coat the green beans with oil, garlic powder, and black pepper. Salt may be added after removing baby's portion.",
      "Place the green beans in the air fryer basket. Try to make sure that the green beans do not overlap too much.",
      "Cook the green beans at 370 degrees F for 7 minutes, shaking the basket halfway through. If you would like softer green beans, add an extra 1-2 minutes.",
    ]),
    notes: JSON.stringify([
      "Make sure not to overcrowd the air fryer basket. If the basket is too full, the green beans will not cook evenly. I love this size and functionality of this ninja air fryer!",
      "If you prefer softer green beans, add a few minutes to the cook time. When making them for my little guys, I usually air fry the green beans for 9-10 minutes to make them more tender.",
      "After removing baby’s portion, toss the green beans with a little salt to taste for everyone else!",
    ]),
    nutrition: JSON.stringify({
      calories: 69.2,
      carbohydrates: "8.61g",
      protein: "2.23g",
      fat: "3.76g",
      saturated_fat: "0.54g",
      polyunsaturated_fat: "0.5g",
      monounsaturated_fat: "2.57g",
      sodium: "7.38mg",
      potassium: "251.57mg",
      fiber: "3.19g",
      sugar: "3.72g",
      vitamin_a: "783.81IU",
      vitamin_c: "13.85mg",
      calcium: "43.69mg",
      iron: "1.25mg",
    }),
  },
  {
    id: 12,
    recipe_name: "Air Fryer Naan Pizza",
    description:
      "This air fryer naan pizza is the perfect simple lunch idea! You can customize it with your favorite toppings and in under 10 minutes you'll have lunch ready to serve!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Lunch",
    servings: 8,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2024/02/Mini-naan-pizzas.jpg",
    instructions: JSON.stringify([
      "Place the naan dippers on the air fryer basket (or air-fryer-safe parchment liner) in an even layer so that they do not overlap. I love using air fryer liners so that cheese doesn't fall into the air fryer basket.",
      "Spoon 1 tablespoon of pizza sauce evenly on each naan dipper",
      "Sprinkle 1 to 2 tablespoons of mozzarella cheese on top of each piece of naan. Top with toppings of choice",
      "Air fry the mini naan pizzas at 400 degrees F for 4 to 5 minutes, or until the cheesy is lightly brown and bubbly. Let the naan pizzas cool completely before serving.",
    ]),
    notes: JSON.stringify([
      "If you prefer a crispier crust, air fry the naan dippers for 2 to 3 minutes before adding on the sauce and cheese. Then add the pizza sauce, cheese, and topping, and air fry for an additional 3 to 4 minutes.",
      "Do not place too many toppings on top of the pizza so that they stay in place when cooking.",
      "If you can’t find naan dippers, you can use naan rounds or any type of naan bread that will fit in your air fryer! You may need to adjust the cooking time for larger pieces.",
    ]),
    nutrition: JSON.stringify({
      calories: 129,
      carbohydrates: "16g",
      protein: "5g",
      fat: "5g",
      saturated_fat: "2g",
      polyunsaturated_fat: "0.1g",
      monounsaturated_fat: "1g",
      cholesterol: "11mg",
      sodium: "350mg",
      potassium: "53mg",
      fiber: "1g",
      sugar: "2g",
      vitamin_a: "137IU",
      vitamin_c: "1mg",
      calcium: "75mg",
      iron: "0.2mg",
    }),
  },
  {
    id: 13,
    recipe_name: "Air Fryer Sweet Potatoes",
    description:
      "These air fryer sweet potatoes are a sweet and savory combo that are a perfect lunch or dinner side!",
    author: "Lily Payen",
    cuisine: "Unknown",
    course: "Dinner Side",
    servings: 4,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2021/10/IMG_8367-1.jpg",
    instructions: JSON.stringify([
      "Dice the potatoes into small cubes (or into finger-length strips) and wash them well with cold water. Transfer them to a bowl with ice water and let them sit in the ice water for a few minutes. This helps remove excess starch and helps ensure that the potatoes crisp up nicely when cooked.",
      "Drain the potatoes and pat dry very well. Try to remove as much moisture as possible. If the potatoes are too moist, they will be soggy rather than crisp when cooked.",
      "Coat the potatoes in oil, garlic powder, black pepper, and cinnamon.",
      "Place the potatoes in the air fryer basket. Try to make sure that the potatoes do not overlap too much.",
      "Cook the potatoes at 400 degrees F for 13-15 minutes, shaking the basket halfway through.",
    ]),
    notes: JSON.stringify([
      "Make sure not to overcrowd the air fryer basket. If the basket is too full, the potatoes will not cook evenly. I love this size and functionality of this ninja air fryer!",
      "After removing baby’s portion, toss the remaining potatoes with a little salt to taste for everyone else!",
      "When my son was between the age of 6-9 months, I cut the potatoes into finger-length strips. Once he mastered the pincer grasp, around 9-10 months of age, I began dicing the potatoes into small squares.",
    ]),
    nutrition: JSON.stringify({
      calories: 163.13,
      carbohydrates: "23.72g",
      protein: "1.94g",
      fat: "7.07g",
      saturated_fat: "0.99g",
      polyunsaturated_fat: "0.76g",
      monounsaturated_fat: "5.11g",
      sodium: "63.03mg",
      potassium: "395.57mg",
      fiber: "3.66g",
      sugar: "4.77g",
      vitamin_a: "16089.88IU",
      vitamin_c: "2.74mg",
      calcium: "38.3mg",
      iron: "0.82mg",
    }),
  },
  {
    id: 14,
    recipe_name: "Air Fryer Salmon",
    description:
      "This air fryer salmon is ready to serve in just 10 minutes! It is soft and flaky and comes out perfect every time!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Lunch",
    servings: 2,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2021/10/IMG_8404.jpg",
    instructions: JSON.stringify([
      "Mix together the paprika, garlic powder, onion powder, black pepper, and salt until combined to form the seasoning blend.",
      "Coat the salmon in oil and season with the seasoning blend.",
      "Place the salmon in the air fryer basket. If your salmon has skin, place the salmon skin side down.",
      "Cook the salmon at 390 degrees F for 8 to 10 minutes.",
      "Check the salmon for doneness with a fork. Add another 1-2 minutes depending on the thickness of your salmon filet.",
    ]),
    notes: JSON.stringify([
      "Make sure not to overcrowd the air fryer basket. I usually place no more than 2 fillets in the basket at a time, but this may vary depending on the size of your air fryer basket. I love the size and functionality of this ninja air fryer!",
      "For my baby, I season filet portions without salt and love to use a Cajun seasoning blend for everyone else.",
      "Beware of potential bones in salmon! Always run your fingers through the fish and pick out any bones. I always buy boneless filets, but still run my fingers through it to ensure that there are no bones.",
    ]),
    nutrition: JSON.stringify({
      calories: 309.88,
      carbohydrates: "1.49g",
      protein: "34.04g",
      fat: "17.81g",
      saturated_fat: "2.64g",
      polyunsaturated_fat: "5.06g",
      monounsaturated_fat: "8.69g",
      cholesterol: "93.5mg",
      sodium: "75.99mg",
      potassium: "860.21mg",
      fiber: "0.29g",
      sugar: "0.09g",
      vitamin_a: "109.31IU",
      vitamin_c: "1.59mg",
      calcium: "23.95mg",
      iron: "1.54mg",
    }),
  },
  {
    id: 15,
    recipe_name: "Air Fryer Chicken Wings",
    description:
      "These air fryer chicken wings are so easy to make and come out perfect every time. They are crispy, yet tender, without all of the extra fat!",
    author: "Lily Payen",
    cuisine: "English",
    course: "Dinner",
    servings: 4,
    image:
      "https://feedingtinybellies.com/wp-content/uploads/2021/12/IMG_1584.jpg",
    instructions: JSON.stringify([
      "Coat the chicken wings in oil and seasonings. Make sure each piece is fully coated.",
      "Place the chicken wings in the air fryer basket. Make sure not to overcrowd the basket and that the pieces do not overlap to ensure even cooking.",
      "Air fry the chicken at 360 degrees F for 12 minutes.",
      "Open the air fryer basket and flip each piece of chicken over. Air fry for another 12 minutes.",
      "Open the air fryer basket and give it a shake. Increase the temperature to 400 degrees F and air fry the chicken for an additional 5 minutes.",
      "Transfer the chicken to a bowl and coat in a sauce if desired.",
    ]),
    notes: JSON.stringify([
      "Make sure not to overcrowd the air fryer basket. Try to make sure that the chicken pieces are not overlapping so that they cook evenly. You may have to cook the wings in batches depending on the size of your air fryer. I love the size and functionality of this ninja air fryer!",
      "I love using tony’s seasoning blend for these wings. It is an all-in-one seasoning spice, packed with flavor.",
      "I prefer sweeter barbeque sauces for my family, but I like to use the primal kitchen barbeque sauce as a sugar-free option for my baby.",
      "Make sure to debone the wings before serving them to your baby.",
    ]),
    nutrition: JSON.stringify({
      calories: 466.84,
      carbohydrates: "2.29g",
      protein: "35.56g",
      fat: "34.32g",
      saturated_fat: "8.91g",
      polyunsaturated_fat: "7.54g",
      monounsaturated_fat: "14.44g",
      trans_fat: "0.38g",
      cholesterol: "148.03mg",
      sodium: "141.41mg",
      potassium: "340.85mg",
      fiber: "1.17g",
      sugar: "0.15g",
      vitamin_a: "344.49IU",
      vitamin_c: "2.25mg",
      calcium: "64.28mg",
      iron: "2.78mg",
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
