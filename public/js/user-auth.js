$(document).ready(function(){
  console.log("YERP");
  $.getJSON('/auth').then(function(json){
    if(json.isAuthenticated === "true"){
      console.log("Beep boop!");
    } else{
      alert("Log in first, please!");
      window.location = "/signup";
    }
  })
})
