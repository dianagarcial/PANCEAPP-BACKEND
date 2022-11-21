const { Schema, model } = require('mongoose');

const usuarioSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    correo: {
        type: String,
        required: true,
    }, 
    contrasena: {
        type: String,
        required: true,
    }, 
    direccion: {
        type: String,
        required: true,
    }, 
    celular:{
        type: String,
        required: true,
    },
    rol:{
        type:String,
        required:true,
    }
   
})

module.exports = model('Usuario', usuarioSchema)