const express = require('express');

const router = express.Router();
const bookController = require('../controllers/bookController')

router.post('/createNewAuthor',bookController.createNewAuthor)
router.post('/createNewBook',bookController.createNewBook)
router.get('/allBooks',bookController.allBooks)
router.get('/updatedBookPrice',bookController.updatedBookPrice)
router.get('/authorsName',bookController. authorsName)





module.exports = router;