const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const newBook = async function (req, res) {
    let data = req.body
    let authorValidation = await authorModel.findById({ _id: data.author })
    let publisherValidation = await publisherModel.findById({ _id: data.Publisher })
    if (authorValidation) {
        if (publisherValidation) {
            let Data = await bookModel.create(data)
            res.send({ msg: Data })
        } else {
            res.send({ msg: "Publisher is not present" })
        }
    } else {
        res.send({ msg: "author is not present" })
    }
}
const getBooksData = async function (req, res) {
    let books = await bookModel.find()
    res.send({ data: books })
}


const AuthorDetails = async function (req, res) {
    let allBooks = await bookModel.find().populate({ Author, Publisher });
    res.send({ data: allBooks })

}

module.exports.newBook = newBook
module.exports.getBooksData = getBooksData
module.exports.AuthorDetails = AuthorDetails
