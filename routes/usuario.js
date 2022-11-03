const express = require('express')
const router = express.Router();
const { crearUsuario, listUsuario, loginUsuario } = require('../controllers/usuario');

router.post('/new', crearUsuario);
router.post('/login',loginUsuario)
router.get('/todos', listUsuario);
module.exports = router