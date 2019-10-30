const postsController = require('../controller/postsController'); // Import du contrôleur
const usersController = require('../controller/usersController');
module.exports = (app) => {
    //Route pour les posts
    app.route('/posts').get(postsController.getAll);
    app.route('/posts').post(postsController.create);
    app.route('/validationposts').get(postsController.getAllToValidate);
    app.route('/postsvalide').get(postsController.getAllValidate);
    app.route('/posts/:id').get(postsController.get);
    app.route('/posts/:id').put(postsController.update);
    app.route('/posts/:id').delete(postsController.delete);
    //Route pour les Users
    app.route('/users').get(usersController.getAll)
    app.route('/users/:id').get(usersController.get);
    app.route('/users/:id').delete(usersController.delete);
    app.route('/register').post(usersController.create);
    app.route('/login').post(usersController.get);


  app.use((req, res) => { // Middleware pour capturer une requête qui ne match aucune des routes définies plus tôt
    res.status(404).json({url: req.originalUrl, error: 'not found'});
  });
};