var TopicView = function(topic){
  this.artist = artist;

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
    self.$el.html(this.topicEditTemplate(this.topic));

    self.$el.find(".updateTopic").on("click", function() {
      self.updateTopic();
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
      this.topic.fetchLinks().then(function(links){
        self.appendLinks(links, linksDiv);
      });
    }
    // toggle (note: songsDiv starts hidden)
    linksDiv.toggle();
    this.toggleButton(linksDiv);
  },
  appendLinks: function(links, linksDiv){
    links.forEach(function(link){
      var linkView = new LinkView(link);
      linksDiv.append(linkView.render());
    });
  },
  updateTopic: function() {
    var self = this;
    var data = {  name:     $('input[name=name]').val(),
                  imageUrl:     $('input[name=imageUrl]').val(),
                  description: $('input[name=description]').val() };
    self.topic.update(data).then(function() { self.render(); });
  },
  topicTemplate: function(topic){
    var html = $("<div>");
    html.append("<h3>" + topic.name + "</h3>");
    html.append("<img class='topic-photo' src='" + topic.imgUrl + "'>");
    html.append("<button class='showLinks'>Show Links</button>");
    html.append("<button class='editTopic'>Edit Topic</button>");
    html.append("<div class='links'></div>");
    return(html);
  },
  topicEditTemplate: function(topic) {
    var html = $("<div>");
    html.append("<input name='name' value='" + topic.name + "'>");
    html.append("<input name='description' value='" + topic.description + "'>");
    html.append("<img class='topic-photo' src='" + topic.imgUrl + "'>");
    html.append("<input name='photoUrl' value='" + topic.imgUrl + "'>");
    html.append("<button class='updateTopic'>Update Topic</button>");
    return(html);
  }
};
