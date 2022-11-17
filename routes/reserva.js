const express = require('express')
const router = express.Router();
const { crearReserva, listReserva, listReservaId } = require('../controllers/reserva');

router.post('/new', crearReserva);
router.get('/todos', listReserva);
router.get('/todos/cliente', listReservaId)
module.exports = router