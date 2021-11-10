const { Router } = require("express");
const routerRecipe = require("./Recipe.js");
const routerDiet = require("./Diets.js");

const router = Router();

router.use("/Recipes", routerRecipe);
router.use("/Diets", routerDiet);

module.exports = router;
