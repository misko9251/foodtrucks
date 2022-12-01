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
    }
})

module.exports = mongoose.model('Truck', truckSchema)