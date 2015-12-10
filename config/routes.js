var express = require('express');
var router = express.Router();
// Parses information from POST
var bodyParser = require('body-parser');
// Used to manipulate POST methods
var methodOverride = require('method-override');
var passport = require("passport");
var usersController = require('../controllers/users');
var topicsController = require('../controllers/topicsController');
function authenticatedUser(req, res, next){
  if(req.isAuthenticated()) return next()
  res.redirect("/");
}

// Routes necessary for Passport user authentication
router.route('/signup')
  .get(usersController.getSignup)
  .post(usersController.postSignup);

router.route('/login')
  .get(usersController.getLogin)
  .post(usersController.postLogin)

router.route("/logout")
  .get(usersController.getLogout)

// For implementing user authentication
router.route('/auth').get(function(req,res){
  if (req.user){
    res.json({isAuthenticated : "true"});
  }else {
    res.json({isAuthenticated : "false"});
  }
});

// Topic routes
router.get("/.:format?", topicsController.index);
router.get("/topics.:format?", topicsController.index);
router.get("/topics/new.:format?", topicsController.new);
router.post("/topics.:format?", topicsController.create);
router.get("/topics/:id.:format?", topicsController.show);
router.delete("/topics/:id.:format?", topicsController.delete);
router.put("/topics/:id.:format?", topicsController.update);
router.get("/topics/:id/edit", topicsController.edit);

// Link routes
router.post("/topics/:id/links", topicsController.addlink);
router.delete("/topics/:topicId/links/:id", topicsController.removelink);


// AJAX routes
router.get("/ajax", topicsController.ajax);




module.exports = router;
