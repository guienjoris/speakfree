const mongoose = require('mongoose');
var passportLocalMongoose = require ('passport-local-mongoose');



var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    usermail:{
        type: String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    
})
var userPlugin= userSchema.plugin(passportLocalMongoose)
module.exports = userPlugin;