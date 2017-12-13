// server.js
// SERVER-SIDE JAVASCRIPT


/////////////////////////////
//  SETUP and CONFIGURATION
/////////////////////////////

//require express in our app
var express = require('express'),
    bodyParser = require('body-parser');

// generate a new express app and call it 'app'
var app = express();

// serve static files in public
app.use(express.static('public'));

// body parser config to accept our datatypes
app.use(bodyParser.urlencoded({ extended: true }));

var db = require ('./models');


////////////////////
//  ROUTES
///////////////////


// define a root route: localhost:3000/
app.get('/', function (req, res) {
  res.sendFile('views/index.html' , { root : __dirname});
});


app.get('/api/books', function (req, res) {
  // send all books as JSON response
  db.Book.find(function(err, books){
    if (err) {
      console.log("index error: " + err);
      res.sendStatus(500);
    }
    res.json(books);
  });
});

// get one book
app.get('/api/books/:id', function (req, res) {
  db.Book.find({_id: req.params.id}, function(err, books) {
    if (err) {
      res.json(err);
    }
    res.json(books);
  });
});


// create new book
app.post('/api/books', function (req, res) {
  db.Book.create(req.body, function (err, books) {
    if (err) {
      res.json(err);
    }
    res.json(books);
  });
});

// update book
app.put('/api/books/:id', function(req,res){
  db.Book.findByIdAndUpdate(req.params.id, req.body, {new: true}, function (err, books) {
    if (err) {
      res.json(err);
    }
    res.json(books);
  });
});

// delete book
app.delete('/api/books/:id', function (req, res) {
  db.Book.findByIdAndRemove(req.params.id, function (err, books) {
    if (err) {
      res.json(err);
    }
    res.json(books);
  });
});






app.listen(process.env.PORT || 3000, function () {
  console.log('Book app listening at http://localhost:3000/');
});
