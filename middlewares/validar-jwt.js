const { response } = require("express");
const jwt = require("jsonwebtoken");
const { RESPONSE_MESSAGES } = require("../Helpers/ResponseMessages");

const validarJWT=(req,res=response,next)=>{
    const token=req.header('x-token');
    if(!token){return res.status(401).json({ok:false,msg:RESPONSE_MESSAGES.ERR_NOT_FOUND});}
    try {
       const {id,nombre,correo}=jwt.verify(token,process.env.SECRET_JWT_SEED);
       req.id=id;
       req.nombre=nombre;
       req.correo=correo;
       
       next();
    } catch (error) {
        res.status(401).json({ok:false,msg:'Token no válido.'})
    }
}
module.exports={
    validarJWT
}