var TopicView = function(topic){
  this.topic = topic;
  this.$el = $("<div class='topic'></div>");
  this.render();
  $(".topics").append(this.$el);
};

TopicView.prototype = {
  render: function(){
    var self = this;
    self.$el.html(self.topicTemplate(self.topic));
    var showButton = self.$el.find(".showLinks");
    var editButton = self.$el.find(".editTopic");
    var songsDiv   = self.$el.find("div.links");
    songsDiv.hide(); // hide div until it's populated with songs
    showButton.on("click", function(){
      self.toggleLinks(linksDiv);
    });
    editButton.on("click", function() {
      self.renderEditForm();
    });
  },
  renderEditForm: function() {
    var self = this;
    self.$el.html(self.topicEditTemplate(self.topic));

    self.$el.find(".updateTopic").on("click", function() {
      self.updateTopic();
    });

    self.$el.find(".deleteTopic").on("click", function() {
      self.topic.destroy().then(function() { self.$el.fadeOut()});
    });
  },
  toggleButton: function(linksDiv){
    if(linksDiv.is(":visible")){
      linksDiv.siblings("button.showLinks").text("Hide Links");
    } else {
      linksDiv.siblings("button.showLinks").text("Show Links");
    }
  },
  toggleLinks: function(linksDiv){
    var self = this;
    // if not in DOM, populate
    if(linksDiv.children().length === 0){
      self.topic.fetchLinks().then(function(){
        self.appendLinks(self.topic.links, linksDiv);
      });
    }
    // toggle (note: songsDiv starts hidden)
    linksDiv.toggle();
    self.toggleButton(linksDiv);
  },
  appendLinks: function(links, linksDiv){
    links.forEach(function(song){
      var songView = new LinkView(link);
      linksDiv.append(linkView.render());
    });
  },
  updateTopic: function() {
    var self = this;
    var data = {  name:     $('input[name=name]').val(),
                  imageUrl: $('input[name=imageUrl]').val() };
    self.topic.update(data).then(function() { self.render(); });
  },
  topicTemplate: function(){
    var topic = this.topic;
    var html = $("<div>");
    html.append("<h3>" + topic.name + "</h3>");
    html.append("<img class='topicphoto' src='" + topic.imageUrl + "'>");
    html.append("<button class='showLinks'>Show Links</button>");
    html.append("<button class='editTopic'>Edit Topic</button>");
    html.append("<div class='links'></div>");
    return(html);
  },
  topicEditTemplate: function() {
    var topic = this.topic;
    var html = $("<div>");
    html.append("<input name='name' value='" + topic.name + "'>");
    html.append("<img class='topicphoto' src='" + topic.imageUrl + "'>");
    html.append("<input name='photoUrl' value='" + topic.imageUrl + "'>");
    html.append("<button class='updateTopic'>Update Topic</button>");
    html.append("<button class='deleteTopic'>Delete Topic</button>");
    return(html);
  }
};
