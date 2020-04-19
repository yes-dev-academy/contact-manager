const express = require("express");
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config =  require('config');
const { check, validationResult } = require("express-validator");
const User = require("../models/users");

// post api/users
// register
// access

router.post(
  "/",
  [
    check("name", "Name is requird").not().isEmpty(),
    check("email", "Please enter a valid email").isEmail(),
    check(
      "password",
      "Please enter a password  with 6 or more charcters"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()})
    }
    const{name,email,password} = req.body;
    try {
        let user = await User.findOne({email})
        if (user){
            return res.status(400).json({msg:"user existed!"})
        }
    user = new User({
        name,
        email,
        password
    })
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(password,salt);
        await user.save();
        const payload = {
          user :{
            id:user.id
          }
        }
        jwt.sign(payload,config.get('jwtSecret'),{
          expiresIn:360000,
        },(err,token)=>{
          if(err) throw err;
          res.json({token});
        });
        //res.send('user saved')

    } catch (err) {
        console.error(err.message);
        res.status(500).send('server error')
    }
    //res.send("passed successfuly")
    //res.send('Register a user')
    //res.send(req.body);
  }
);

module.exports = router;
