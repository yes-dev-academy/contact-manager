const express = require('express');
const router = express.Router();

// post api/users
// register 
// access

router.post('/',(req,res)=>{
    res.send('Register a user')
});

module.exports = router;