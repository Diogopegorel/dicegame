var player = (prompt("What is your name?"));
document.querySelectorAll("p")[0].innerHTML = player;

function rollTheDice() {

var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var dice1Img = "images/" + randomNumber1 + ".png";
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", dice1Img);

var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var dice2Img = "images/" + randomNumber2 + ".png";
var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", dice2Img);

if (randomNumber1 > randomNumber2) {
    document.getElementById("winner").innerHTML = player + " wins!!!! 🏁";
    
} else if (randomNumber2 > randomNumber1) {
    document.getElementById("winner").innerHTML = "🏴‍☠️ Computer Wins!!!";
} else {
    document.getElementById("winner").innerHTML = "This is a Tie!!!!!";
}
}

