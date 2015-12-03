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
    if(songsDiv.is(":visible")){
      songsDiv.siblings("button.showLinks").text("Hide Links");
    } else {
      songsDiv.siblings("button.showLinks").text("Show Links");
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
  appendSongs: function(songs, songsDiv){
    songs.forEach(function(song){
      var songView = new SongView(song);
      songsDiv.append(songView.render());
    });
  },
  updateTopic: function() {
    var self = this;
    var data = {  name:     $('input[name=name]').val(),
                  photoUrl: $('input[name=photoUrl]').val() };
    self.artist.update(data).then(function() { self.render(); });
  },
  artistTemplate: function(){
    var artist = this.artist;
    var html = $("<div>");
    html.append("<h3>" + artist.name + "</h3>");
    html.append("<img class='artist-photo' src='" + artist.photoUrl + "'>");
    html.append("<button class='showSongs'>Show Songs</button>");
    html.append("<button class='editArtist'>Edit Artist</button>");
    html.append("<div class='songs'></div>");
    return(html);
  },
  artistEditTemplate: function() {
    var artist = this.artist;
    var html = $("<div>");
    html.append("<input name='name' value='" + artist.name + "'>");
    html.append("<img class='artist-photo' src='" + artist.photoUrl + "'>");
    html.append("<input name='photoUrl' value='" + artist.photoUrl + "'>");
    html.append("<button class='updateArtist'>Update Artist</button>");
    html.append("<button class='deleteArtist'>Delete Artist</button>");
    return(html);
  }
};
