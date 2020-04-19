const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const { check, validationResult } = require("express-validator");
const Contacts = require('../models/contacts');
const Users = require('../models/users');
// get api/contacts
// get all contacts 
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

router.post('/',(req,res)=>{
    res.send('add contact')
});

//update contact/:id
router.put('/:id',(req,res)=>{
    res.send('update contact')
});

//delete contact/:id
router.delete('/:id',(req,res)=>{
    res.send('delete contact')
});

module.exports = router;