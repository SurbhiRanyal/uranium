const jwt = require("jsonwebtoken");

const validateToken = function(req,res,next) {
    let token = req.headers["x-auth-token"];
    //console.log(req.headers)
    if(!token) {
        return res.send({status: false, msg: "token must be present"});
    }
    // token = req.header["x-Auth-token"];
   // console.log(token);
    
    let decodedToken = jwt.verify(token, "functionup-uranium");
    req.name = decodedToken
    if(!decodedToken) {
        return res.send({status: false, msg: "token is invalid"});
    }
    next()
}

module.exports.validateToken = validateToken

