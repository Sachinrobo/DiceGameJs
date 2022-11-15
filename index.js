// For the First Image
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomImage = "dice" + randomNumber1 + ".png";
var randomImageSource = "images/" + randomImage;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);

// For the second images
var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImageSource2 = "images/" + randomImage2;
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomImageSource2);

// Set the Win and Loss in the Game
var heading = document.querySelector("h1");
if (randomNumber1 > randomNumber2) {
  heading.innerHTML = "🚩 Player 1 Won";
} else if (randomNumber1 < randomNumber2) {
  heading.innerHTML = "Player 2 Won 🚩";
} else {
  heading.innerHTML = "Draw!";
}
