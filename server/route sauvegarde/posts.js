const express = require('express');
const router = express.Router();
const Posts = require('../models/postsModel');

router.get('/',(req,res)=>{
    Posts.find(posts.status=== true)
    .then(result => res.json(result))
    .catch(err => res.json(err));
})
router.post('/posts',(req,res)=>{
    var date = new Date;
    const post = new Posts ({
        post: req.body.post,
        status: false,
        date: date.getFullYear()
    });
    post
        .save()
        .then(result => res.json(result))
        .catch(err => res.json(err));
});


module.exports = router;