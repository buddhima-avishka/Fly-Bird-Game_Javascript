var bird = document.getElementById("bird");
let flyImageNumber = 0;
let flyAnimationNumber = 0;

function flyAnimation() {
  flyImageNumber = flyImageNumber + 1;

  if (flyImageNumber == 9) {
    flyImageNumber = 1;
  }

  document.querySelector(".bird").src =
    "Images/Game Page/Fly Bird/" + flyImageNumber + ".png";
}

function flyAnimationStart() {
  flyAnimationNumber = setInterval(flyAnimation, 140);
}

function keyCheck(event) {
  // alert(event.which);
  // enter = 13;

  if (event.keyCode === 13 && moveBackgroundAnimationId === 0) {
    moveBackgroundAnimationId = setInterval(moveBackground, 100);
  }
}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground() {
  backgroundImagePositionX = backgroundImagePositionX - 20;

  document.getElementById("background").style.backgroundPositionX =
    backgroundImagePositionX + "px";
}
