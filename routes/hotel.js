const express = require('express')
const router = express.Router();
const { crearHotel, listHotel } = require('../controllers/hotel');

router.post('/new', crearHotel);
router.get('/todos', listHotel );
module.exports = router