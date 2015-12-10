
$(document).ready(function() {
  var url = "http://localhost:4000/topics.json"
  var request = $.ajax({
    url: url,
    type: "GET",
    dataType: "json"
  }).done(function(response){
    var allTopics = [];
    for (var i = 0; i < response.topics.length; i++){
      console.log(response.topics[i].name);
      $(".all-topics").append("<div class='topic' id='"+i+"'><h3 class='topicHeader'>" + response.topics[i].name + "</h3></div>");
    }

    $(".topicHeader").on("click", function() {
      console.log("clicked");
      var linksUL = $(this).siblings('ul').first();
      // debugger
      console.log("linksUL", linksUL);
      //if links exist
      if(linksUL.length){
        linksUL.toggle();
      } else {
        var topicId = $(this).parent().attr('id');
        console.log(topicId);
        var linksArray = []
        for(i = 0; i < response.topics[topicId].links.length; i++) {
          console.log(response.topics._id);
          console.log(response.topics[topicId].links[i].url);
          linksArray[i] = ("<li><a href='" + response.topics[topicId].links[i].url + "'>" + response.topics[topicId].links[i].url + '</a>');
        }
        var linksUL = $("<ul>").append(linksArray);
        $('#'+topicId).append(linksUL);
      }
    })
  }).fail(function(response){
    console.log("Ajax get request failed.");
  });
});
