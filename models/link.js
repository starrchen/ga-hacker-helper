require("../db/schema");
var mongoose = require('mongoose');

var LinkModel = mongoose.model("Link");
module.exports = LinkModel;
