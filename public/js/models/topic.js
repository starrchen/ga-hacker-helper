var Topic = function(info){
  this.name = info.name;
  this.description = info.description;
  this.imageUrl = info.imageUrl;
  this.id = info.id;
};

Topic.fetch = function(){
  var request = $.getJSON("http://localhost:4000/topics")
  .then(function(response) {
    var topics = [];
    for(var i = 0; i < response.length; i++){
      topics.push(new Topic(response[i]));
    }
    return topics;
    })
  .fail(function(response){
      console.log("js failed to load");
    });
  return request;
};

Topic.prototype = {
  fetchLinks: function(){
    var url = "http://localhost:4000/topics/" + this.id + "/links";
    var request = $.getJSON(url)
    .then(function(response){
      var links = [];
      for(var i = 0; i < response.length; i++){
        links.push(new Link(response[i]));
      }
      return links;
     })
    .fail(function(repsonse){
      console.log("js failed to load");
    });
    return request;
  },
  update: function(topicData) {
    var self = this;

    var url = "http://localhost:4000/topics/" + this.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(topicData),
      contentType : 'application/json'
    }).then(
      function(updatedTopicInfo) {self.reload(updatedTopicInfo);}
    );
    return request;
  },
  reload: function(newData){
    for(var attrname in newData) {
      this[attrname] = newData[attrname];
    }
  }
};
