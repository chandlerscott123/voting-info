window.onload=function(){
  
  const form = document.querySelector("form");

  //write a submit event listener
  form.onsubmit = function(event){
    event.preventDefault();
  let ofAgeInfo = document.getElementById("ofAge");
  ofAgeInfo.setAttribute("class","hidden");
  //if age is greater or equal 18, remove class from div
  //else, remove class from notOfAge div

  };
  



}