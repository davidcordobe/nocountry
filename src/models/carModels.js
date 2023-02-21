const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const carSchema = new Schema({
    idUser: {
        type: 'string',
        required: true,
    },
    cantidad: {
        type: Number,
        default: 'active'
    },
    precio: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        default: 'active'
    }

});

const Car = mongoose.model('car', carSchema)

module.exports = Car;