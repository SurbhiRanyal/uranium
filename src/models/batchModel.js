const mongoose = require('mongoose')
const BatchScheme = new mongoose.Schema({
    name : String,
    size:Number,
    program: {
        type:String,
        enum:["Frontened","Backened"]},
}, { timestamps: true });


module.exports = mongoose.model('batch', BatchScheme)