var noOfDrums = document.querySelectorAll(".drum").length;
// detects which button pressed

for (var i = 0; i < noOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
  buttonAnimation(buttonInnerHTML);
  });
}

// detects when key is pressed and calls make sound function
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});


// to make sound
function makeSound(key) {
   key=key.toLowerCase()
  switch (key) {
    case "g":
      var audio = new Audio("tom-1.mp3");
      audio.play();
      break;
    case "s":
      var audio = new Audio("tom-2.mp3");
      audio.play();
      break;
    case "o":
      var audio = new Audio("tom-3.mp3");
      audio.play();
      break;
    case "w":
      var audio = new Audio("tom-4.mp3");
      audio.play();
      break;
    case "m":
      var audio = new Audio("snare.mp3");
      audio.play();
      break;
    case "y":
      var audio = new Audio("crash.mp3");
      audio.play();
      break;
    case "a":
      var audio = new Audio("kick-bass.mp3");
      audio.play();
      break;
    default:
      console.log("buttonInnerHTML");
  }

}

// animation
function buttonAnimation(currentKey){
  var activeButton= document.querySelector("."+ currentKey);
  activeButton.classList.add("pressed");
setTimeout(function(){
    activeButton.classList.remove("pressed")
 },100);

}
