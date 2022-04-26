const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/cowinController")
const openWeather = require("../controllers/openWeather")
const imgfilp = require("../controllers/imgfilp")


router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getDistrictId", CowinController.getDistrictId)
router.post("/cowin/getOtp", CowinController.getOtp)
router.get("/getsortcities",openWeather.getcities)
router.post("/createimgflip",imgfilp.createimgflip)



module.exports = router;