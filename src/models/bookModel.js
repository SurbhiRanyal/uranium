const mongoose = require('mongoose');
let ObjectId = mongoose.Schema.Types.ObjectId

const bookSchema = new mongoose.Schema( {
    name: String,
    author:{
        type: ObjectId,
        ref:"myNewAuthor"
    } ,
    price: Number,
    ratings: Number,
    publisher: {
        type: ObjectId,
        ref: "Publisher"
    },
    isHardCover: {
        type: Boolean,
        default: false
    }


}, { timestamps: true });


module.exports = mongoose.model('myNewBook', bookSchema)
