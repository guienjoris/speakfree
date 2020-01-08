const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    titlepost:{type:String, required:true},
    post:{type: String,required: true},
    username:{type: String},
    userId: {type: String},
    validation:{type:Boolean, default: false},
    date: { type: Date, default: Date.now }
})

module.exports = postSchema;