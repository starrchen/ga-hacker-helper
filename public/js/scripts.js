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
    //  $(".all-topics").append("<div class='topic-" +  i + "'><h3>" + response.topics[i].name + "</h3><div>"+ response.topics[i].links +"</div></div>");
     var topic = response.topics[i]
     var topicdiv = $('<div/>', {class: "topic-" + i})
     topicdiv.text(topic.name)
     console.log("topicdiv", topicdiv)
    //  links_div = $("div")
    //  //for each link in topic.links
    //    links_div.append(link)
    // }
    // topicdiv.append(links_div)
     $(".all-topics").append(topicdiv)
   }

 }).fail(function(response){
   console.log("Topics fetch fail");

 }).always(function(response){
   console.log("Beep boop!");
 })
});
