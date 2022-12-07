const mongoose = require('mongoose')

const MenuSchema = new mongoose.Schema({
    food: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    userId: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Menu', MenuSchema)