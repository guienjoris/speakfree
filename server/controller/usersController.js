const users = require('../models/usersModel');
const mongoose= require('mongoose');
const Users= mongoose.model('Users',users);
var passport= require('passport');
var bcrypt = require('bcryptjs');




function respond(err,result,res){
    if(err){
        return res.status(500).json({error:err});
    }
    return res.json(result)
}

const usersController= {
    getAll: (req, res) => {  // Récupérer tous les Utilisateurs
        Users.find({}, (err, users) => {
            return respond(err, users, res);
        });
    },
    create: (req, res) => { // Créer un Utilisateur
      bcrypt.hash(req.body.password, 8, function(err, hash) {
        const newUsers = new Users({username: req.body.username, usermail: req.body.usermail, password: hash});

        newUsers.save((err, savedUsers) => {
        return respond(err, savedUsers, res);
        
        });
      });
        
    },
    get: (req, res) => { // Récupérer un Utilisateur
        Users.findById(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
      },
    update: (req, res) => { // Mettre à jour un Utilisateur
        Users.findOneAndUpdate(req.params.id, req.body, (err, users) => {
          return respond(err, users, res);
        });
      },
    delete: (req, res) => { // Supprimer un Utilisateur
        Users.findOneAndDelete(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
      }
}

module.exports= usersController;