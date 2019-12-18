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
    salt:{
        type:String
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
userSchema.methods.setPassword = function(password){
    this.salt = crypto.randomBytes(16).toString('hex');
    this.hash = crypto.pbkdf2Sync(password,this.salt, 1000, 64, 'sha512').toString('hex');
}
userSchema.methods.validPassword = function(password){
    var hash = crypto.pbkdf2Sync(password, this.salt, 1000, 64, 'sha512').toString('hex');
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
    }, process.env.DB_SECRET); 
};
module.exports = userSchema;