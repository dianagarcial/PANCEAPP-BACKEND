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
    }
    
})

module.exports = model('Reserva', reservaSchema)