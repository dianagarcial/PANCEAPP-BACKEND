

const {response}=require('express');
const Restaurante = require("../models/restaurante");
const{RESPONSE_MESSAGES}=require('../Helpers/ResponseMessages');

const crearRestaurante = async (req, res = response) => {
    try {
        let Restaurante_ = new Restaurante(req.body);
        await Restaurante_.save();
        return res.status(201).json({ok: true,Restaurante_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false,error});
    }
}
const listRestaurante= async(req,res=response)=>{
    try{
        const Restaurante_ = await Restaurante.find();
        if(Restaurante_){return res.status(200).json({ok:true,Restaurante_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

module.exports = {
    crearRestaurante,
    listRestaurante
}



