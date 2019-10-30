
var dotenv = require('dotenv').config({path: './private.env'});
var urlmongo = process.env.DB_HOST;
var passport = require('passport');
var session = require('express-session');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes/index');

const app = express();
const port = process.env.PORT || 3000;


app.use(passport.initialize());
app.use(passport.session());


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