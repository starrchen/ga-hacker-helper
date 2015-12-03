var LinkView = function(link){
  this.link = link;
}

LinkView.prototype = {
  render: function(){
    var el = $("<p>" + this.link.title + "</p>");
    return(el)
  }
}
