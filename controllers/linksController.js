var express = require("express");
var router = express.Router();
var Artist = require("../models/link");
var Song = require("../models/topic");

function error(response, message){
  response.status(500);
  response.json({error: message})
}

router.get("/", function(req, res){
  Link.find({}).populate("topic", "name").then(function(links){
    res.json(links);
  });
});

router.get("/:id", function(req, res){
  Link.findById(req.params.id).populate("topic", "name").then(function(link){
    res.json(link);
  });
});

router.put("/:id", function(req, res){
  Link.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true}).then(function(link){
    res.json(link);
  });
});

router.delete("/:id", function(req, res){
  Link.findById(req.params.id).then(function(link){
    Topic.findByIdAndUpdate(link.topic._id, {
      $pull: { links: {_id: req.params.id} }
    }).then(function(){
      return link.remove();
    }).then(function(){
      res.json({success: true});
    })
  });
});

module.exports = router;
