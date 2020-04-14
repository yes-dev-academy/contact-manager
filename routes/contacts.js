const express = require('express');
const router = express.Router();

// get api/contacts
// get all contacts 
// access public

router.get('/',(req,res)=>{
    res.send('get all contacts')
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