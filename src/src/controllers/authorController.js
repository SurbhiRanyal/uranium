const AuthorModel= require("../models/authorModel")

const newAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

const getAuthorsData= async function (req, res) {
     let authors = await AuthorModel.find()
     res.send({data: authors})
 }

module.exports.newAuthor= newAuthor
module.exports.getAuthorsData= getAuthorsData