const AuthorModel= require("../models/authorModel")

const NewAuthor= async function (req, res) {
    let author = req.body
    let authorCreated = await AuthorModel.create(author)
    res.send({data: authorCreated})
}

module.exports.NewAuthor= NewAuthor
