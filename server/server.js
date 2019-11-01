
var dotenv = require('dotenv').config({path: './private.env'});
var urlmongo = process.env.DB_HOST;
var passport = require('passport');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');
const user = require('./models/usersModel');
const User= mongoose.model('User',user);
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
app.all('*', function(req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'DELETE, HEAD, GET, OPTIONS, POST, PUT');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
    });
app.use(cors());
var LocalStrategy = require('passport-local').Strategy;
app.use(passport.initialize());
passport.use(new LocalStrategy({
    usernameField: 'usermail'
},
function(username, password, done) {
User.findOne({ usermail: username }, function (err, user) {
    if (err) { return done(err); }
    // Return if user not found in database
    if (!user) {
    return done(null, false, {
        message: 'User not found'
    });
    }
    // Return if password is wrong
    if (!user.validPassword(password)) {
    return done(null, false, {
        message: 'Password is wrong'
    });
    }
    // If credentials are correct, return the user object
    return done(null, user);
});
}
));
// error handlers
// Catch unauthorised errors
app.use(function (err, req, res, next) {
    if (err.name === 'UnauthorizedError') {
    res.status(401);
    res.json({"message" : err.name + ": " + err.message});
    }
});


mongoose.Promise = global.Promise;
mongoose.connect(urlmongo, {useNewUrlParser : true, useUnifiedTopology: true});

var db = mongoose.connection;
db.on('error', console.error.bind(console,'connection error'));
db.once('open', ()=>{
    console.log(`Connecting to MongoDB Atlas on port: ${port}`)
})

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

routes(app);
app.listen(port);