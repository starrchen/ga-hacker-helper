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

     for (var j = 0; j < topic.links.length; j++){
       link = topic.links[j]
       var linkTag = $('<a/>')
       linkTag.attr("href", link.url)
       linkTag.text(link.url)
       console.log(",linkTag", linkTag)
       topicdiv.append(linkTag)
     }
     //for each link in topic.links



     $(".all-topics").append(topicdiv)
   }

 }).fail(function(response){
   console.log("Topics fetch fail");

 }).always(function(response){
   console.log("Beep boop!");
 })
});
