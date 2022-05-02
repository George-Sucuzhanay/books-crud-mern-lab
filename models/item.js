const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const Book = new Schema(
    {
        title: String,
        author: String,
        year: String,
        genres: [String],
        ISBN: String,
        imageLink: String
    },
    {timestamps: true}
)

// const Book = mongoose.model("Book", bookSchema)
module.exports = mongoose.model("books", Book)