const mongoose = require('mongoose');
const { stringify } = require('querystring');
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    content: {
        type: String,
        require: true
    },
    date: {
        type: Date,
        default: Date.now
    }
})
module.exports = mongoose.model('food', foodSchema, 'food');