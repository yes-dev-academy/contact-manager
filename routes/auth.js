const express = require('express');
const router = express.Router();

// get api/auth
//  logged in user
// 

router.get('/',(req,res)=>{
    res.send('get logged in user')
});

// post api/auth
//  logged in user
// 
router.post('/',(req,res)=>{
    res.send('login usrs')
});

module.exports = router;