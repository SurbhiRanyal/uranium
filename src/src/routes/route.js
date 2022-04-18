const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newAuthor", authorController.newAuthor )
router.get("/getAuthorsData", authorController.getAuthorsData )
router.get("/AuthorDetails", bookController.AuthorDetails)

router.post("/newBook", bookController.newBook  )
router.get("/getBookData", bookController.getBooksData )


router.post("/newPublisher", publisherController.newPublisher )
router.get("/getPublisherData", publisherController.getPublisherData )





module.exports = router;