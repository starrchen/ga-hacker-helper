$(document).ready(function(){
  console.log("YERP");
  $.getJSON('/auth').then(function(json){
    if(json.isAuthenticated === "true"){
      alert("Make a topic!")
    } else{
      alert("Log in first, please");
      window.location = "/signup";
    }
  })
})
