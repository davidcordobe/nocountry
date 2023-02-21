const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const carProductsSchema = new Schema({
    idCar: {
        type: 'string',
        required: true,
    },
    idProducts: {
        type: 'string',
        required: true
    },
    cantidad: {
        type: 'string',
        required: true
    },
    precioProducts: {
        type: Number,
        required: true
    },
    totalPrecio: {
        type: Number,
        required: true
    }

});

const CarProducts = mongoose.model('carProducts', carProductsSchema)

module.exports = CarProducts;