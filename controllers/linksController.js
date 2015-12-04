var TopicModel = require("../models/topic")
var LinkModel = require("../models/link")

var linksController = {
  index: function(req, res){
    LinkModel.find({}, function(err, docs){
      res.render("links/index", {topics: docs})
    })
  }
}
module.exports = linksController;
