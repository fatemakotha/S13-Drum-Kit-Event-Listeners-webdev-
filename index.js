
//Select all with a class of drum: Target all elements that have a selector of .drum
var numberOfDrumButtons = document.querySelectorAll(".drum").length; //gives 7


//addEventListener takes in a type of click and a function to exectue which is this case is alert
// function() is an anonymouse function
//Create a for loop for these 7 buttons:
for (var i = 0; i<numberOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var buttonInnerHTML = this.innerHTML;

    switch (buttonInnerHTML) {
      case "w":
          var audio = new Audio("sounds/tom-1.mp3");
          audio.play();
          break;

      case "a":
          var audio = new Audio("sounds/tom-2.mp3");
          audio.play();
          break;

      case "s":
          var audio = new Audio("sounds/tom-3.mp3");
          audio.play();
          break;

      case "d":
          var audio = new Audio("sounds/tom-4.mp3");
          audio.play();
          break;

      case "j":
          var audio = new Audio("sounds/snare.mp3");
          audio.play();
          break;

      case "k":
          var audio = new Audio("sounds/crash.mp3");
          audio.play();
          break;

      case "l":
          var audio = new Audio("sounds/kick-bass.mp3");
          audio.play();
          break;
        



      default:

    }


  });
}



// var audio = new Audio("sounds/tom-1.mp3");
// audio.play();
