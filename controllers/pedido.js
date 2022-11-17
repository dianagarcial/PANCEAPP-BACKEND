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
const listarPedidos= async(req,res=response)=>{
    try{
        const Pedido_ = await Pedido.find();
        if(Pedido_){return res.status(200).json({ok:true,Pedido_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

module.exports = {
    crearPedido,
    listarPedidos
}