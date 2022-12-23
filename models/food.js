const mongoose = require('mongoose')
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('food', foodSchema, 'food');