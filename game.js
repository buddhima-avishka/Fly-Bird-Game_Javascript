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
  // space = 32;
  // w = 119;
  // s = 115;

  if (event.keyCode === 13 && moveBackgroundAnimationId === 0) {
    moveBackgroundAnimationId = setInterval(moveBackground, 100);
  }

  if (event.keyCode === 32) {
    alert("Game Paused");
  }

  if (event.keyCode === 119) {
    up();
  } else if (event.keyCode === 115) {
    down();
  }
}

var backgroundImagePositionX = 0;
var moveBackgroundAnimationId = 0;

function moveBackground() {
  backgroundImagePositionX = backgroundImagePositionX - 20;

  document.getElementById("background").style.backgroundPositionX =
    backgroundImagePositionX + "px";
}

var birdPosition = 350;

function up(){
  birdPosition = birdPosition - 10;

  document.getElementById("bird").style.top = birdPosition + "px";
}

function down() {
  birdPosition = birdPosition + 10;

  document.getElementById("bird").style.top = birdPosition + "px";
}
