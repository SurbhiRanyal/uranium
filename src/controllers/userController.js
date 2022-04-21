const orderModel = require('../models/orderModel')
const userModel = require('../models/userModel')


const createUser = async function(req,res) {
    let requestBody = req.body
    let headers = req.headers
    let apptype = headers["isFreeAppUser"]
    if(!apptype) {
        let apptype = headers["isfreeappuser"]
        if(!apptype) {
         return   res.send({status: false, msg:"header is missing"})
        }
        let userCreated = await userModel.create(userDetail)
        res.send({status: true, msg: {userCreated}})
    }
}
    

module.exports.createUser= createUser