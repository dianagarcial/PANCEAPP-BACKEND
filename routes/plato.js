const express = require('express')
const router = express.Router();
const { crearPlato, listPlatoTipo } = require('../controllers/plato');

router.post('/new', crearPlato);
router.get('/tipo/:tipo', listPlatoTipo )
// router.delete('/:id',deleteRestaurante)

module.exports = router