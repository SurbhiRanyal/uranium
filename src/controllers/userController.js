//const res = require("express/lib/response")
const UserModel= require("../models/userModel")

const createUser= async function (req, res) {
    let data= req.body
    let savedData= await UserModel.create(data)
    res.send({msg: savedData})
}

const getUsersData= async function (req, res) {
    let allUsers= await UserModel.find()
    res.send({msg: allUsers})
}

const basicCode = async function(req,res) {
    console.log("Congrats, I am using the Middleware")
    res.send({msg: "This is coming from Postman"})
}

module.exports.createUser= createUser
module.exports.getUsersData= getUsersData
module.exports.basicCode = basicCode