const { Router } = require('express');

const router = Router();

const { getDiets } = require('../controllers/Diet.js');


router.get('/types', getDiets);

module.exports = router
