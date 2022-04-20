const batchModel= require("../models/batchModel")

const batchScheme= async function (req, res) {
    let batchCont = req.body
    let batchCreated = await batchModel.create(batchCont)
    res.send({data: batchCreated})
}

module.exports.createbatch= batchScheme