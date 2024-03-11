const mongoose = require('mongoose')
const Schema = mongoose.Schema

// require('mongoose-currency').loadType(mongoose)
// const Currency = mongoose.Types.Currency

const promotionSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
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
    description: {
        type: String,
        required: true
    },
    feature: {
        type: Boolean,
        default: false
    }
})

var Promotions = mongoose.model('Promotion', promotionSchema)
module.exports = Promotions