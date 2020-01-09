const posts = require('../models/postsModel');
const mongoose= require('mongoose');
const Posts= mongoose.model('Posts',posts);
function respond(err,result,res){
    if(err){
        return res.status(500).json({error:err});
    }
    return res.json(result)
}

const postsController= {
    getAll: (req, res) => {  // Récupérer tous les Posts
        Posts.find({}, (err, posts) => {
            return respond(err, posts, res);
        });
    },
    getAllToValidate: (req,res)=>{
        Posts.find({validation:false},(err,posts)=>{
            return respond(err,posts,res);
        }).limit(10)
    },
    getAllValidate: (req,res)=>{
      Posts.find({validation:true},(err,posts)=>{
          return respond(err,posts,res);
      }).limit(10)
  },
    create: (req, res) => { // Créer un Post
        const newPosts = new Posts({titlepost:req.body.titlepost,post:req.body.post,username:req.body.username, userId: req.body.userId});
        if(req.body.post.length > 10){
        newPosts.save((err, savedPosts) => {
          return respond(err, savedPosts, res);
        });
        }else{
          console.log(" Longueur du post inférieur à 10");
          return respond(err)
        }
      },
    get: (req, res) => { // Récupérer un Post
        Posts.findById(req.params.id, (err, posts) => {
          return respond(err, posts, res);
        });
      },
    update: (req, res) => { // Mettre à jour un Post
        Posts.findOneAndUpdate({_id :req.params.id}, {$set:{validation: req.body.validate}}, (err, posts) => {
          return respond(err, posts, res);
        });
      },
    delete: (req, res) => { // Supprimer un Post
        Posts.findOneAndDelete({_id:req.params.id}, (err, posts) => {
          if(res.status(200)){
          return respond(err, posts, res);
          }else{
            return res.send(err)
          }
        });
      },
    addAnswer: (req ,res)=>{
      Posts.findOneAndUpdate({_id: req.params.id}, {$push:{comments:[{userId: req.body.userId,username: req.body.username, avatar: req.body.avatar, answerInput: req.body.answerInput}]}},(err,answers)=>{
        return respond(err, answers, res)
      })
    },
}

module.exports= postsController;