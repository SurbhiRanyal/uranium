const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const orderController = require('../controllers/orderController')
const productController = require('../controllers/productController');
const commonMiddleware = require('../middlewares/commonMiddlewares')
const { route } = require('express/lib/application');

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})



router.post('/product',productController.createProduct)
router.post('/users',userController.createUser)
router.post('/order',orderController.createOrder)
router.get('/mid1',mid1,commonMiddleware.mid1)
router.post("/orders", commonMiddleware.validateHeader, orderController.createOrder)




module.exports = router;
