'use strict';

const bodyEl = document.querySelector(`body`);
const numberEl = document.querySelector(`.number`);
const againEl = document.querySelector('.again');
const guessEl = document.querySelector(`.guess`);
const checkEl = document.querySelector(`.check`);
const highScoreEl = document.querySelector(`.highscore`);
const messageEl = document.querySelector(`.message`);
const scoreEl = document.querySelector(`.score`);

againEl.addEventListener('click', function () {
  // Reseting the state variables
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  // Reseting to the initial display values
  displayMessage(`Start guessing...`);
  displayScore(score);
  numberEl.textContent = `?`;
  guessEl.value = '';

  // Reseting the background
  numberEl.style.width = '15rem';
  bodyEl.style.backgroundColor = '#222';
});

// Declaring the state variables
let score = 20;
let highscore = 0;
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// Event listeners
checkEl.addEventListener('click', function () {
  const guess = Number(guessEl.value);

  // When there is no input
  if (!guess) {
    displayMessage(`⛔ No number!`);
    // When the player's guess is either too low or too high
  } else if (guess !== secretNumber) {
    winStatus(guess);
    // When the player wins
  } else if (guess === secretNumber) {
    displayMessage(`✅ Correct number!`);
    numberEl.textContent = secretNumber;

    numberEl.style.width = '30rem';
    bodyEl.style.backgroundColor = '#60b347';

    if (score > highscore) {
      highscore = score;
      highScoreEl.textContent = highscore;
    }
  }
});

// FUNCTIONS
const displayMessage = function (message) {
  messageEl.textContent = message;
};

const displayScore = function (score) {
  scoreEl.textContent = score;
};

const winStatus = function (guessNumber) {
  if (score > 1) {
    displayMessage(guessNumber > secretNumber ? `📈 Too high!` : `📉 Too low!`);
    score--;
    displayScore(score);
  } else {
    displayMessage(`💥 You lost the game!`);
    scoreEl.textContent = 0;
  }
};
