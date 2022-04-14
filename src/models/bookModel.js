const mongoose = require('mongoose')

const bookSchema = new mongoose.Schema( {
    name: String, 
    author_Id: {
        type: Number,
        require: true
    }, 
    price: Number,
    rating: Number
    
}, { timestamps: true })


module.exports = mongoose.model('Book', bookSchema) 