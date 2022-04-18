const express = require('express');
const router = express.Router();

const bookController= require("../controllers/bookController")
const authorController= require("../controllers/authorController")
const publisherController = require("../controllers/publisherController")
const { route } = require('express/lib/application');



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/newAuthor", authorController.NewAuthor )
router.post("/newBook", bookController.newBook  )
router.post("/newPublisher", publisherController.newPublisher )
router.get("/getbook", bookController.getBook  )
router.put("/updatebooks",bookController.updatebooks)
router.put("/updatebooks2", bookController.updatebooks2)

module.exports = router;