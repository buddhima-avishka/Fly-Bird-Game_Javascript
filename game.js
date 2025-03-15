var bird = document.getElementById("bird");
let flyImageNumber = 0;
let flyAnimationNumber = 0;

function flyAnimation() {
  flyImageNumber = flyImageNumber +1;

  if (flyImageNumber == 9){
    flyImageNumber = 1;
  }

  document.querySelector(".bird").src = "Images/Game Page/Fly Bird/" + flyImageNumber + ".png";

}

function flyAnimationStart() {
  flyAnimationNumber = setInterval(flyAnimation,140);
}