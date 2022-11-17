const {response}=require('express');
const Reserva = require("../models/reserva");
const Hotel =require("../models/hotel")
const Usuario = require("../models/usuario")
const{RESPONSE_MESSAGES}=require('../Helpers/ResponseMessages');

const crearReserva = async (req, res = response) => {
    try {
        let Reserva_ = new Reserva(req.body);
        await Reserva_.save();
        let hotel =await Hotel.findById({_id:req.body.idHotel});
        Reserva_.hotel.push(hotel)
        hotel.reserva.push(Reserva_);
        await hotel.save();
        let usuario =await Usuario.findById({_id:"636575b67f4ae816b98b9806"});
        Reserva_.usuario.push(usuario)
        usuario.reserva.push(Reserva_);
        await usuario.save();
        await Reserva_.save();
        return res.status(201).json({ok: true,Reserva_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false,error});
    }
}   
const listReserva= async(req,res=response)=>{
    try{
        const Reserva_ = await Reserva.find();
        if(Reserva_){return res.status(200).json({ok:true,Reserva_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}
const listReservaId= async(req,res=response)=>{
    try{
        const Reserva_ = await Reserva.findById(id=req.params.idReserva);
        if(Reserva_){return res.status(200).json({ok:true,Reserva_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}



module.exports = {
    crearReserva,
    listReserva,
    listReservaId
}