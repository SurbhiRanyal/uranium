const batchModel = require("../models/batchModel")
const developersModel= require("../models/developersModel")

const createdeveloper= async function (req, res) {
    let developer = req.body
    let developerCreated = await developersModel.create(developer)
    res.send({data: developerCreated})
}

const scholarshipDevelopers = async function(req,res) {
    let scholar = await developersModel.find({percentage:{ $gte : 70}})
    res.send({msg: scholar})
}

const developer = async function (req,res) {
    let percent = req.query.percentage
    let program = req.query.program
    let reqBatch = await batchModel.find({ name: program}). select({_id:1})
    let result = await developersModel.find({$and: [{batch:{$in:reqBatch}} ,{percentage:{$gte:percent}}]}).populate('batch')
    res.send({data:result})
}
module.exports.createdeveloper= createdeveloper
module.exports.scholarshipDevelopers = scholarshipDevelopers
module.exports.developer = developer