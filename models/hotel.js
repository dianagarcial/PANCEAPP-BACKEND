const { Schema, model } = require('mongoose');

const hotelSchema = Schema({
    nombre: {
        type: String,
        required: true,
    },
    descripcion: {
        type: String,
        required: true,
    }, 
    direccion: {
        type: String,
        required: true,
    }, 
    precio: {
        type: Number,
        required: true,
    }, 
    nroHabitaciones:{
        type: Number,
        required: false,
    },
    latitud: {
        type: Number,
        required: true,
    }, 
    longitud: {
        type: Number,
        required: true,
    },
    imagen:{
        type:String,
        require:false
    },
    imagenaux1:{
        type:String,
        require:false
    },
    imagenaux2:{
        type:String,
        require:false
    },
    imagenaux3:{
        type:String,
        require:false
    },
    indicacion:{
        type:String,
        require:false

    },
    reserva: {
        type: Array,
        ref: "Reserva",
        required: false,
    }

})

module.exports = model('Hotel', hotelSchema)