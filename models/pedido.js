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
    ordenes: {
        type: Array,
        ref: "Orden",
        required: false,
    },
    
    restaurante:{
        type: Array,
        ref: "Restaurante",
        required: false,

    },
    usuario:{
        type: Array,
        ref:'Usuario',
        required:false,
    }
    
    
})

module.exports = model('Pedido', pedidoSchema)