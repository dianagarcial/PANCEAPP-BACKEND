const { response } = require('express');
const Usuario = require("../models/usuario");
const bcrypt = require('bcryptjs');
const { generateJWT } = require('../Helpers/jwt');
const { RESPONSE_MESSAGES } = require('../Helpers/ResponseMessages');

const crearUsuario = async (req, res = response) => {
    try {
        let Usuario_ = new Usuario(req.body);
        console.log(Usuario_.contrasena)
        Usuario_.contrasena = bcrypt.hashSync(Usuario_.contrasena, bcrypt.genSaltSync());
        Usuario_.rol='1'
        await Usuario_.save();
        return res.status(201).json({
            ok: true,
            Usuario_
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            error
        });
    }
}
const listUsuario = async (req, res = response) => {
    try {
        const Usuario_ = await Usuario.find();
        if (Usuario_) { return res.status(200).json({ ok: true, Usuario_ }); }
        return res.status(404).json({
            ok: false,
            msg: RESPONSE_MESSAGES.ERR_NOT_FOUND
        });
    } catch (e) {
        return res.status(500).json({
            ok: false,
            msg: RESPONSE_MESSAGES.ERR_500
        });
    }
}
const loginUsuario = async (req, res = response) => {
    let { correo, contrasena } = req.body;
    try {
        let usuarioDB = await Usuario.findOne({ correo });
        if (!usuarioDB) {
            return res.status(404).json({
                ok: false,
                msg: RESPONSE_MESSAGES.ERR_EMAIL_NOT_FOUND
            })
        }
        let validPassword = bcrypt.compareSync(contrasena, usuarioDB.contrasena);
        if (!validPassword) {
            return res.status(400).json({
                ok: false,
                msg: RESPONSE_MESSAGES.ERR_INVALID_PASSWORD
            })
        }
        const token= await generateJWT(usuarioDB.id,usuarioDB.nombre,usuarioDB.correo,usuarioDB.direccion,usuarioDB.celular, usuarioDB.rol);
        const ids= usuarioDB.id
        const rol = usuarioDB.rol
        return res.status(200).json({ ok: true, usuario: usuarioDB, token, ids, rol})
    } catch (error) {

        return res.status(500).json({ ok: false, msg: RESPONSE_MESSAGES.ERR_500 })
    }
}

const revalidateToken= async(req,res=response) => {
    let {id,nombre,correo,rol}=req;
    const token= await generateJWT(id,nombre,correo,rol);
   return res.status(200).json({ok:true,token,uid:id,nombre,correo,rol});
}


module.exports = {
    crearUsuario,
    listUsuario,
    loginUsuario,
    revalidateToken
}
