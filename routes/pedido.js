const express = require('express')
const router = express.Router();
const { crearPedido } = require('../controllers/pedido');

router.post('/new', crearPedido);
module.exports = router