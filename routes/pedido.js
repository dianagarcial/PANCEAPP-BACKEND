const express = require('express')
const router = express.Router();
const { crearPedido, listarPedidos } = require('../controllers/pedido');

router.post('/new', crearPedido);
router.get('/todos', listarPedidos);
module.exports = router