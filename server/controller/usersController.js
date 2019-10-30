const users = require('../models/usersModel');
const mongoose= require('mongoose');
const Users= mongoose.model('Users',users);
var passport= require('passport');
var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(Users.authenticate())); //passport pour la gestion de l'authentification
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());

function respond(err,result,res){
    if(err){
        return res.status(500).json({error:err});
    }
    return res.json(result)
}

const usersController= {
    getAll: (req, res) => {  // Récupérer tous les Posts
        Users.find({}, (err, users) => {
            return respond(err, users, res);
        });
    },
    create: (req, res) => { // Créer un Post
        const newUsers = new Users(req.body);
        if(newUsers != users){
        newUsers.save((err, savedUsers) => {
        return respond(err, savedUsers, res);
        
        });
      }
    },
    get: (req, res) => { // Récupérer un Post
        Users.findById(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
      },
    update: (req, res) => { // Mettre à jour un Post
        Users.findByIdAndUpdate(req.params.id, req.body, (err, users) => {
          return respond(err, users, res);
        });
      },
    delete: (req, res) => { // Supprimer un Post
        Users.findByIdAndRemove(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
      }
}

module.exports= usersController;