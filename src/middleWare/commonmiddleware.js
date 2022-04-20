const { append } = require("express/lib/response")

const api = function(req,res,next) {
    let ip = req.ip
    let route = req.originalUrl
    let date = new Date()
    console.log(ip + "   " + route + "   " + date)
    next()

}

module.exports.api = api