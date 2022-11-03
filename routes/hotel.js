const express = require('express')
const router = express.Router();
const { crearHotel, listHotel, listHotelid } = require('../controllers/hotel');

router.post('/new', crearHotel);
router.get('/todos', listHotel );
router.get('/:idhotel', listHotelid );

module.exports = router