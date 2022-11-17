const { Schema, model } = require('mongoose');

const ordenSchema = Schema({
    
    
    plato: {
        type: Array,
        ref: "Plato",
        required: false,
    },

    
    
})

module.exports = model('Pedido', ordenSchema)