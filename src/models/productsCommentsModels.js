const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const productsCommentsSchema = new Schema({
    idComments: {
        type: 'string',
        required: true
    },
    idProducts: {
        type: 'string',
        required: true
    }

});

const ProductsComments = mongoose.model('ProductsComments', productsCommentsSchema)

module.exports = ProductsComments;