require("dotenv").config();
const OpenAI = require("openai-api");

// Initialize OpenAI with the API key from the .env file
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const generateMealPlan = async (req, res) => {
  // Destructure ingredients from the request body and validate input
  const { ingredients } = req.body;
  if (!ingredients || !Array.isArray(ingredients) || ingredients.length === 0) {
    return res
      .status(400)
      .json({ message: "Ingredients list is required and must be an array." });
  }

  try {
    // Construct the OpenAI prompt using the provided ingredients
    const ingredientList = ingredients.join(", ");
    const prompt = `Generate a customized meal plan for a busy toddler mom for the week. The mom has the following ingredients available in her kitchen: ${ingredientList}. The meal plan should include breakfast, lunch, and dinner for each day of the week. Each meal should be nutritious, toddler-friendly, and easy to prepare. Feel free to include additional ingredients for meal prep. Provide simple recipes or meal ideas for each meal.`;

    // Call the OpenAI API to generate the meal plan
    const response = await openai.complete({
      engine: "gpt-3.5-turbo-0125", // Use the latest available model
      prompt,
      maxTokens: 200,
      temperature: 0.5,
      topP: 1,
      n: 1,
      stop: ["\n"],
    });

    // Extract the generated meal plan from the OpenAI response
    const generatedMealPlan = response.data.choices[0].text.trim();

    // Send the generated meal plan as a response
    res.json({ mealPlan: generatedMealPlan });
  } catch (error) {
    // Log the error for debugging purposes
    console.error("Error generating meal plan:", error);

    // Send a user-friendly error message
    res.status(500).json({
      message:
        "An unexpected error occurred while generating the meal plan. Please try again later.",
    });
  }
};

module.exports = { generateMealPlan };
