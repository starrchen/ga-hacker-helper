$(document).ready(function() {
  $(".postlinks").on("click", function() {
    console.log("clicked");
    $.ajax({
      type: 'GET',
      dataType: 'json',
      url: "http://localhost:4000/topics"
    }).done(function(response) {
      console.log(response);
    }).fail(function(response){
      console.log("Ajax get request failed.");
    });
  });
});
