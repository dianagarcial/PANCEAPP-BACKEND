const {response}=require('express');
const Hotel = require("../models/hotel");
const { RESPONSE_MESSAGES } = require('../Helpers/ResponseMessages');

const crearHotel = async (req, res = response) => {
    try {
        let Hotel_ = new Hotel(req.body);
        await Hotel_.save();
        return res.status(201).json({ok: true,Hotel_});
    } catch (error) {
        console.log(error);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

const listHotel= async(req,res=response)=>{
    try{
        const Hotel_ = await Hotel.find();
        if(Hotel_){return res.status(200).json({ok:true,Hotel_});}
        return res.status(404).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});
    }catch(e){
        logger.error(`readEventos: Internal server error: ${e}`);
        return res.status(500).json({ok:false,msg:RESPONSE_MESSAGES.ERR_500});
    }
}

module.exports = {
    crearHotel,
    listHotel
}