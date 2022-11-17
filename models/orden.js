const { Schema, model } = require('mongoose');

const ordenSchema = Schema({
    
    
    cantidad: {
        type: Date,
        required: true,
    }, 
    plato: {
        type: Array,
        ref: "Plato",
        required: false,
    },

    
    
})

module.exports = model('Pedido', ordenSchema)