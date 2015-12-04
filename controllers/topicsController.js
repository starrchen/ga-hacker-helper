var TopicModel = require("../models/topic");
var LinkModel = require("../models/link");

var topicsController = {
  index: function(req, res) {
    TopicModel.find({}, function(err, docs) {
      res.render("topics/index", {
        topics: docs
      });
    });
  },
  new: function(req, res) {
    res.render("topics/new");
  },
  create: function(req, res) {
    var topic = new TopicModel({
      name: req.body.name,
      description: req.body.description,
      imageUrl: req.body.imageUrl
    });
    topic.save(function(err) {
      if (!err) {
        res.redirect("topics");
      }
    });
  },
  show: function(req, res) {
    var id = req.params.id;
    TopicModel.findById(id, function(err, doc) {
      res.render("topics/show", {
        topic: doc
      });
    });
  },
  delete: function(req, res) {
    var id = req.params.id;
    TopicModel.findByIdAndRemove(id, function(err, doc) {
      res.redirect("/topics");
    });
  }
};
module.exports = topicsController;
