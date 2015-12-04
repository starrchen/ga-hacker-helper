var express = require('express');
var app = express();
var hbs = require('hbs');
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

app.listen(4000, function(){
 console.log("app listening on port 4000");
});

app.get("/", function(req, res){
  res.render('index');
});
