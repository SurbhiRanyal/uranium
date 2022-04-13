const express = require('express');
const router = express.Router();
//const createbook= require("../controllers/bookcontroller")
const createbook1= require("../models/bookModel")

//createBOOK
router.post("/creatbook", async function (req, res){

    const data=  await createbook1.create(req.body)
    res.send({msg: data})
})


//bookList
router.get("/bookList", async function (req, res) {
    const data = await createbook1.find().select({ bookName: 1, authorName: 1, _id: 0})
    res.send({ msg: data })
})

//getBooksInYear
router.post("/getBooksInYear", async function (req, res) {
    const data1=req.body.year

    const data = await createbook1.find({ year: data1})
    res.send({ msg: data })
})

//getParticularBooks
router.post("/getParticularBooks", async function (req, res) {
    const value = req.body;
    const data = await createbook1.find({
        $or: [{ authorName: value.authorName }, { bookName: value.bookName }, { year: value.year },
            {totalpages:value.totalpages},{stockavailable:value.stockavailable}]
    })
    res.send({ msg: data })
})

//getXINRBooks
router.get("/getXINRBooks", async function (req, res) {

    const data = await createbook1.find( {$or:[ {"prices.indianPrice":"500"},{"prices.indianPrice":"100"} ] } )
    res.send({ msg: data })
})

//getRandomBooks
router.get("/getRandomBooks", async function (req, res) {

    let data = await createbook1.find({$and:[{stockavailable:true},{totalpages: {$gt:500}}]})
    res.send({ msg: data })
})

module.exports = router;



