const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

router.post("/meal-plan", foodController.generateMealPlan);

module.exports = router;
