const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema( {
    bookName:{
        type: String,
        required: true
    },
    authorname: String,
    category : {
        type: String,
        enum: ["Horror","helipoter"]
    },
    year: Number,
}, {timestamps:true });


module.exports = mongoose.model('Book', bookSchema)  //book 