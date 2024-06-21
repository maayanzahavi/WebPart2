const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Comment = new Schema({
    user: {
        type: Schema.Types.ObjectId, 
        ref: User,
        require: true
    },
    text: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Comment', Comment);