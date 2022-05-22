const express = require("express")
const router = express.Router();


const urlController = require("../controller/urlController")
const getController = require("../controller/getController")


router.post("/url/shorten", urlController. urlCreate )
router.get("/:urlCode", getController.urlCode)




module.exports = router;