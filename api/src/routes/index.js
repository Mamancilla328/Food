const { Router } = require('express');
const routerRecipe = require('./Recipe.js');
const routerDiet = require('./Diets.js');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();


// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use("/Recipes", routerRecipe);
router.use("/Diets", routerDiet);



module.exports = router;
