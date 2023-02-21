const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const bankSchema = new Schema({
    number: {
        type: Number,
        required: true
    },
    bank: {
        type: 'string',
        required: true
    },
    idSeller: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        default: 'active'
    }

});

const Bank = mongoose.model('bank', bankSchema)

module.exports = Bank;