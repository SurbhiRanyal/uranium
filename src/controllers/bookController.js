const bookModel= require("../models/bookModel")

const createbook1= async function (req, res) {
    let data= req.body
    let savedData= await bookModel.create(data)
    res.send({msg: savedData})
}


module.exports.createbook= createbook1
