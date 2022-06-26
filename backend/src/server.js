const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const routes = require('./routes');

const server = express();

mongoose.connect('mongodb+srv://oministack:oministack@cluster0.7gcbg.mongodb.net/oministack8?retryWrites=true&w=majority',{useNewUrlParser: true
});

//GET, POST, PUT, DELETE
server.use(cors());
server.use(express.json());
server.use(routes);

server.listen(3333);

// M - Model, V - View, - C - Controller