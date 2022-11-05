const express = require('express')
const router = express.Router();
const { crearRestaurante, listRestaurante, listRestaurantes, listRestauranteTipo, deleteRestaurante, updateRestaurante } = require('../controllers/restaurante');

router.post('/new', crearRestaurante);
router.get('/todos', listRestaurantes);
router.get('/:idRestaurante', listRestaurante);
router.get('/:idRestaurante/:tipo', listRestauranteTipo);
router.put('/:id',updateRestaurante)
router.delete('/:id', deleteRestaurante)

module.exports = router