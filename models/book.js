const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    authors: [{
        type: String,
        required: true
    }],
    description: {
        type: String,
        required: true
    },
    link: {
        type: String,
        trim: true
    },
    image: {
        type: String,
        trim: true,
        required: false
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
