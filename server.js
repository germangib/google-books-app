var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path");
var axios = require("axios"); 

// db models
var db = require("./models"); 
// application port (http://localhost:PORT)
var PORT = process.env.PORT || 4000;

//initialize express
var app = express();

// connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/googleBooksApp";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//use morgan logger for logging requests
app.use(logger("dev")); 
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make a public a static folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------
// ROUTES
// ------------------------------
// GET route for scraping NY Times
// app.use('/app/scrape', require('./routes/scrape-route'));

// Start the server
app.listen(PORT, function(){
    console.log("Google Books app running on port: " + PORT + "!");
}); 


