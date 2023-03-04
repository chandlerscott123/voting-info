window.onload=function(){
  
  const form = document.querySelector("form");

  //write a submit event listener
  form.onsubmit = function(event){
    event.preventDefault();
  
    let ofAgeInfo = document.getElementById("ofAge");
    ofAgeInfo.setAttribute("class","hidden");

    let notOfAgeInfo = document.getElementById("notOfAge");
    notOfAgeInfo.setAttribute("class", "hidden");

    let age = parseInt(document.querySelector("input#age").value);

  //if age is greater or equal 18, remove hidden class from div
  //else, remove hidden class from notOfAge div
    if (age>= 18){
      ofAgeInfo.removeAttribute("class");
    }
    else{
      notOfAgeInfo.removeAttribute("class");
    }



  };

}