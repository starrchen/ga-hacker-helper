$(document).ready(function(){
  Topic.fetch().then(function(topics){
    Topic.all.forEach(function(topic){
      var view = new TopicView(topic)
      view.render();
    })
  })
});
