const mongoose = require('mongoose')
const Schema = mongoose.Schema

// require('mongoose-currency').loadType(mongoose)
// const Currency = mongoose.Types.Currency

const commentSchema = new Schema({
    rating: {
        type: Number,
        min: 1,
        max: 5,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})

const dishSchema = new Schema({
    name: {
        type: String,
        require: true,
        unique: true
    },
    description: {
        type: String,
        require: true
    },
    image: {
        type: String,
        require: true
    },
    category: {
        type: String,
        require: true
    },
    label: {
        type: String,
        default: ''
    },
    price: {
        type: String,
        required: true,
        min: 0
    },
    feature: {
        type: Boolean,
        default: false
    },
    comments: [commentSchema]
}, {
    timestamps: true
})

var Dishes = mongoose.model('Dish', dishSchema)
module.exports = Dishes