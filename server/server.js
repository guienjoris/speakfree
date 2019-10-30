
var dotenv = require('dotenv').config({path: './private.env'});
var urlmongo = process.env.DB_HOST;
var passport = require('passport');
var session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const users = require('./models/usersModel');
const Users= mongoose.model('Users',users);
const app = express();
const port = process.env.PORT || 3000;

app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

var LocalStrategy = require('passport-local').Strategy;
app.use(session({ 
    secret: 'keyboard cat', 
    resave: false, 
    saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(Users.authenticate())); //passport pour la gestion de l'authentification
passport.serializeUser(Users.serializeUser());
passport.deserializeUser(Users.deserializeUser());


mongoose.Promise = global.Promise;
mongoose.connect(urlmongo, {useNewUrlParser : true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{
    console.log("Connecting to MongoDB Atlas")
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);