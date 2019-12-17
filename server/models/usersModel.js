const mongoose = require('mongoose');
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var dotenv = require('dotenv').config({path: './private.env'});




var userSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    usermail:{
        type: String,
        unique: true,
        required:true
    },
    hash:{
        type: String,
    },
    avatar:{
        type:String,
        default: 'default.png'
    },
    isAdmin:{
        type:Boolean,
        default: false, 
    }
})
userSchema.methods.setPassword = (password) =>{
    this.hash = crypto.pbkdf2Sync(password, process.env.DB_SECRET, 1000, 64, 'sha512').toString('hex');
    return this.hash;
}
userSchema.methods.validPassword = (password)=> {
    var hash = crypto.pbkdf2Sync(password, process.env.DB_SECRET, 1000, 64, 'sha512').toString('hex');
    return this.hash === hash;
};
userSchema.methods.generateJwt = function() {
    var expiry = new Date();
    expiry.setDate(expiry.getDate() + 7);
    return jwt.sign({
    _id: this._id,
    usermail: this.usermail,
    username: this.username,
    exp: parseInt(expiry.getTime() / 1000),
    avatar: this.avatar,
    isAdmin: this.isAdmin,
    }, process.env.DB_SECRET); // DO NOT KEEP YOUR SECRET IN THE CODE!
};
module.exports = userSchema;