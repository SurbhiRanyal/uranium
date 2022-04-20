const mongoose = require('mongoose')
const objectId = mongoose.Schema.Types.ObjectId
const developerScheme = new mongoose.Schema({
    name : String,
    gender:{
        type:String,
        enum: ["Male","Female","Other"]
    },
    percentage:Number,
    batch:{
        type:objectId,
        ref:"batch",
    }
}, { timestamps: true });


module.exports = mongoose.model('developer', developerScheme)