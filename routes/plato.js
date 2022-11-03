const express = require('express')
const router = express.Router();
const { crearPlato, listPlatoTipo } = require('../controllers/plato');

router.post('/new', crearPlato);
router.get('/tipo/:tipo', listPlatoTipo )

module.exports = router