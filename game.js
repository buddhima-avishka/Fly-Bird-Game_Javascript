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

    if (obstacleAnimationId === 0) {
      obstacleAnimationId = setInterval(obstacleAnimation, 100);
    }
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

var score = 0;

function moveBackground() {
  backgroundImagePositionX = backgroundImagePositionX - 20;

  document.getElementById("background").style.backgroundPositionX =
    backgroundImagePositionX + "px";
  
  score = score + 1;
  document.getElementById("score").innerHTML = score;  
}

var birdPosition = 350;

function up() {
  birdPosition = birdPosition - 10;

  document.getElementById("bird").style.top = birdPosition + "px";
}

function down() {
  birdPosition = birdPosition + 10;

  document.getElementById("bird").style.top = birdPosition + "px";
}

obstacleMarginLeft = 1500;

function createObstacle() {
  for (var i = 0; i <= 10; i++) {
    var obstacle = document.createElement("div");
    obstacle.className = "obstacle";
    document.getElementById("background").appendChild(obstacle);
    obstacle.style.marginLeft = obstacleMarginLeft + "px";
    obstacle.id = "obstacle" + i;

    // obstacleMarginLeft = obstacleMarginLeft + 200;

    if (i < 5) {
      obstacleMarginLeft = obstacleMarginLeft + 2000;
    }

    if (i >= 5) {
      obstacleMarginLeft = obstacleMarginLeft + 1000;
    }
  }
}

var obstacleAnimationId = 0;

function obstacleAnimation() {
  for (var i = 0; i <= 10; i++) {
    var obstacle = document.getElementById("obstacle" + i);
    var currentMarginLeft = getComputedStyle(obstacle).marginLeft;
    var newMarginLeft = parseInt(currentMarginLeft) - 25;
    obstacle.style.marginLeft = newMarginLeft + "px";

    if (newMarginLeft >= -110 && newMarginLeft <= 200) {
      if (birdPosition >= 200 && birdPosition <= 320) {
        clearInterval(obstacleAnimationId);

        clearInterval(flyAnimationNumber);
        flyAnimationNumber = -1;

        clearInterval(moveBackgroundAnimationId);
        moveBackgroundAnimationId = -1;
      }
    }
  }
}
