const user = require('../models/usersModel');
const mongoose= require('mongoose');
const User= mongoose.model('Users',user);
var passport= require('passport');
const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
function respond(err,result,res){
  if(err){
      return res.status(500).json({error:err});
  }
  return res.json(result)
}

module.exports.register = function(req, res) {
  var testRegex = regex.test(req.body.usermail)
  var user = new User();
  if(testRegex === true){
  user.username = req.body.username;
  user.usermail = req.body.usermail;

  user.hash = user.setPassword(req.body.password);

  user.save(function(err) {
    var token;
    token = user.generateJwt();
    res.status(200);
    res.json({
      "token" : token
    });
  });
}
};
module.exports.login = function(req, res) {

  passport.authenticate('local', function(err, user, info){
    var token;

    // If Passport throws/catches an error
    if (err) {
      res.status(404).json(err);
      return;
    }

    // If a user is found
    if(user){
      token = user.generateJwt();
      res.status(200);
      res.json({
        "token" : token
      });
    } else {
      // If user is not found
      res.status(401).json(info);
    }
  })(req, res);

};
module.exports.profileRead = function(req, res) {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
    // Otherwise continue
    User
      .findById(req.payload._id)
      .exec(function(err, user) {
        res.status(200).json(user);
      });
  }
};
module.exports.admin = function(req,res){
  if (!req.payload._id) {
    res.status(401).json({
      "message" : "UnauthorizedError: private profile"
    });
  } else {
  User
    .findById(req.payload._id)
    .exec(function(err, user) {
      if(user.isAdmin === true){
      res.status(200).json(user);
      }else{
        res.status(400).json({
          "message":"Forbidden Access"
        })
      }
    });
    }
  }
  module.exports.updateAdmin = function(req,res){
    User.findOneAndUpdate({_id :req.params.id},{$set:{isAdmin:req.body.validate}},(err,user)=>{
      return respond(err,user,res);
    })
  }
  module.exports.getAll = function(req,res){
   // Récupérer tous les Users
      User.find({}, (err, users) => {
          return respond(err, users, res);
      });
  }
  module.exports.delete = function(req,res){
    User.findOneAndDelete(req.params.id, (err, users) => {
      return respond(err, users, res);
    });
  }
  

