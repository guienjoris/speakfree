const postsController = require('../controller/postsController'); // Import du contrôleur
const authController = require('../controller/authentication')
var dotenv = require('dotenv').config({path: './private.env'});

var jwt = require('express-jwt');
var auth = jwt({
  secret: process.env.DB_SECRET,
  userProperty: 'payload'
});
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

  app.use((req, res) => { // Middleware pour capturer une requête qui ne match aucune des routes définies plus tôt
    res.status(404).json({url: req.originalUrl, error: ' not found'});
  });
};