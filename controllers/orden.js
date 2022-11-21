const {response}=require('express');
const Orden = require("../models/orden");
const Usuario = require("../models/usuario")
const{RESPONSE_MESSAGES}=require('../Helpers/ResponseMessages');

const crearOrden = async (req, res = response) => {
    try {
        let Orden_ = new Orden(req.body);
        await Orden_.save();
        console.log(req.body.ids)
        let usuario =await Usuario.findById(req.body.ids);
        Orden_.usuario.push(usuario)
        await Orden_.save();        
        return res.status(201).json({ok: true,Orden_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}
const listOrdenes= async(req,res=response)=>{
    try{
        const Orden_ = await Orden.find();
        if(Orden_){return res.status(200).json({ok:true,Orden_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

const listOrdenesPendientes= async(req,res=response)=>{
    try{
        let ordenPendiente = await Orden.find({estado:0});
        if(ordenPendiente){return res.status(200).json({ok:true,ordenPendiente});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

const listOrden= async(req,res=response)=>{
    try{
       
        const Orden_ = await Orden.findById(id=req.params.idOrden);
        if(Orden_){return res.status(200).json({ok:true,Orden_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
       
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}






const updateOrden = async (req, res = response) => {
    try {
        const orden = await Orden.findById( req.params.idOrden );
        if ( !orden ) {return res.status(404).json({ok: true,msg: RESPONSE_MESSAGES.ERR_NOT_FOUND});}
        await Orden.updateOne({_id:req.params.idOrden}, {$set:{...req.body}}, { upsert: true });
        return res.status(200).json({ok: true,msg:RESPONSE_MESSAGES.SUCCESS_2XX})
    } catch (e) {
        console.log(`updateRama: Internal server error: ${e}`);
        return res.status(500).json({ok: false,msg: RESPONSE_MESSAGES.ERR_500})
    }
}

const deleteOrden= async(req,res=response)=>{
    try {
        const orden = await Orden.findById( req.params.idOrden );
        if ( !orden ) {return res.status(404).json({ok: true,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});}
        await Orden.findByIdAndDelete( req.params.idOrden );
        return res.status(200).json({ok: true,msg:RESPONSE_MESSAGES.SUCCESS_2XX});
    } catch (e) {
        console.log(`deleteRama: Internal server error: ${e}`);
        res.status(500).json({ok: false,msg: RESPONSE_MESSAGES.ERR_500})
    }
}

module.exports = {
    crearOrden,
    listOrdenes,
    listOrden,
    listOrdenesPendientes,
    updateOrden,
    deleteOrden
}