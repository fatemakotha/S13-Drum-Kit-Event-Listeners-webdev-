
//Select all with a class of drum: Target all elements that have a selector of .drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //gives 7

//Create a for loop for these 7 buttons:
for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    alert("I got clicked");
  }); //addEventListener takes in a type of click and a function to exectue which is this case is alert
  // function() is an anonymouse function
}
