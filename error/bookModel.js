const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema( {
    bookName: String, 
    authorId: {
        type: Number,
        require: true
    }, 
    Price: Number,
    rating: Number
    
}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema) 