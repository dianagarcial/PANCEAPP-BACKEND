const express = require('express')
const router = express.Router();
const { crearHotel, listHotel, listHotelid, updateHotel } = require('../controllers/hotel');

router.post('/new', crearHotel);
router.get('/todos', listHotel );
router.get('/:idhotel', listHotelid );
router.put('/:id',updateHotel)

module.exports = router