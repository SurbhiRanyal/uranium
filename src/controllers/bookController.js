
const authorModel = require("../models/authorModel")
const bookModel = require("../models/bookModel")
const publisherModel = require("../models/publisherModel")


const newBook = async function (req, res) {
    let book = req.body
    let authorId = book.author
    let publisherid = book.publisher

    if (!authorId) {
      return  res.send({status:false, msg: "Author is must be prsent on the book "})
    }
    let author = await authorModel.findById(authorId)
    if (!author) {
        return  res.send({ msg: "not a valid authorId "})
    }
    if (!publisherid) {
        return  res.send({ msg: "publisher is must be prsent on the book "})
    }
    if (!publisher) {
        return  res.send({ msg: "not a valid publisherId "})
    }
    let bookCreated = await bookModel.create(book)
    res.send({msg: bookCreated})
}

    const getBook = async function (req, res) {
    
    let books = await bookModel.find().populate('author').populate('publisher')
    res.send({data: books})
}

const updatebooks = async function(req,res) {
    let x = await publisherModel.find({name : {$in:['Penguin','HarperCollins'] }}).select({_id:1})
    let y = []

    for (let i=0; i<x.length;i++) {
        let objId = x[i]._id
        y.push(objId)
    }
    let books = await bookModel.updateMany({publisher: {$in: y}},{isHardCover: true})
    res.send({data:books})
}
 let updatebooks2 = async function(req,res) {
    let oldprice = req.body.price
    let newprice = oldprice + 10
    let a = await bookModel.find({rating : {$gt:3.5}}).select({rating:1,_id:0}).update({price:newprice})
    res.send({msg:a})
}

module.exports.newBook = newBook
module.exports.getBook = getBook
module.exports.updatebooks = updatebooks
module.exports.updatebooks2=updatebooks2