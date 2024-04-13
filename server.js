const knex = require("knex")(require("./knexfile"));
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 3000;

const busyToddlerMum = require("./routes/ingredients-recipes");
const openAiRoutes = require("./routes/foodRoutes");

// all users routes
app.use("/api", busyToddlerMum);

// Define openAIroutes
app.use('/api', openAiRoutes);

app.get("/", (req, res) => {
  res.send("Hello from Express!");
});

app.listen(PORT, () => {
  console.log(`running at http://localhost:${PORT}`);
});
