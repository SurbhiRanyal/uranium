
const authorModel= require("../models/authorModel")

const bookModel= require("../models/bookModel")

const createNewAuthor= async function (req, res) {
    let data= req.body;
    if(data.author_id) {
    let savedData= await authorModel.create(data)
    res.send({msg: savedData})
} else {
    res.send({msg:'author_id must be present'})
}
}
const createNewBook= async function (req, res) {
    let reqBook= req.body;

    let saved= await bookModel.create(reqBook)
    res.send({msg: saved})
}

const allBooks =async function(req,res) {
    const authorDetails = await authorModel.find({author_name: "Chetan Bhagat"})
    const id = authorDetails[0].author_id
    const booksName = await bookModel.find({author_id:id}).select({name:1})
    res.send({msg : booksName})
}

const updatedBookPrice =async function(req,res) {
    const bookDetails = await bookModel.find({name: "Two states"})
    const id = bookDetails[0].author_id
    const authorName = await authorModel.find({author_id:id}).select({author_name:1, _id:0})
    const bookName = bookDetails[0].name
    const updatedPrice = await bookModel.findOneAndUpdate({name: bookName},{new:true}).select({price:1, _id:0})
    res.send({msg : authorName, updatedPrice})
}
const authorsName = async function(req,res) {
    const booksId = await bookModel.find({price: {$gte:50, $lte:100}}).select({author_id:1, _id:0})
    const id = booksId.map( inp =>inp.author_id)

    let temp =[]
    for(let i=0;i<id.length; i++) {
    let x = id[i]
    const author = await authorModel.find({author_id:x}).select({author_name:1,_id:0})
    temp.push(author)
}

const authorName = temp.flat()
 res.send({msg: authorName})
}


module.exports.createNewAuthor= createNewAuthor
module.exports.createNewBook= createNewBook
module.exports.allBooks= allBooks
module.exports. updatedBookPrice = updatedBookPrice
module.exports.authorsName = authorsName



