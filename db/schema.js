var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/tunr");

var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var TopicSchema = new Schema(
  {
    name: String,
    description: String,
    imageUrl: String,
    links: [{type: ObjectId, ref: "Link"}]
  },
  {
    toObject: {virtuals: true},
    toJSON: {virtuals: true}
  }
);

TopicSchema.virtual("id").get(function(){
  return this._id;
});

var LinkSchema = new Schema({
  title: String,
  summary: String,
  url: String,
  topic: {type: ObjectId, ref: "Topic"}
});

var TopicModel = mongoose.model("Topic", TopicSchema);
var LinkModel = mongoose.model("Link", LinkSchema);
