const mongoose = require('mongoose');
const { stringify } = require('querystring');
const foodSchema = new mongoose.Schema({
    title: {
        type: String,
        require: true
    },
    date: {
        type: String,
        require: true
    }
})
module.exports = mongoose.model('food', foodSchema, 'food');