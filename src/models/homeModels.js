const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const homeSchema = new Schema({
    ciudad:{
        type: 'string',
        required: true
    },
    estado: {
        type: 'string',
        required: true
    },
    calle: {
        type: 'string',
        required: true
    },
    numero: {
        type: 'string',
        required: true
    },
    codigoPostal: {
        type: 'string',
        required: true
    },
    referencia: {
        type: 'string',
        required: true
    },
    idUser: {
        type: 'string',
        default: 'active'
    },
    status: {
        type: 'string',
        default: 'active'
    }
});

const Home = mongoose.model('home', homeSchema)

module.exports = Home;