//express
var express = require('express');
var app = express();

//connecting to database
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project_3_db');

// loads dependency for middleware for paramters
var bodyParser = require('body-parser');

// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override');

//hbs
var hbs = require('hbs');
// sets view engine to handlebars
app.set('view engine', 'hbs');
// connects assets like stylesheets

//public folder
app.use(express.static(__dirname + '/public'));

//serve to localhost
app.listen(4000, function(){
 console.log("app listening on port 4000");
});

// loads module containing all link and topic controller actions. not defined yet...
var topicsController = require("./controllers/topicsController");
var linksController = require("./controllers/linksController");

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// allows for put/delete request in html form
app.use(methodOverride('_method'));

// routes
app.get("/", topicsController.index)
app.get("/topics", topicsController.index)
app.get("/topics/new", topicsController.new)
app.post("/topics", topicsController.create)
app.get("/topics/:id", topicsController.show)
app.get("/tppics/:id/edit", topicsController.edit)
app.delete("/topics/:id", topicsController.delete)
