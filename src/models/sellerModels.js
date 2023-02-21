const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const sellerSchema = new Schema({
    name: {
        type: 'string',
        required: true
    },
    email: {
        type: 'string',
        required: true
    },
    password: {
        type: 'string',
        required: true
    },
    role: {
        type: 'string',
        default: 'role'
    },
    status: {
        type: 'string',
        default: 'active'
    }

});

const Seller = mongoose.model('seller', sellerSchema)

module.exports = Seller;