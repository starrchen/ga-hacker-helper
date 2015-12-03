var Topic = function(info){
  this.name = info.name;
  this.imageUrl = info.imageUrl;
  this.description = info.description;
  this.id = info.id;
};
Topic.all = []
Topic.fetch = function(){
  var url = "http://localhost:3000/Topics";
  var request = $.getJSON(url).then(function(response){
    for(var i = 0; i < response.length; i++){
      Topic.all.push(new Topic(response[i]));
    }
  }).fail(function(response){
    console.log("js failed to load");
  });
  return request;
};

Topic.prototype = {
  fetchLinks: function(){
    var artist = this;
    var url = "http://localhost:3000/Topics/" + topic.id + "/links";
    topic.links = [];
    var request = $.getJSON(url).then(function(response){
      for(var i = 0; i < response.length; i++){
        topic.links.push(new Link(response[i]));
      }
    }).fail(function(repsonse){
      console.log("js failed to load");
    });
    return request;
  },
  update: function(topicData) {
    var self = this;
    var url = "http://localhost:3000/topics/" + self.id;
    var request = $.ajax({
      url: url,
      method: "patch",
      data: JSON.stringify(artistData),
      contentType : 'application/json'
    }).then(
      function(updatedTopicInfo) {self.reload(updatedTopicInfo);}
    );
    return request;
  },
  destroy: function() {
    var url = "http://localhost:3000/topics/" + this.id;
    var request = $.ajax( {url: url, method: "delete"} );
    return request;
  },
  reload: function(newData){
    for(var attrname in newData) {
      this[attrname] = newData[attrname];
    }
  }
};
