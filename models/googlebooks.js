// Google Books schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema; 

var GoogleBooksSchema = new Schema ({
    apiId: { 
        type: String,
        required: true
    },

    title: {
        type: String,
        required: true
    },

    authors: {
        type: Array,
        required: true
    },

    description: {
        type: String
    },

    image: {
        type: String
    }, 

    date: { 
        type: Date,
        default: Date.now
    },

    link: {
        type: String,
        required: true
    }
});

var GoogleBooks = mongoose.model("GoogleBooks", GoogleBooksSchema);

module.exports = GoogleBooks; 