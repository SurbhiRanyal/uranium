const orderModel = require("../models/orderModel")

const createOrder = async function(req,res) {
    let orderDetail = req.body
    let headers = req.headers
    let apptype = headers["isFreeAppUser"]
    if(!apptype) {
        let apptype = headers["isfreeappuser"]
        if(!apptype) {
         return   res.send({status: false, msg:"header is missing"})
        }
        let userId = orderDetail.userId
        let user = await userModel.findById(userId)
        if(!user) {
          return   res.send({status:false, msg:"user dons't exist"})
        }
        let productId = productDetail.productId
        let product = await productModel.findById(productId)
        if(!product) {
             res.send({status:false, msg:"product don't exist"})
        }
        let apptypeFree = Boolean(apptype)

        if(!apptypeFree && user.balance >= product.price) {
            user.balance = user.balance - product.price 
            await user.save()

            orderDetail.amount = product.price
            orderDetail.isFreeAppUser = false
            let orderCreated = await orderModel.create(orderDetail)
            return res.send({status: true, msg: orderCreated})
    } else if(!apptypeFree) {
        return res.send({status: false, msg: "user doesn't have suffi bal"})
    } else  {
        orderDetail.amount = 0
        orderDetail.isFreeAppUser = true
        let orderCreated = await orderModel.create(orderDetail)
        res.send({status: true, msg: orderCreated})

}
    }
}


module.exports.createOrder = createOrder