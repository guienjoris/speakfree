const mongoose = require('mongoose');

var contactSchema = new mongoose.Schema({
    usermail: String,
    message:String,
})

module.exports= contactSchema;