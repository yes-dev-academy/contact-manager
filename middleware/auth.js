const jwt = require('jsonwebtoken');
const config = require('config');

module.exports = function(req,res,next){
    //get token
    const token = req.header('x-auth-token');

    //check token exist
    if(!token){
        return res.status(401).json({msg:'No token, auth failed'})
    }

    try {
        const decoded = jwt.verify(token,config.get('jwtSecret'));

        req.user = decoded.user;
        next();
    } catch (err) {
        res.status(401).json({msg:'token not valid'})
    }
}