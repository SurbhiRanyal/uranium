const express = require('express');
const router = express.Router();

const authorController= require("../controllers/authorController")
const publisherController = require('../controllers/publisherController')
const bookController= require("../controllers/bookController");
const developersController = require('../controllers/developersController');
const batchController = require('../controllers/batchController');


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createAuthor", authorController.createAuthor  )

router.post('/createPublisher', publisherController.createPublisher)

router.post("/createBook", bookController.createBook  )

router.get('/get-all-books', bookController.fetchbooks)

router.put('/books', bookController.updateBooks)

router.post('/createdeveloper', developersController.createdeveloper)

router.post('/batches', batchController.createbatch)

router.get('/scholarshipDevelopers',developersController.scholarshipDevelopers)

router.get('/develp',developersController.developer)




module.exports = router;