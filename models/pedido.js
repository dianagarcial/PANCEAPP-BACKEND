const { Schema, model } = require('mongoose');

const pedidoSchema = Schema({
    
    fecha: {
        type: Date,
        required: true,
    }, 
    hora: {
        type: Date,
        required: true,
    }, 
    platos: {
        type: Array,
        ref: "Plato",
        required: false,
    },
    
    
})

module.exports = model('Pedido', pedidoSchema)