const mongoose = require('mongoose')

const truckSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    coordinates: {
        type: Object,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    state: {
        type: String,
        required: true
    },
    zip: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    cuisine1: {
        type: String,
        required: true
    },
    cuisine2: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Truck', truckSchema)