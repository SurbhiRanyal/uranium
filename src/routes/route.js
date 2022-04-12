const express = require('express');
const router = express.Router();
const userModel= require("../models/userModel.js")
const bookController= require("../controllers/bookController")
const userController= require("../controllers/userController")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/createUser", userController.createUser  )

router.get("/getUserData", userController.getUsersData  )


router.post("/createBook", bookController.createBook  )

router.get("/getBookData", bookController.getBookData)

module.exports = router;