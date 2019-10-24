// Dependencies
const express = require("express");
// JSON responses
const bodyParser = require("body-parser");
// Mongo object modelling
const mongoose = require("mongoose");
// Makes http calls
const request = require("request");
// Scraper
const cheerio = require("cheerio");

// Models
const db = require("./models");

// Port config for local/Heroku
const PORT = process.env.PORT || process.argv[2] || 8080;

// Initialize Express
const app = express();

// Use for handling form submissions
app.use(bodyParser.urlencoded({ extended: true}));

// Handlebars
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Use to serve the public folder as a static directory
app.use(express.static("public"));

// Controllers
const router = require("./controllers/api.js");
app.use(router);

// Mongo DB connection
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/mongoHeadlines";

// Set mongoose to use JS Promises
mongoose.Promise = Promise;

// Connect to Mongo DB
mongoose.connect(MONGODB_URI);

// Start server
app.listen(PORT, function() {
    console.log(`This application is running on port: ${PORT}`);
});