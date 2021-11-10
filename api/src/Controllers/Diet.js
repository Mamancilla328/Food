require("dotenv").config();
const axios = require("axios");
const { API_KEY } = process.env;
const { Recipe, Diet } = require("../db.js");

const getDiets = async (req, res) => {
  const apiUrl = await axios.get(
    `https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`
  );
  const apiInfo = await apiUrl.data.results.map((e) => e.diets);

  const diets = apiInfo.flat();

  diets.forEach((e) => {
    Diet.findOrCreate({
      where: {
        name: e,
      },
    });
  });

  const allDiets = await Diet.findAll();
  console.log(allDiets);
  if (allDiets.length) {
    res.status(200).send(allDiets);
  } else {
    res.status(400).send("No se pudo procesar su solicitud");
  }
};

module.exports = {
  getDiets,
};
