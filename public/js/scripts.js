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
      $(".all-topics").append("<div class='topic-'" +  i + "><h3>" + response.topics[i].name + "</h3></div>");
    }

  }).fail(function(response){
    console.log("Topics fetch fail");

  }).always(function(response){
    console.log("Beep boop!");
  })
});

  // $(".linktitle").on("click", function() {
  //   console.log("clicked");
  //   $.ajax({
  //     type: 'GET',
  //     dataType: 'json',
  //     url: "http://localhost:4000/topics"
  //   }).done(function(response) {
  //     console.log(response);
      // console.log(response.topics[0].name);
      // var links = function() {
      //   for(i = 0; i < response.topics[0].links.length; i++) {
      //     console.log(response.topics[0].links[i].url)
      //     $('.postlinks').append("<li><a href='" + response.topics[0].links[i].url + "'>" + response.topics[0].links[i].url + '</a>');
      //
      //   }
      // }
      // $('.postlinks').append(links);
//
//
//     }).fail(function(response){
//       console.log("Ajax get request failed.");
//     });
//   });
// });
