var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    author: String,
    image: String,
    releaseDate: String
 });

//create the Book model from the schema
var Book = mongoose.model('Book', BookSchema);

//exporting Book from this module
module.exports = Book;