const express = require('express');
const router = express.Router();
const Posts = require('../models/postsModel');
const passport= require('passport');

router.get('/admin',(req, res) =>{
    
    if (!req.isAuthenticated())
    {
        res.send('/forbidden');
    }
    else if (req.session.passport.user !== "Admin")
    {
        res.send('/forbidden');
    }
    else{
        Posts.find((err, posts) =>{
            if(err){
                res.send(err)
            }
            if(posts.status === false){
                posts
                .then(result => res.json(result))
                .catch(err => res.json(err))
            }
            })

            .catch(function(error) {
                console.log(error);
        });
    }
})

router.post('/delete',(req,res)=>{
    Posts.findOneAndDelete(req.params.id)
    .then(result => res.json(result))
        .catch(err => res.json(err));
})

module.exports = router;