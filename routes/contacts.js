const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");
const Contacts = require('../models/contacts');
const Users = require('../models/users');
// get api/contacts
// get all contacts cd
// access public

router.get('/',auth,async(req,res)=>{
    try {
        const contacts = await Contacts.find({user: req.user.id}).sort({date:-1});
        res.json(contacts);

    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'server error'});
    }
    //res.send('get all contacts')
});

//add new contact

router.post('/',[auth,[
    check('name','name is requierd').not().isEmpty()
]],async(req,res)=>{
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const {name,email,phone,type} = req.body;
    try {
      const newContact = new Contacts({
          name,email,phone,type, user:req.user.id
      }) 
      
      const contact = await newContact.save()
      res.json(contact)
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'server error'});  
    }
    //res.send('add contact')
});

//update contact/:id
router.put('/:id',auth,async(req,res)=>{
    const {name,email,phone,type} = req.body;
    const contactField ={};
    if(name) contactField.name = name;
    if(email) contactField.email = email;
    if(phone) contactField.phone = phone;
    if(type) contactField.type = type;

    try {
        let contact = await Contacts.findById(req.params.id)
        if(!contact) returnre.status(404).json({msg:"Contact Not Found"})
        //check user owns contact
        if (contact.user.toString()!== req.user.id){
            return res.status(401).json({msg:"Not Authorized!!"})
        }

        contact = await Contacts.findByIdAndUpdate(req.params.id,
            {$set: contactField},{new:true})
            res.json(contact);//updated contact
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'server error'});
    }
    //res.send('update contact')
});

//delete contact/:id
router.delete('/:id',auth,async(req,res)=>{

    try {
        let contact = await Contacts.findById(req.params.id)
        if(!contact) returnre.status(404).json({msg:"Contact Not Found"})
        //check user owns contact
        if (contact.user.toString()!== req.user.id){
            return res.status(401).json({msg:"Not Authorized!!"})
        }

        await Contacts.findByIdAndRemove(req.params.id)
            res.json({msg:"contact removed"});//updated contact
    } catch (err) {
        console.error(err.message);
        res.status(500).send({msg:'server error'});
    }
    //res.send('delete contact')
});

module.exports = router;