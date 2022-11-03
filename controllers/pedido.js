const {response}=require('express');
const Pedido = require("../models/pedido");
const{RESPONSE_MESSAGES}=require('../Helpers/ResponseMessages');

const crearPedido = async (req, res = response) => {
    try {
        let Pedido_ = new Pedido(req.body);
        await Pedido_.save();
        return res.status(201).json({ok: true,Pedido_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false,error});
    }
}

module.exports = {
    crearPedido
}