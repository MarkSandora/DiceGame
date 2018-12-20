// Clean Up
document.addEventListener("click", function() {
  rollDice();
});

function rollDice() {
  // Die 1 Random number 1-6
  var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

  // Replace Image of Die 1
  var randomImageSource1 = "images/dice" + randomNumber1 + ".png";
  document.querySelectorAll("img")[0].setAttribute("src", randomImageSource1);

  // Die 2 Random number 1-6
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  // Replace Image of Die 2
  var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

  //If player 1 wins
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  }
  //else if player 2 wins
  else if (randomNumber2 > randomNumber1) {
    document.querySelector("h1").innerHTML = "Player 2 Wins! 🚩";
  }
  //else draw
  else {
    document.querySelector("h1").innerHTML = "Draw!";
  }
}
rollDice();


