var express = require("express");
var mongoose = require("mongoose");
var logger = require("morgan");
var path = require("path");
var routes = require("./routes");


// db models
//var db = require("./models"); 
// application port (http://localhost:PORT)
var PORT = process.env.PORT || 4000;

//initialize express
const app = express();

// connect to the Mongo DB
var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/google-books-app";
mongoose.connect(MONGODB_URI, { useNewUrlParser: true });

//use morgan logger for logging requests
//app.use(logger("dev")); 
//Parse request body as JSON
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Make a public a static folder
app.use(express.static(path.join(__dirname, 'public')));

// ------------------------------
// ROUTES
// ------------------------------

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
       app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);
  
//routes
//console.log("server.js..."); 
app.use("/api/books", require("./routes/api/GoogleBooks"));

// Start the server
app.listen(PORT, function(){
    console.log("Google Books app running on port: " + PORT + "!");
}); 


