const cors = require('cors');
const express = require('express');

class Server {
    constructor(){
        this.app  = express();
        this.port = process.env.PORT;
        this.Hotel='hotel';
        this.Pedido='pedido';
        this.Plato='plato';
        this.Reserva='reserva';
        this.Restaurante='restaurante';
        this.Usuario='usuario';
        this.middlewares();
        this.routes();
    }
    routes(){
        this.app.use(`/api/${this.Hotel}`, require('../routes/hotel'));
        this.app.use(`/api/${this.Pedido}`, require('../routes/pedido'));
        this.app.use(`/api/${this.Plato}`, require('../routes/plato'));
        this.app.use(`/api/${this.Reserva}`, require('../routes/reserva'));
        this.app.use(`/api/${this.Restaurante}`, require('../routes/restaurante'));
        this.app.use(`/api/${this.Usuario}`, require('../routes/usuario'));
    }
    listen() {this.app.listen( this.port, () => {console.log(`Server running on port ${this.port} `);});}
    
    middlewares(){
    this.app.use( cors() );
    this.app.use( express.json() );
    this.app.use( express.static('public') );
    }
}
module.exports = Server;
