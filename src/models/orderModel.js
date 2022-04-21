const mongoose = require('mongoose');
let objectId = mongoose.Schema.Types.ObjectId

const orderScheme = new mongoose.Schema( {
    userId: objectId,
	productId: objectId,
	amount: Number,
	isFreeAppUser:Boolean, 
	date: String
},{timestamps:true})

module.exports = mongoose.model('order', orderScheme)
