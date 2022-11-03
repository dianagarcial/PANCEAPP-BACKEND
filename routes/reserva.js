const express = require('express')
const router = express.Router();
const { crearReserva, listReserva } = require('../controllers/reserva');

router.post('/new', crearReserva);
router.post('/todos', listReserva);
module.exports = router