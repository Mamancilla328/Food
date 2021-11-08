require('dotenv').config();
const axios = require ('axios');
const {
    API_KEY,
} = process.env;
const { Recipe, Diet } = require('../db.js');


const getDiets = async (req, res) => {
    const apiUrl = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&number=100&addRecipeInformation=true`);
    const apiInfo = await apiUrl.data.results.map(e => e.diets );
    // console.log(apiInfo);

    const diets = apiInfo.flat();
    // console.log(diets)

    diets.forEach(e => {
        Diet.findOrCreate({
            where: {
                name: e,
            }
        })
    }); 
    
    const allDiets = await Diet.findAll();
    console.log(allDiets)
    if (allDiets.length) {
        res.status(200).send(allDiets);
    }else{
        res.status(400).send('No se pudo procesar su solicitud')
    }
}





// [ ] GET /types:
// Obtener todos los tipos de dieta posibles
// En una primera instancia, cuando no exista ninguno, deberán precargar la base de datos con 
// los tipos de datos indicados por spoonacular acá


module.exports = {
    getDiets,
}