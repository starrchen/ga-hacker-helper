var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/project-3");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TopicSchema = new Schema(
  {
    name: String,
    summary: String,
    image: String,
    links: [{type: ObjectId, ref: "Link"}]
  },
  {

  }
);

var LinkSchema = new Schema{
  {
    name: String,
    url: String,
    description: String,
    topic: [{type: ObjectId, ref: "Topic"}]
  },
  {

  }
};

var TopicModel = mongoose.model("Topic", TopicSchema);
var LinkModel = mongodb.model("Link", LinkSchema);
