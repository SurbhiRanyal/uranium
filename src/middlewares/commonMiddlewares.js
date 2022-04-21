const orderModel = require("../models/orderModel")
const userModel = require("../models/userModel")

const mid1 = (req, res, next) => {
  await userModel.updateMany({}, { $set: {isFreeAppUser: false}},{upsert:true})
  await orderModel.updateMany({}, { $set: {isFreeAppUser: false}},{upsert:true})

    if(req.headers.hasOwnProperty('isfreeappuser')){
      req.headers.isFreeAppUser = req.headers.isfreeappuser;
      next();
    }else{
      res.send({msg: 'The request is missing a mandatory header.', status: false});
    }
  }
  
  module.exports.mid1 = mid1;