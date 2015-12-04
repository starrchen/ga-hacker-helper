var TopicModel = require("../models/topic")
var LinkModel = require("../models/link")

var topicsController = {
  index: function(req, res){
    TopicModel.find({}, function(err, docs){
      res.render("topics/index", {topics: docs})
    })
  }
}
module.exports = topicsController;
