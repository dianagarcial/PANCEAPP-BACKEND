const express = require('express')
const router = express.Router();
const { crearOrden, listOrdenes, listOrden, updateOrden, deleteOrden} = require('../controllers/orden');

router.post('/new', crearOrden);
router.get('/todos', listOrdenes );
router.get('/:idOrden', listOrden );
router.put('/:idOrden',updateOrden)
router.delete('/:idOrden', deleteOrden)

module.exports = router