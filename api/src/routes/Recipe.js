const { Router } = require("express");

const router = Router();

const {
  getRecipes,
  createRecipe,
  getRecipeById,
} = require("../controllers/Recipe.js");

router.get("/", getRecipes);

router.get("/:id", getRecipeById);

router.post("/add", createRecipe);

module.exports = router;
