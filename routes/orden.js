const express = require('express')
const router = express.Router();
const { crearOrden, listOrdenes, listOrden, updateOrden, deleteOrden, listOrdenesPendientes, listOrdenesFinalizados} = require('../controllers/orden');

router.post('/new', crearOrden);
router.get('/todos', listOrdenes );
router.get('/pendientes', listOrdenesPendientes );
router.get('/finalizados', listOrdenesFinalizados );

router.get('/:idOrden', listOrden );
router.put('/:idOrden',updateOrden)
router.delete('/:idOrden', deleteOrden)

module.exports = router