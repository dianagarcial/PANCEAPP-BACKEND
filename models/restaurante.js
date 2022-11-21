const { Schema, model } = require('mongoose');

const restauranteSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    direccion: {
        type: String,
        required: true,
    }, 
    latitud: {
        type: String,
        required: true,
    }, 
    longitud: {
        type: String,
        required: true,
    }, 
    indicacion: {
        type: String,
        required: true,
    },
    imagen:{
        type: String,
        required: true,

    },
    plato: {
        type: Array,
        ref: "Plato",
        required: false,
    }
   
})

module.exports = model('Restaurante', restauranteSchema)

