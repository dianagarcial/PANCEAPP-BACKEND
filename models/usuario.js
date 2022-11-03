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
    reserva:{
        type: Array,
        ref: "Reserva",
        required: false,

    },
    pedido:{
        type: Array,
        ref: "Pedido",
        required: false,

    }
   
})

module.exports = model('Usuario', usuarioSchema)