const contact = require('../models/contactModel')
const mongoose = require('mongoose')
const Contact = mongoose.model('contact',contact)

function respond(err,result,res){
    if(err){
        return res.status(500).json({error:err});
    }
    return res.json(result)
  }

module.exports.createContact= function(req,res){
    let contact = new Contact();

    contact.usermail = req.body.usermail;
    contact.message = req.body.message;

    contact.save(function(err){
        console.log(contact);
        res.status(200);
        if(err){
            console.log(err)
        }
    })
}
module.exports.getAll= function(req,res){
    Contact.find({}, (err,contacts)=>{
        return respond(err,contacts,res)
    })
}
module.exports.delete= function(req,res){
    Contact.findByIdAndDelete(req.params.id,(err,contacts)=>{
        return respond(err,contacts,res)
    })
}
    
