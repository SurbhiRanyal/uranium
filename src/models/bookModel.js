const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{type: String,require: true},
    authorName: String, 
    year:{type:String, default:2021},
    isPublished: Boolean,
    prices: {indianPrice: Number,europePrice: Number},
    totalpages:Number,
    stockavailable:Boolean,
    tag:{type:String, enum:["Drama","cartoon","love","science","Technology"]},
}, { timestamps: true });


module.exports = mongoose.model('NewBook', bookSchema) 

