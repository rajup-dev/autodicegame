var randomnumber1 = Math.random() * 6;
randomnumber1 = Math.floor(randomnumber1) + 1;
image1 = "images/dice" + randomnumber1 + ".png";

document.querySelector(".img1").setAttribute("src", image1);

var randomnumber2 = Math.random() * 6;
randomnumber2 = Math.floor(randomnumber2) + 1;
image2 = "images/dice" + randomnumber2 + ".png";

document.querySelector(".img2").setAttribute("src", image2);

if (randomnumber1 === randomnumber2) {
  document.querySelector("h1").innerHTML = "Match Tie";
} else if (randomnumber1 > randomnumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Win⛳";
} else if (randomnumber2 > randomnumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Win⛳ ";
}
