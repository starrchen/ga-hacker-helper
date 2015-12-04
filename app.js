var express = require('express');
var app = express();
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/project_3_db');
// loads dependency for middleware for paramters
var bodyParser = require('body-parser');
// loads dependency that allows put and delete where not supported in html
var methodOverride = require('method-override');
var hbs = require('hbs');
// sets view engine to handlebars
app.set('view engine', 'hbs');
// connects assets like stylesheets
app.use(express.static(__dirname + '/public'));

app.listen(4000, function(){
 console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.render('topics/index');
});


// loads module containing all link and topic controller actions. not defined yet...
var topicsController = require("./controllers/topicsController");
var linksController = require("./controllers/linksController");
// connect mongoose interfaces to reminders mongo db




// allows for parameters in JSON and html
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));
// allows for put/delete request in html form
app.use(methodOverride('_method'));




// first route we'll define together ...
// app.get("/authors", authorsController.index)
