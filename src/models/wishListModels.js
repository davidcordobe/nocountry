const mongoose  = require("mongoose");
const { Schema } = require('mongoose');

const wishListSchema = new Schema({
    idProducts: {
        type: 'string',
        required: true
    },
    idWishes: {
        type: 'string',
        required: true
    },
    status: {
        type: 'string',
        default: 'active'
    }

});

const WishList = mongoose.model('wishList', wishListSchema)

module.exports = WishList;