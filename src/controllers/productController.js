const productModel = require("../models/productModel")

const createProduct = async function(req,res) {
    let productDetails = req.body
    let productcreated = await productModel.create(productDetails)
    res.send({status: true, msg: productcreated})
}

    module.exports.createProduct = createProduct