const mongoose = require('mongoose');
var passportLocalMongoose = require ('passport-local-mongoose');


const userSchema = new mongoose.Schema({
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
userSchema.plugin(passportLocalMongoose)
module.exports = userSchema;