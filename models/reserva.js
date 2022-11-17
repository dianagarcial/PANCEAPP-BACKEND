const { Schema, model } = require('mongoose');

const reservaSchema = Schema({
    
    fechaIngreso: {
        type: Date,
        required: true,
    }, 
    fechaSalida: {
        type: Date,
        required: true,
    }, 
    nroHabitaciones: {
        type: Number,
        required: true,
    },
    cantPersonas: {
        type: Number,
        required: true,
    },
    hotel:{
        type: Array,
        ref: "Hotel",
        required: false,

    },
    usuario:{
        type: Array,
        ref:'Usuario',
        required:false,
    }

    
})

module.exports = model('Reserva', reservaSchema)