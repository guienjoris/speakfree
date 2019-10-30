const express = require('express');
const router = express.Router();
const Users = require('../models/usersModel');
var passport = require('passport');

router.get('/register',(req,res) =>{
    res.redirect("/register");
})

router.post('/register',(req,res,next)=>{
    Users.register(new Users({
        username:req.body.username,
        usermail:req.body.usermail
    }),
    req.body.password,(err)=>{
        if(err){
            return res.send('/register',{error:err.message});
        }else{
            res.redirect('/')
        }
    }
    )
})

module.exports = router;
