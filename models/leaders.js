const mongoose = require('mongoose')
const Schema = mongoose.Schema

// require('mongoose-currency').loadType(mongoose)
// const Currency = mongoose.Types.Currency

const leaderSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
    },
    designation: {
        type: String
    },
    abbr: {
        type: String,
        required: true
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

const Leaders = mongoose.model('Leader', leaderSchema)
module.exports = Leaders