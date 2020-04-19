var buttonControl = document.querySelectorAll("button, .drum").length;

//event handler for mouseclick
for(var i = 0; i < buttonControl; i++){
  document.querySelectorAll("button, .drum")[i].addEventListener('click',function(){
    var buttonInnerHTML = this.innerHTML;
    var activeButton = document.querySelector("." + buttonInnerHTML);

    makeSound(buttonInnerHTML);
    keyAnimation(buttonInnerHTML);
    setTimeout(function(){
      activeButton.classList.remove("pressed");
    }, 100);
    console.log(buttonInnerHTML + " button was clicked");
  });
}

//Event handler for keydown
document.addEventListener("keydown",function(){
  makeSound(event.key);
  keyAnimation(event.key);
  console.log(event.key + " key was pressed")
});

//Event handler for keyup
document.addEventListener("keyup",function(){
    var keyReleased = document.querySelector("." + event.key)
    if(keyReleased === null){
      console.log(event.key + " key was released")
    }
    else{
    keyReleased.classList.remove("pressed");
    console.log(event.key + " key was released")
    }
})

//Handles animation for button press
function keyAnimation(keyID){
  var buttonPressed = document.querySelector("." + keyID);
  if(buttonPressed === null){
    console.log("animation for " + keyID + " not needed");
  }
  else{
    buttonPressed.classList.add("pressed");
    console.log("animation executed for " + keyID + " key");
  }
}

//Sound handler. Switches between sounds depending on which key or button is pressed
function makeSound(key){
  switch (key) {
    case 'w':
      var tom1 = new Audio("sounds/tom-1.mp3");
      tom1.play();
      console.log("audio played for w button");
      break;

      case "a":
        var tom2 = new Audio("sounds/tom-2.mp3");
        tom2.play();
        console.log("audio played for a button");
        break;

        case "s":
          var tom3 = new Audio("sounds/tom-3.mp3");
          tom3.play();
          console.log("audio played for s button");
          break;

          case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            console.log("audio played for d button");
            break;

              case "j":
                var snare = new Audio("sounds/snare.mp3");
                snare.play();
                console.log("audio played for j button");
                break;

                case "k":
                  var kickBass = new Audio("sounds/kick-bass.mp3");
                  kickBass.play();
                  console.log("audio played for k button");
                  break;

                  case "l":
                    var crash = new Audio("sounds/crash.mp3");
                    crash.play();
                    console.log("audio played for l button");
                    break;

    default: console.log(key + " was pressed, no audio needed");

  }
}
