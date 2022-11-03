const express = require('express')
const router = express.Router();
const { crearRestaurante, listRestaurante, listRestaurantes, listRestauranteTipo } = require('../controllers/restaurante');

router.post('/new-resta', crearRestaurante);
router.get('/todos', listRestaurantes);
router.get('/:idRestaurante', listRestaurante);
router.get('/:idRestaurante/:tipo', listRestauranteTipo);

module.exports = router