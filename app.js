var express         = require('express');
var app             = express();
var mongoose        = require('mongoose');
var passport        = require('passport');
var flash           = require('connect-flash');
var hbs             = require("hbs");
var morgan          = require('morgan');
var cookieParser    = require('cookie-parser');
var bodyParser      = require('body-parser'); // loads dependency for middleware for parameters
var session         = require('express-session');
var methodOverride  = require('method-override') // loads dependency that allows put and delete where not supported in html

//connecting to database
mongoose.connect('mongodb://localhost/project_3_db');

// sets view engine to handlebars
app.set('view engine', 'hbs');

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

app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser());

app.use(session({ secret: 'PROJECT-3' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

var config = require('./config/passport')
config(passport);

// custom middleware
app.use(function(req, res, next){
  res.locals.currentUser = req.user;
  next();
});

// routes
app.get("/.:format?", topicsController.index)
app.get("/topics.:format?", topicsController.index)
app.get("/topics/new.:format?", topicsController.new)
app.post("/topics.:format?", topicsController.create)
app.get("/topics/:id.:format?", topicsController.show)
app.get("/tppics/:id/edit.:format?", topicsController.edit)
app.delete("/topics/:id.:format?", topicsController.delete)

//serve to localhost
app.listen(4000, function(){
 console.log("app listening on port 4000");
});
