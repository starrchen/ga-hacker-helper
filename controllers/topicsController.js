var express = require("express");
var router = express.Router();
var Link = require("../models/link");
var Topic = require("../models/topic");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/", function(req, res){
  Topic.find({}).populate("links").then(function(topics){
    res.json(topics);
  });
});

router.post("/", function(req, res){
  new Topic(req.body).save().then(function(topic){
    res.json(topic);
  });
});

router.get("/:id", function(req, res){
  Topic.findById(req.params.id).populate("links").then(function(topic){
    res.json(topic);
  });
});

router.get("/:id/links", function(req, res){
  Topic.findById(req.params.id).populate("links").then(function(topic){
    res.json(topic.links);
  });
});

router.patch("/:id", function(req, res){
  Topic.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(topic){
    res.json(topic);
  })
});

router.delete("/:id", function(req, res){
  Topic.findByIdAndRemove(req.params.id).then(function(){
    res.json({success: true});
  });
});

module.exports = router;
