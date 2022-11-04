const jwt=require('jsonwebtoken');

const generateJWT=(id,nombre,correo,direccion,celular,rol)=>{
    return new Promise((resolve,reject)=>{
        const payload={id,nombre,correo,direccion,celular,rol};
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