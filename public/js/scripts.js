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
          // var linkResource = ('.postlinks').append('<h1></h1>')
          console.log(response.topics[0].links[i].url)
          $('.postlinks').append('<p>' + response.topics[i].links[i].url + '</p>');
          return
        }

      }
      $('.postlinks').append(links);
      console.log(response)
      // $('.postlinks').append(links);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  });
});
