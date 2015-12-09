$(document).ready(function() {
  $(".postlinks").on("click", function() {
    console.log("clicked");
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:4000/topics"
    }).done(function(response) {
      console.log(response.topics[0].name);
      var links = function() {
        for(i = 0; i < response.topics[0].links.length; i++) {
        response.topics[0].links[i]
      }
    }
      console.log(response)
      console.log(links)
      $('.postlinks').append(links);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  });
});
