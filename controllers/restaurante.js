

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
const listRestaurantes= async(req,res=response)=>{
    try{
        const Restaurante_ = await Restaurante.find();
        if(Restaurante_){return res.status(200).json({ok:true,Restaurante_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        console.log(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}
const listRestaurante= async(req,res=response)=>{
    try{
       
        const Restaurante_ = await Restaurante.findById(id=req.params.idRestaurante);
        if(Restaurante_){return res.status(200).json({ok:true,Restaurante_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
       
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}
const listRestauranteTipo= async(req,res=response)=>{
    try{
       
        let Restaurante_ = await Restaurante.findById(id=req.params.idRestaurante)
        let platoTipo=[];
        Restaurante_.plato.forEach(plato => {
            if(plato.tipo===req.params.tipo){
                platoTipo.push(plato)
            }});
       

        if(Restaurante_){return res.status(200).json({ok:true,Restaurante_,platoTipo});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        console.log(e);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}
const updateRestaurante = async (req, res = response) => {
    try {
        const restaurante = await Restaurante.findById( req.params.id );
        if ( !restaurante ) {return res.status(404).json({ok: true,msg: RESPONSE_MESSAGES.ERR_NOT_FOUND});}
        await Restaurante.updateOne({_id:req.params.id}, {$set:{...req.body}}, { upsert: true });
        return res.status(200).json({ok: true,msg:RESPONSE_MESSAGES.SUCCESS_2XX})
    } catch (e) {
        console.log(`updateRama: Internal server error: ${e}`);
        return res.status(500).json({ok: false,msg: RESPONSE_MESSAGES.ERR_500})
    }
}

const deleteRestaurante= async(req,res=response)=>{
    try {
        const restaurante = await Restaurante.findById( req.params.id );
        if ( !restaurante ) {return res.status(404).json({ok: true,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});}
        await Restaurante.findByIdAndDelete( req.params.id );
        return res.status(200).json({ok: true,msg:RESPONSE_MESSAGES.SUCCESS_2XX});
    } catch (e) {
        console.log(`deleteRama: Internal server error: ${e}`);
        res.status(500).json({ok: false,msg: RESPONSE_MESSAGES.ERR_500})
    }
}
module.exports = {
    crearRestaurante,
    listRestaurantes,
    listRestaurante,
    listRestauranteTipo,
    updateRestaurante,
    deleteRestaurante
}



