const postsController = require('../controller/postsController'); // Import du contrôleur
const authController = require('../controller/authentication');
const contactController = require('../controller/contactController');
var dotenv = require('dotenv').config({path: './private.env'});
var multer = require ('multer');
const mongoose= require('mongoose');
const user = require('../models/usersModel');
const User= mongoose.model('Users',user);



var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.DB_SECRET,
  userProperty: 'payload'
});
var storage = multer.diskStorage({
  destination: function(req, file, cb) {
  cb(null, 'uploads');
  },
  filename: function(req, file, cb) {
  cb(null, file.originalname);
  }
});
var upload = multer({ storage: storage });

function respond(err,result,res){
  if(err){
      return res.status(500).json({error:err});
  }
  return res.json(result)
}
module.exports = (app) => {
    //Route pour les posts
    app.route('/posts').get(postsController.getAll);
    app.route('/posts').post(postsController.create);
    app.route('/validationposts').get(postsController.getAllToValidate);
    app.route('/postsvalide').get(postsController.getAllValidate);
    app.route('/posts/:id').get(postsController.get);
    app.route('/postsupdate/:id').post(postsController.update);
    app.route('/posts/:id').delete(postsController.delete);
    //Route pour les Users
    app.route('/register').post(authController.register);
    app.route('/login').post(authController.login);
    app.route('/profile').get(authController.profileRead);
    app.route('/admin');
    app.route('/adminusers').get(authController.getAll);
    app.route('/users/:id').delete(authController.delete);
    app.route('/users/:id').post(authController.updateAdmin);
    app.route('/uploads/:id').post( upload.single('avatar'), function (req, res) {
      
      console.log(req.file)
    if (!req.file) {
      console.log("No file is available!");
      return res.send({
        success: false
      });
    } else {
      User.findOneAndUpdate({_id: req.params.id},{$set:{avatar:req.file.originalname}},(err,user)=>{
        console.log(user)
        
        })
      console.log('File is available!');
      return res.send({
        success: true
      })
    }
  })
    //Route pour contact
    app.route('/contact').get(contactController.getAll);
    app.route('/contact').post(contactController.createContact);
    app.route('/contact/:id').delete(contactController.delete)

  app.use((req, res) => { // Middleware pour capturer une requête qui ne match aucune des routes définies plus tôt
    res.status(404).json({url: req.originalUrl, error: ' not found'});
  });
};