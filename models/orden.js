const { Schema, model } = require('mongoose');

const ordenSchema = Schema({
    
    
    plato: {
        type: Array,
        ref: "Plato",
        required: false,
    },

    fecha:{
        type:Date,
        required:true
    },

    usuario:{
        type: Array,
        ref:'Usuario',
        required:true,
    },
    estado:{
        type:Number,
        required:true
    }
    

    
    
})

module.exports = model('Pedido', ordenSchema)