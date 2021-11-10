require("dotenv").config();
const { API_KEY } = process.env;
const axios = require("axios");
const { Recipe, Diet } = require("../db.js");

const getApiInfo = async () => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );

  const apiInfo = await apiUrl.data.results.map((e) => ({  
      id: e.id,
      image: e.image,
      name: e.title,
      dishTypes: e.dishTypes.map((e) => e),
      diets: e.diets.map((e) => e),
      summary: e.summary,
      score: e.spoonacularScore,
      healthScore: e.healthScore,
      instructions: e.analyzedInstructions.map((e) => e.analyzedInstructions),
  }));
  return apiInfo;
};

const getDbInfo = async () => {
  return await Recipe.findAll({
    include: {
      model: Diet,
      attributes: ["name"],
      through: {
        attributes: [],
      },
    },
  });
};

const getAllRecipes = async () => {
  const apiInfo = await getApiInfo();
  const dbInfo = await getDbInfo();

  const All = [...apiInfo, ...dbInfo];

  return All;
};

const getRecipes = async (req, res) => {
  const { name } = req.query;
  const allRecipes = await getAllRecipes();

  if (!name) {
    res.status(200).send(allRecipes);
  } else if (name) {
    const recipeName = await allRecipes.filter((e) =>
      e.name.toLowerCase().includes(name.toLowerCase())
    );
    recipeName.length > 0
      ? res.status(200).send(recipeName)
      : res.status(404).send("Recipe Not Found");
  }
};

const getRecipeById = async (req, res) => {
  const { id } = req.params;

  const allRecipes = await getAllRecipes();

  if (id) {
    let recipeId = await allRecipes.filter((e) => e.id == id);

    recipeId.length
      ? res.status(200).json(recipeId[0])
      : res.status(404).send("Recipe not found");
  }
};

const createRecipe = async (req, res) => {
  const {
    name,
    summary,
    score,
    healthScore,
    instructions,
    dietTypes,
    createdInDb,
  } = req.body;

  const recipeCreated = await Recipe.create({
    name,
    summary,
    score,
    healthScore,
    instructions,
    createdInDb,
  });

  const dietDb = await Diet.findAll({
    where: {
      name: dietTypes,
    },
  });

  recipeCreated.addDiet(dietDb);
  res.send("Recipe created!");
};

module.exports = {
  getApiInfo,
  getDbInfo,
  getAllRecipes,
  getRecipes,
  createRecipe,
  getRecipeById,
};
