const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createNewAuthor= async function (req, res) {
    let reqAuthor= req.body;

    let savedData= await authorModel.create(reqAuthor)
    res.send({msg: savedData})
}

const createNewBook= async function (req, res) {
    let reqBook= req.body;

    let saved= await bookModel.create(reqBook)
    res.send({msg: saved})
}

const allBooks =async function(req,res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id}).select({name:1})
}




module.exports.createNewAuthor= createNewAuthor
module.exports.createNewBook= createNewBook

//module.exports.getBooksData= getBooksData
//module.exports.updateBooks= updateBooks
//module.exports.deleteBooks= deleteBooks
