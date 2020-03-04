var p1Button = document.querySelector("#p1");
var p2Button = document.getElementById("p2");
var resetButton = document.getElementById("reset");
var P1Display = document.querySelector("#p1Display");
var P2Display = document.querySelector("#P2Display");
var numInput = document.querySelector("input");
var winningScoreDisplay = document.querySelector("p span");
var p1Socre = 0;
var p2Score = 0;
var gameOver = false;
var winningScore = 5;

p1Button.addEventListener("click", function () {
  if (!gameOver) {
    p1Socre++;
    if (p1Socre === winningScore) {
      P1Display.classList.add("winner");
      gameOver = true;
    }
    P1Display.textContent = p1Socre;
  }
});

p2Button.addEventListener("click", function () {
  if (!gameOver) {
    p2Score++;
    if (p2Score === winningScore) {
      P2Display.classList.add("winner");
      gameOver = true;
    }
    P2Display.textContent = p2Score;
  }
});

resetButton.addEventListener("click", function () {
  reset();
});

function reset() {
  p1Socre = 0;
  p2Score = 0;
  P1Display.textContent = 0;
  P2Display.textContent = 0;
  P1Display.classList.remove("winner");
  P2Display.classList.remove("winner");
  gameOver = false;
}

numInput.addEventListener("change", function () {
  winningScoreDisplay.textContent = this.value;
  winningScore = Number(this.value);
  reset();
});

