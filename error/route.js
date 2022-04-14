const express = require('express');

const router = express.Router();
const bookController = require('../controllers/bookController')

router.post('/createNewAuthor',bookController.createNewAuthor)

module.exports = router;