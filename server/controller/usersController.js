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
    login: (req,res) =>{ //login
      // Users.find({username:req.body.username , password: bcrypt.hash(req.body.password,8,(err,hash)=>{
      //   var checkpwd=bcrypt.compareSync(Users.password,hash)
      //   if(checkpwd === true){
      //     console.log(`${req.body.username} authentifié`)
      //     return respond(err,users,res)
      //   }else{
      //     return respond(err)
      //   }

      // })})
      Users.find({username: req.body.username},(err,users)=>{
        return respond(err,users,res)
      })
    },
    get: (req, res) => { // Récupérer un Utilisateur
        Users.findById(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
      },
    update: (req, res) => { // Mettre à jour un Utilisateur
      if(req.session.passport.user === "Admin"){

        Users.findOneAndUpdate(req.params.id, req.body, (err, users) => {
          return respond(err, users, res);
        });
      }
      },
    delete: (req, res) => { // Supprimer un Utilisateur
      if(req.session.passport.user === "Admin"){
        Users.findOneAndDelete(req.params.id, (err, users) => {
          return respond(err, users, res);
        });
        }else{
          res.redirect('/')
        }
      }
}

module.exports= usersController;