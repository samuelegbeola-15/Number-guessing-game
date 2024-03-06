'use strict';

document.querySelector('.again').addEventListener('click', function () {
  // Reseting the state variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reseting to the initial display values
  displayMessage(`Start guessing...`);
  displayScore(score);
  document.querySelector(`.number`).textContent = `?`;
  document.querySelector(`.guess`).value = '';

  // Reseting the background
  document.querySelector(`.number`).style.width = '15rem';
  document.querySelector(`body`).style.backgroundColor = '#222';
});

// Declaring the state variables
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Event listeners
document.querySelector(`.check`).addEventListener('click', function () {
  const guess = Number(document.querySelector(`.guess`).value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);
    // When the player's guess is either too low or too high
  } else if (guess !== secretNumber) {
    winStatus(guess);
    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct number!`);
    document.querySelector(`.number`).textContent = secretNumber;

    document.querySelector(`.number`).style.width = '30rem';
    document.querySelector(`body`).style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      document.querySelector(`.highscore`).textContent = highscore;
    }
  }
});

// FUNCTIONS
const displayMessage = function (message) {
  document.querySelector(`.message`).textContent = message;
};

const displayScore = function (score) {
  document.querySelector(`.score`).textContent = score;
};

const winStatus = function (guessNumber) {
  if (score > 1) {
    displayMessage(guessNumber > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    score--;
    displayScore(score);
  } else {
    displayMessage(`💥 You lost the game!`);
    document.querySelector(`.score`).textContent = 0;
  }
};
