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

// loads module containing all link and topic controller actions. not defined yet...
var topicsController = require("./controllers/topicsController");
var linksController = require("./controllers/linksController");

// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// allows for put/delete request in html form
app.use(methodOverride('_method'));
app.use("*.json", function(req, res, next){
  req.headers.accept = "application/json";
  next()
});

// routes
app.get("/.:format?", topicsController.index)
app.get("/topics.:format?", topicsController.index)
app.get("/topics/new.:format?", topicsController.new)
app.post("/topics.:format?", topicsController.create)
app.get("/topics/:id.:format?", topicsController.show)
app.delete("/topics/:id.:format?", topicsController.delete)
app.get("/topics/:id/edit", topicsController.edit);
app.put("/topics/:id.:format?", topicsController.update);

//serve to localhost
app.listen(4000, function(){
 console.log("app listening on port 4000");
});
