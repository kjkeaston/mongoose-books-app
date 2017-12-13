var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BookSchema = new Schema({
    title: String,
    // you should fill the rest of this in
    author: String,
    image: String,
    releaseDate: String
 });

//create the Book model from the schema
var Book = mongoose.model('Book', BookSchema);


//exporting Book from this module
var Book = mongoose.model('Book', BookSchema);

module.exports = Book;