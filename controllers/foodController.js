require("dotenv").config();
const express = require("express");
const axios = require("axios");
const OpenAI = require("openai-api");

const app = express();
app.use(express.json());

// Initialize OpenAI with the API key from the .env file
const openai = new OpenAI(process.env.OPENAI_API_KEY);

const headers = {
  "Content-Type": "application/json",
  Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
};

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
    const input = `Generate a customized meal plan for a busy toddler mom for the week. The mom has the following ingredients available in her kitchen: ${ingredientList}. The meal plan should include breakfast, lunch, and dinner for each day of the week. Each meal should be nutritious, toddler-friendly, and easy to prepare. Feel free to include additional ingredients for meal prep. Provide simple recipes or meal ideas for each meal.`;

    // Call the OpenAI API to generate the meal plan
    const response = await axios.post(
      "https://api.openai.com/v1/chat/completions",
      {
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: `${input}` }],
      },
      { headers }
    );

    const chatGptResponse = response.data.choices[0].message.content;

    console.log(chatGptResponse);
    res.status(200).json({ message: chatGptResponse });
  } catch (err) {
    console.log("Error: " + err);
    res
      .status(500)
      .json({ error: "An error occurred while processing your request" });
  }
};


module.exports = { generateMealPlan };
