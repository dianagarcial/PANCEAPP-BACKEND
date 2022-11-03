const jwt=require('jsonwebtoken');

const generateJWT=(id,nombre,correo,direccion,celular)=>{
    return new Promise((resolve,reject)=>{
        const payload={id,nombre,correo,direccion,celular};
        jwt.sign(payload,process.env.SECRET_JWT_SEED,{
            expiresIn:'24h'
        },(err,token)=>{
            if(err){
                console.log(err);
                reject(err);
            } 
            resolve(token);
        })
    });
}
module.exports={
    generateJWT
}    