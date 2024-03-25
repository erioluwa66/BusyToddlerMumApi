const express = require("express");
const router = express.Router();
const foodController = require("../controllers/foodController");

router.post("/food-idea", foodController.generateMealPlan);

module.exports = router;
