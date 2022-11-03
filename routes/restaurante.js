const express = require('express')
const router = express.Router();
const { crearRestaurante, listRestaurante } = require('../controllers/restaurante');

router.post('/new-resta', crearRestaurante);
router.get('/todos', listRestaurante);
module.exports = router