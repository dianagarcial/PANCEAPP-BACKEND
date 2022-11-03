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
        type: Number,
        required: true,
    }, 
    longitud: {
        type: Number,
        required: true,
    }, 
    plato: {
        type: Array,
        ref: "Plato",
        required: false,
    }
})

module.exports = model('Restaurante', restauranteSchema)

