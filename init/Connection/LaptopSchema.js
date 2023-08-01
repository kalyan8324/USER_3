'use strict'
const mongoose = require('mongoose')

const laptopsList = new mongoose.Schema({
    brand: {
        type: String,
        require: true,
        trime: true
    },
    model: {
        type: String,
        require: true,
        trime: true
    },
    processor: {
        type: String,
        require: true,
        trime: true
    },
    ram: {
        type: Number,
        require: true,
        trime: true
    },
    storage: {
        type: Number,
        require: true,
        trime: true
    },
    graphics: {
        type: String,
        require: true,
        trime: true
    },
    display: {
        type: Number,
        require: true
    },
    price: {
        type: Number,
        require: true
    },
    quntity: {
        type: Number,
        default: 1
    }
});
// create laptop model
module.exports = mongoose.model('Laptop', laptopsList);
