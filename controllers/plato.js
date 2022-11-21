const {response}=require('express');
const Plato = require("../models/plato");
const Restaurante = require("../models/restaurante");
const{RESPONSE_MESSAGES}=require('../Helpers/ResponseMessages');

const crearPlato = async (req, res = response) => {
    try {
        let Plato_ = new Plato(req.body);
        await Plato_.save();
        let restaurante =await Restaurante.findById({_id:req.body.idRestaurante});
        restaurante.plato.push(Plato_);
        await restaurante.save();
        return res.status(201).json({ok: true,Plato_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok: false,error});
    }
}                                                                                                                                           

const listPlato= async(req,res=response)=>{
    try{
        const Plato_ = await Plato.find();
        if(Plato_){return res.status(200).json({ok:true,Plato_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        console.log(`Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

const listPlatoTipo= async(req,res=response)=>{
    try{
        
        const Plato_ = await Plato.find({tipo:req.params.tipo});
        if(Plato_){return res.status(200).json({ok:true,Plato_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        console.log(`Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

module.exports = {
    crearPlato, listPlato, listPlatoTipo 
    //eliminarPlato
}
