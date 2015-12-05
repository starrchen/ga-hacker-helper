// requiring mongoose dependency
var mongoose = require('mongoose');

// instantiate a name space for our Schema constructor defined by mongoose.
var Schema = mongoose.Schema,
    ObjectId = Schema.ObjectId;

// defining schema for reminders
var LinkSchema = new Schema({
  title: String,
  summary: String,
  url: String,
  source: String
  // topic: [TopicSchema]
  // topic_id: foreign_key
});

// defining schema for authors.
var TopicSchema = new Schema({
  name: String,
  description: String,
  imageUrl: String,
  links: [LinkSchema]
});

// setting models in mongoose utilizing schemas defined above
var LinkModel = mongoose.model("Link", LinkSchema);
var TopicModel = mongoose.model("Topic", TopicSchema);
