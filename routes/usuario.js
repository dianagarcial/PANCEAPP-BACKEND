const express = require('express')
const router = express.Router();
const { crearUsuario, listUsuario, loginUsuario, revalidateToken } = require('../controllers/usuario');
const { validarJWT } = require('../middlewares/validar-jwt');

router.post('/new', crearUsuario);
router.post('/login',loginUsuario)
router.get('/todos', listUsuario);
router.get("/",validarJWT,revalidateToken);
module.exports = router