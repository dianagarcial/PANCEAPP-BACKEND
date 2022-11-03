require('dotenv').config();
const { dbConnection } = require('./database/dbConfig');
const Server = require('./models/Server');
const server = new Server();
dbConnection();
server.listen();