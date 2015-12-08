$(document).ready(function(){
  Topic.fetch().then(function(topics){
    topics.forEach(function(topics){
      var view = new TopicView(topic)
      view.render();
    })
  })

});
